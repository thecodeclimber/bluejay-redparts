// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
  MobileMenuIndicatorsStyledComponent,
  MobileMenuIndicator,
  MobileMenuIndicatorIcon,
  MobileMenuIndicatorCounter,
  MobileMenuIndicatorTitle,
} from '~/styled-components/mobile/MobileMenu';
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { useWishlist } from '~/store/wishlist/wishlistHooks';
import { useCart } from '~/store/cart/cartHooks';
import { useMobileMenuClose } from '~/store/mobile-menu/mobileMenuHooks';
import { Car20Svg, Cart20Svg, Heart20Svg, Person20Svg } from '~/svg';

function MobileMenuIndicators() {
  const mobileMenuClose = useMobileMenuClose();
  const wishlist = useWishlist();
  const cart = useCart();

  return (
    <MobileMenuIndicatorsStyledComponent>
      <MobileMenuIndicator
        as={AppLink}
        href={url.wishlist()}
        onClick={mobileMenuClose}
      >
        <MobileMenuIndicatorIcon>
          <Heart20Svg />
          {wishlist.items.length > 0 && (
            <MobileMenuIndicatorCounter>
              {wishlist.items.length}
            </MobileMenuIndicatorCounter>
          )}
        </MobileMenuIndicatorIcon>
        <MobileMenuIndicatorTitle>
          <FormattedMessage id="TEXT_MOBILE_INDICATOR_WISHLIST" />
        </MobileMenuIndicatorTitle>
      </MobileMenuIndicator>
      <MobileMenuIndicator
        as={AppLink}
        href={url.accountDashboard()}
        onClick={mobileMenuClose}
      >
        <MobileMenuIndicatorIcon>
          <Person20Svg />
        </MobileMenuIndicatorIcon>
        <MobileMenuIndicatorTitle>
          <FormattedMessage id="TEXT_MOBILE_INDICATOR_ACCOUNT" />
        </MobileMenuIndicatorTitle>
      </MobileMenuIndicator>
      <MobileMenuIndicator
        as={AppLink}
        href={url.cart()}
        onClick={mobileMenuClose}
      >
        <MobileMenuIndicatorIcon>
          <Cart20Svg />
          {cart.items.length > 0 && (
            <MobileMenuIndicatorCounter>
              {cart.items.length}
            </MobileMenuIndicatorCounter>
          )}
        </MobileMenuIndicatorIcon>
        <MobileMenuIndicatorTitle>
          <FormattedMessage id="TEXT_MOBILE_INDICATOR_CART" />
        </MobileMenuIndicatorTitle>
      </MobileMenuIndicator>
      <MobileMenuIndicator
        as={AppLink}
        href={url.accountGarage()}
        onClick={mobileMenuClose}
      >
        <MobileMenuIndicatorIcon>
          <Car20Svg />
        </MobileMenuIndicatorIcon>
        <MobileMenuIndicatorTitle>
          <FormattedMessage id="TEXT_MOBILE_INDICATOR_GARAGE" />
        </MobileMenuIndicatorTitle>
      </MobileMenuIndicator>
    </MobileMenuIndicatorsStyledComponent>
  );
}

export default MobileMenuIndicators;
