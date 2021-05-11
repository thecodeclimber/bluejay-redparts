// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  BlockSlideshowItem,
  BlockSlideshowItemImage,
  BlockSlideshowItemOffer,
  BlockSlideshowItemDetails,
  BlockSlideshowItemButton,
  BlockSlideshowItemTitle,
  BlockSlideshowCarousel,
} from '~/styled-components/block/BlockSlideshow';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import { baseUrl } from '~/services/utils';

export interface IBlockSlideshowSlide {
  url: string;
  desktopImage: string;
  mobileImage: string;
  offer?: string;
  title: string;
  details: string;
  buttonLabel: string;
}

interface Props {
  slides: IBlockSlideshowSlide[];
}

const slickSettings: ISlickProps = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function BlockSlideshow(props: Props) {
  const { slides } = props;

  return (
    <div className="block">
      <div className="container">
        <BlockSlideshowCarousel>
          <AppSlick {...slickSettings}>
            {slides.map((slide, slideIdx) => (
              <BlockSlideshowItem href={slide.url} key={slideIdx}>
                <BlockSlideshowItemImage
                  style={{
                    backgroundImage: `url(${baseUrl(slide.desktopImage)})`,
                  }}
                />
                <BlockSlideshowItemImage
                  style={{
                    backgroundImage: `url(${baseUrl(slide.mobileImage)})`,
                  }}
                />
                {slide.offer && (
                  <BlockSlideshowItemOffer>
                    {slide.offer}
                  </BlockSlideshowItemOffer>
                )}
                <BlockSlideshowItemTitle
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <BlockSlideshowItemDetails
                  dangerouslySetInnerHTML={{ __html: slide.details }}
                />
                <BlockSlideshowItemButton>
                  {slide.buttonLabel}
                </BlockSlideshowItemButton>
              </BlockSlideshowItem>
            ))}
          </AppSlick>
        </BlockSlideshowCarousel>
      </div>
    </div>
  );
}

export default React.memo(BlockSlideshow);
