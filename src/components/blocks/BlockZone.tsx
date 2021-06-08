// react
import React, { useEffect, useMemo, useRef, useState } from 'react';
// third-party
import classNames from 'classnames';
import Slick from 'react-slick';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import Arrow from '~/components/shared/Arrow';
import ProductCard, {
  IProductCardElement,
} from '~/components/shared/ProductCard';
import url from '~/services/url';
import { baseUrl } from '~/services/utils';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';
import {
  BlockBlockZone,
  BlockZoneBody,
  CategoryCardBody,
  CategoryCardOverlayImage,
  CategoryCardOverlayImageBlue,
  CategoryCardContent,
  CategoryCardInfo,
  CategoryCardName,
  CategoryCardChildren,
  CategoryCardLayoutOverLay,
  BlockZoneWidget,
  BlockZoneWidgetHeader,
  BlockZoneTabs,
  BlockZoneTabsButton,
  BlockZoneWidgetBody,
} from '~/styled-components/blocks/BlockZone';
export interface IBlockZoneTab {
  name: string;
  source: () => Promise<IProduct[]>;
}

interface Props {
  image: string;
  mobileImage: string;
  categorySlug: string;
}

const slickSettings: ISlickProps = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    { breakpoint: 1399, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 459, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const excludeElements: IProductCardElement[] = ['features', 'list-buttons'];

function BlockZone(props: any) {
  const { productsList } = props;
  const intl = useIntl();
  const { image, mobileImage, categorySlug } = props;
  const slickRef = useRef<Slick>(null);
  const cancelRequestRef = useRef(() => {});
  const [category, setCategory] = useState<IShopCategory | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState<any | null>(null);
  const subs = category?.children || [];

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

  const tabs: any[] = useMemo(
    () => [
      {
        name: intl.formatMessage({ id: 'TEXT_TAB_FEATURED' }),
        result: productsList.featuredProducts,
      },
      {
        name: intl.formatMessage({ id: 'TEXT_TAB_BESTSELLERS' }),
        result: productsList.topRatedProducts,
      },
      {
        name: intl.formatMessage({ id: 'TEXT_TAB_TOP_RATED' }),
        result: productsList.topRatedProducts,
      },
    ],
    [intl, categorySlug]
  );

  const load = (tab: any) => {
    cancelRequestRef.current();

    let canceled = false;
    cancelRequestRef.current = () => {
      canceled = true;
    };

    setIsLoading(true);

    setIsLoading(false);
    setProducts(tab.result);
  };

  const onTabClick = (tab: any) => {
    setCurrentTab(tab);
    load(tab);
  };

  // Unmount.
  useEffect(
    () => () => {
      cancelRequestRef.current();
    },
    []
  );

  useEffect(() => {
    let canceled = false;

    shopApi.getCategoryBySlug(categorySlug, { depth: 1 }).then((result) => {
      if (canceled) {
        return;
      }

      setCategory(result);
    });

    setCurrentTab(tabs[0]);
    load(tabs[0]);

    return () => {
      canceled = true;
    };
  }, [tabs, categorySlug]);

  if (!category) {
    return null;
  }

  return (
    <BlockBlockZone>
      <div className="container">
        <BlockZoneBody>
          <CategoryCardLayoutOverLay>
            <CategoryCardBody>
              <CategoryCardOverlayImage>
                <AppImage
                  srcSet={`${baseUrl(mobileImage)} 530w, ${baseUrl(
                    image
                  )} 305w`}
                  src={image}
                  sizes="(max-width: 575px) 530px, 305px"
                />
              </CategoryCardOverlayImage>
              <CategoryCardOverlayImageBlue>
                <AppImage
                  srcSet={`${baseUrl(mobileImage)} 530w, ${baseUrl(
                    image
                  )} 305w`}
                  src={image}
                  sizes="(max-width: 575px) 530px, 305px"
                />
              </CategoryCardOverlayImageBlue>
              <CategoryCardContent>
                <CategoryCardInfo>
                  <CategoryCardName>
                    <AppLink href={url.category(category)}>
                      {category.name}
                    </AppLink>
                  </CategoryCardName>
                  <CategoryCardChildren>
                    {subs.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <AppLink href={url.category(sub)}>{sub.name}</AppLink>
                      </li>
                    ))}
                  </CategoryCardChildren>
                  <div>
                    <AppLink
                      href={url.category(category)}
                      className="btn btn-primary btn-sm"
                    >
                      <FormattedMessage id="BUTTON_SHOP_ALL" />
                    </AppLink>
                  </div>
                </CategoryCardInfo>
              </CategoryCardContent>
            </CategoryCardBody>
          </CategoryCardLayoutOverLay>
          <BlockZoneWidget>
            <BlockZoneWidgetHeader>
              <BlockZoneTabs>
                {tabs.map((tab, tabIdx) => (
                  <BlockZoneTabsButton
                    active={tab === currentTab}
                    key={tabIdx}
                    type="button"
                    onClick={() => onTabClick(tab)}
                  >
                    {tab.name}
                  </BlockZoneTabsButton>
                ))}
              </BlockZoneTabs>
              <Arrow
                className="block-zone_arrow block-zone_arrow--prev"
                direction="prev"
                onClick={handlePrevClick}
              />
              <Arrow
                className="block-zone_arrow block-zone_arrow--next"
                direction="next"
                onClick={handleNextClick}
              />
            </BlockZoneWidgetHeader>
            <BlockZoneWidgetBody>
              <div
                className={classNames('block-zone__carousel', {
                  'block-zone__carousel--loading': isLoading,
                })}
              >
                <div className="block-zone__carousel-loader" />

                <AppSlick
                  className="block-zone__carousel-slick"
                  ref={slickRef}
                  {...slickSettings}
                >
                  {products.map((product: any) => (
                    <div
                      key={product._id}
                      className="block-zone__carousel-item"
                    >
                      <ProductCard
                        product={product}
                        exclude={excludeElements}
                      />
                    </div>
                  ))}
                </AppSlick>
              </div>
            </BlockZoneWidgetBody>
          </BlockZoneWidget>
        </BlockZoneBody>
      </div>
    </BlockBlockZone>
  );
}

export default React.memo(BlockZone);
