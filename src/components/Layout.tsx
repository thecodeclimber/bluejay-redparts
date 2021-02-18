// react
import React, { PropsWithChildren } from 'react';
// third-party
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';
// application
import Footer from '~/components/footer/Footer';
import Header from '~/components/header/Header';
import MobileHeader from '~/components/mobile/MobileHeader';
import MobileMenu from '~/components/mobile/MobileMenu';
import Quickview from '~/components/shared/Quickview';
import { useOptions } from '~/store/options/optionsHooks';
import {
  Site,
  SiteBody,
  SiteContainer,
  SiteHeader,
  SiteFooter,
} from '~/styled-components/common';

interface Props extends PropsWithChildren<{}>{ }

function Layout(props: Props) {
  const { children } = props;
  const { desktopHeaderLayout, desktopHeaderScheme, mobileHeaderVariant } = useOptions();
  const desktopVariantClass = `${desktopHeaderLayout}-${desktopHeaderScheme}`;
  const mobileVariantClass = `mobile-${mobileHeaderVariant}`;

  const classes = classNames(
    `site--desktop-header--${desktopVariantClass}`,
    `site--mobile-header--${mobileVariantClass}`
  );

  return (
    <Site className={classes}>
      <ToastContainer autoClose={5000} hideProgressBar />

      <SiteContainer>
        <SiteHeader mobile>
          <MobileHeader />
        </SiteHeader>

        <SiteHeader>
          <Header />
        </SiteHeader>

        <SiteBody>{children}</SiteBody>

        <SiteFooter>
          <Footer />
        </SiteFooter>
      </SiteContainer>

      <MobileMenu />

      <Quickview />
    </Site>
  );
}

export default Layout;
