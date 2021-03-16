// react
import React from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  BlockBlockBanners,
  BlockBannersList,
  BlockBannerItemStyleOne,
  BlockBannersItemImage,
  ReflectRtl,
  BlockBannersItemImageBlur,
  BlockBannerItemTitle,
  BlockBannersItemDetails,
  BlockBannersItemButton,
  BlockBannerItemStyleTwo,
  BlockBannerItemTitleTwo,
} from '~/styled-components/block/BlockBanners';
function BlockBanners() {
  const intl = useIntl();

  return (
    <BlockBlockBanners>
      <div className="container">
        <BlockBannersList>
          <BlockBannerItemStyleOne href="/">
            <BlockBannersItemImage>
              <ReflectRtl src="/images/banners/banner1.jpg" />
            </BlockBannersItemImage>
            <BlockBannersItemImageBlur>
              <ReflectRtl src="/images/banners/banner1.jpg" />
            </BlockBannersItemImageBlur>
            <BlockBannerItemTitle>
              <FormattedMessage id="TEXT_BANNER_ONE_TITLE" />
            </BlockBannerItemTitle>
            <BlockBannersItemDetails
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: 'TEXT_BANNER_ONE_SUBTITLE' }),
              }}
            />
            <BlockBannersItemButton className="btn btn-primary btn-sm">
              <FormattedMessage id="TEXT_BANNER_ONE_BUTTON" />
            </BlockBannersItemButton>
          </BlockBannerItemStyleOne>

          <BlockBannerItemStyleTwo href="/">
            <BlockBannersItemImage>
              <ReflectRtl src="/images/banners/banner2.jpg" />
            </BlockBannersItemImage>
            <BlockBannersItemImageBlur>
              <ReflectRtl src="/images/banners/banner2.jpg" />
            </BlockBannersItemImageBlur>
            <BlockBannerItemTitleTwo>
              <FormattedMessage id="TEXT_BANNER_TWO_TITLE" />
            </BlockBannerItemTitleTwo>
            <BlockBannersItemDetails
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: 'TEXT_BANNER_TWO_SUBTITLE' }),
              }}
            />
            <BlockBannersItemButton className=" btn btn-primary btn-sm">
              <FormattedMessage id="TEXT_BANNER_TWO_BUTTON" />
            </BlockBannersItemButton>
          </BlockBannerItemStyleTwo>
        </BlockBannersList>
      </div>
    </BlockBlockBanners>
  );
}

export default React.memo(BlockBanners);
