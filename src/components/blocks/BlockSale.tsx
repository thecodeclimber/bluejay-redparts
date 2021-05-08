// react
import React, { useRef } from 'react';
// third-party
import Slick from 'react-slick';
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import Arrow from '~/components/shared/Arrow';
import Decor from '~/components/shared/Decor';
import ProductCard from '~/components/shared/ProductCard';
import Timer from '~/components/shared/Timer';
import { baseUrl } from '~/services/utils';
import { IProduct } from '~/interfaces/product';
import {
  BlockBlockSale,
  BlockSaleContent,
  BlockSaleheader,
  BlockSaleTitle,
  BlockSaleSubTitle,
  BlockSaleTimer,
  BlockSaleControls,
  BlockSaleLink,
  BlockSaleBody,
  BlockSaleImage,
  BlockSaleLoader,
  BlockSaleCarousel,
  BlockSaleItem,
  BlockSaleHeaderDecor,
  BlockSaleBodyDecor,
  BlockSaleArrow,
} from '~/styled-components/blocks/BlockSale';
interface Props {
  products: IProduct[];
  loading?: boolean;
}

const slickSettings: ISlickProps = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    { breakpoint: 1399, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 459, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

function BlockSale(props: Props) {
  const { products, loading = false } = props;
  const slickRef = useRef<Slick>(null);

  const handleNextClick = () => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  };

  return (
    <BlockBlockSale>
      <BlockSaleContent>
        <BlockSaleheader>
          <BlockSaleTitle>
            <FormattedMessage id="HEADER_DEAL_ZONE_TITLE" />
          </BlockSaleTitle>
          <BlockSaleSubTitle>
            <FormattedMessage id="HEADER_DEAL_ZONE_SUBTITLE" />
          </BlockSaleSubTitle>
          <BlockSaleTimer>
            <Timer time={3 * 24 * 60 * 60} />
          </BlockSaleTimer>
          <BlockSaleControls>
            <BlockSaleArrow
              as={Arrow}
              prev={true}
              direction="prev"
              onClick={handlePrevClick}
            />
            <BlockSaleLink>
              <AppLink href="/">
                <FormattedMessage id="LINK_VIEW_ALL_AVAILABLE_OFFERS" />
              </AppLink>
            </BlockSaleLink>
            <BlockSaleArrow
              as={Arrow}
              next={true}
              direction="next"
              onClick={handleNextClick}
            />
            <BlockSaleHeaderDecor as={Decor} sliderdecor={true} type="center" />
          </BlockSaleControls>
        </BlockSaleheader>
        <BlockSaleBody>
          <BlockSaleBodyDecor as={Decor} type="bottom" />
          <BlockSaleImage
            style={{ backgroundImage: `url(${baseUrl('/images/sale.jpg')})` }}
          />
          <BlockSaleLoader loading={loading ? 1 : 0} />
          <div className="container">
            <BlockSaleCarousel>
              <AppSlick ref={slickRef} {...slickSettings}>
                {products.map((product) => (
                  <BlockSaleItem key={product.id}>
                    <ProductCard
                      product={product}
                      exclude={['features', 'list-buttons']}
                    />
                  </BlockSaleItem>
                ))}
              </AppSlick>
            </BlockSaleCarousel>
          </div>
        </BlockSaleBody>
      </BlockSaleContent>
    </BlockBlockSale>
  );
}

export default React.memo(BlockSale);
