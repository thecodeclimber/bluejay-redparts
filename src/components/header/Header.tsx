// react
import React, { useMemo, useRef } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AccountMenu from '~/components/header/AccountMenu';
import {
  HeaderStyledComponent,
  HeaderSearch,
  HeaderIndicator,
  HeaderNavbar,
  HeaderNavbarDepartments,
  HeaderNavbarMenu,
  HeaderNavbarPhone,
  PhoneBody,
  PhoneTitle,
  PhoneNumber,
  HeaderMegamenuArea,
  HeaderTopbarClassic,
  HeaderTopbarClassicBg,
  HeaderTopbarSpaceshipStartBg,
  HeaderTopbarSpaceshipStart,
  HeaderTopbarSpaceshipEnd,
  HeaderTopbarSpaceshipEndBg,
} from '~/styled-components/header/Header';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Departments from '~/components/header/Departments';
import Dropcart from '~/components/header/Dropcart';
import Indicator, { IIndicatorController } from '~/components/header/Indicator';
import Logo from '~/components/header/Logo';
import MainMenu from '~/components/header/MainMenu';
import Search from '~/components/header/Search';
import Topbar from '~/components/header/Topbar';
import url from '~/services/url';
import { Heart32Svg, Person32Svg, Cart32Svg } from '~/svg';
import { useCart } from '~/store/cart/cartHooks';
import { useOptions } from '~/store/options/optionsHooks';
import { useUser } from '~/store/user/userHooks';
import { useWishlist } from '~/store/wishlist/wishlistHooks';

function Header() {
  const user = useUser();
  const wishlist = useWishlist();
  const options = useOptions();
  const desktopLayout = options.desktopHeaderLayout;

  const departmentsLabel = useMemo(
    () =>
      desktopLayout === 'spaceship' ? (
        <FormattedMessage id="BUTTON_DEPARTMENTS" />
      ) : (
        <FormattedMessage id="BUTTON_DEPARTMENTS_LONG" />
      ),
    [desktopLayout]
  );

  const accountIndicatorLabel = user ? user.email : <FormattedMessage id="TEXT_INDICATOR_ACCOUNT_LABEL" />;
  const accountIndicatorValue = <FormattedMessage id="TEXT_INDICATOR_ACCOUNT_VALUE" />;
  const accountIndicatorCtrl = useRef<IIndicatorController | null>(null);

  const cart = useCart();
  const cartIndicatorLabel = <FormattedMessage id="TEXT_INDICATOR_CART_LABEL" />;
  const cartIndicatorCtrl = useRef<IIndicatorController | null>(null);

  return (
    <HeaderStyledComponent>
      <HeaderMegamenuArea />
      {desktopLayout === 'spaceship' && (
        <React.Fragment>
          <HeaderTopbarSpaceshipStartBg />
          <HeaderTopbarSpaceshipStart>
            <Topbar layout="spaceship-start" />
          </HeaderTopbarSpaceshipStart>
          <HeaderTopbarSpaceshipEndBg />
          <HeaderTopbarSpaceshipEnd>
            <Topbar layout="spaceship-end" />
          </HeaderTopbarSpaceshipEnd>
        </React.Fragment>
      )}
      {desktopLayout === 'classic' && (
        <React.Fragment>
          <HeaderTopbarClassicBg />
          <HeaderTopbarClassic>
            <Topbar layout="classic" />
          </HeaderTopbarClassic>
        </React.Fragment>
      )}

      <HeaderNavbar>
        <HeaderNavbarDepartments>
          <Departments label={departmentsLabel} />
        </HeaderNavbarDepartments>
        <HeaderNavbarMenu>
          <MainMenu />
        </HeaderNavbarMenu>
        {desktopLayout === 'classic' && (
          <HeaderNavbarPhone>
            <PhoneBody href={url.pageContactUs()}>
              <PhoneTitle>
                <FormattedMessage id="TEXT_CALL_US" />
              </PhoneTitle>
              <PhoneNumber>800 060-0730</PhoneNumber>
            </PhoneBody>
          </HeaderNavbarPhone>
        )}
      </HeaderNavbar>

      <Logo />
      <HeaderSearch>
        <Search />
      </HeaderSearch>
      <HeaderIndicator>
        <Indicator href={url.wishlist()} icon={<Heart32Svg />} counter={wishlist.items.length} />

        <Indicator
          href={url.accountDashboard()}
          icon={<Person32Svg />}
          label={accountIndicatorLabel}
          value={accountIndicatorValue}
          trigger="click"
          controllerRef={accountIndicatorCtrl}
        >
          <AccountMenu onCloseMenu={() => accountIndicatorCtrl.current?.close()} />
        </Indicator>

        <Indicator
          href={url.cart()}
          icon={<Cart32Svg />}
          label={cartIndicatorLabel}
          value={<CurrencyFormat value={cart.total} />}
          counter={cart.quantity}
          trigger="click"
          controllerRef={cartIndicatorCtrl}
        >
          <Dropcart onCloseMenu={() => cartIndicatorCtrl.current?.close()} />
        </Indicator>
      </HeaderIndicator>
    </HeaderStyledComponent>
  );
}

export default React.memo(Header);
