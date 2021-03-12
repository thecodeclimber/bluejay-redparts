// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
  Fi24Hours48Svg,
  FiFreeDelivery48Svg,
  FiPaymentSecurity48Svg,
  FiTag48Svg,
} from '~/svg';
import {
  BlockFeatureslist ,
  BlockFeaturesItem ,
  BlockFeaturesItemIcon ,
  BlockFeaturesItemInfo ,
  BlockFeaturesItemTitle ,
  BlockFeaturesItemSubTitle
} from '~/styled-components/blocks/BlockFeatures';
export type IBlockFeaturesLayout = 'top-strip' | 'bottom-strip';

interface Props {
    layout: IBlockFeaturesLayout;
}

function BlockFeatures(props: Props) {
  const { layout } = props;
  return (
    <div >
      <div className="container">
        <BlockFeatureslist layout={layout}>
          <BlockFeaturesItem  >
            <BlockFeaturesItemIcon >
              <FiFreeDelivery48Svg />
            </BlockFeaturesItemIcon>
            <BlockFeaturesItemInfo >
              <BlockFeaturesItemTitle >
                <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_TITLE" />
              </BlockFeaturesItemTitle>
              <BlockFeaturesItemSubTitle >
                <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_SUBTITLE" />
              </BlockFeaturesItemSubTitle>
            </BlockFeaturesItemInfo>
          </BlockFeaturesItem >
          <BlockFeaturesItem >
            <BlockFeaturesItemIcon>
              <Fi24Hours48Svg />
            </BlockFeaturesItemIcon>
            <BlockFeaturesItemInfo >
              <BlockFeaturesItemTitle >
                <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_TITLE" />
              </BlockFeaturesItemTitle>
              <BlockFeaturesItemSubTitle>
                <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_SUBTITLE" />
              </BlockFeaturesItemSubTitle>
            </BlockFeaturesItemInfo>
          </BlockFeaturesItem>
          <BlockFeaturesItem >
            <BlockFeaturesItemIcon >
              <FiPaymentSecurity48Svg />
            </BlockFeaturesItemIcon>
            <BlockFeaturesItemInfo >
              <BlockFeaturesItemTitle >
                <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_TITLE" />
              </BlockFeaturesItemTitle>
              <BlockFeaturesItemSubTitle >
                <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_SUBTITLE" />
              </BlockFeaturesItemSubTitle>
            </BlockFeaturesItemInfo>
          </BlockFeaturesItem>
          <BlockFeaturesItem >
            <BlockFeaturesItemIcon >
              <FiTag48Svg />
            </BlockFeaturesItemIcon>
            <BlockFeaturesItemInfo >
              <BlockFeaturesItemTitle >
                <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_TITLE" />
              </BlockFeaturesItemTitle>
              <BlockFeaturesItemSubTitle >
                <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_SUBTITLE" />
              </BlockFeaturesItemSubTitle>
            </BlockFeaturesItemInfo>
          </BlockFeaturesItem>
        </BlockFeatureslist>
      </div>
    </div>
  );
}

export default React.memo(BlockFeatures);
