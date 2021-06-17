// styles
import '../scss/index.scss';
import '../scss/style.header-classic-variant-four.scss';
import '../scss/style.mobile-header-variant-two.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

// third-party
import AppBase, { AppContext, AppProps } from 'next/app';
import LanguageProvider, { ILanguageProviderProps, getLanguageInitialProps } from '~/services/i18n/provider';
import { NextComponentType, NextPageContext } from 'next';
// react
import React, { ComponentType, useEffect, useMemo } from 'react';
import { getLanguageByLocale, getLanguageByPath } from '~/services/i18n/utils';
import { load, save, wrapper } from '~/store/store';

import { AppDispatch } from '~/store/types';
import { CurrentVehicleGarageProvider } from '~/services/current-vehicle';
import Head from 'next/head';
import Layout from '~/components/Layout';
import PageTitle from '~/components/shared/PageTitle';
import Theme from "~/theme/Theme"
import { UserProvider } from '@auth0/nextjs-auth0';
// application
import config from '~/config';
import { optionsSetAll } from '~/store/options/optionsActions';
import { useApplyClientState } from '~/store/client';
import { useLoadUserVehicles } from '~/store/garage/garageHooks';
import { useStore } from 'react-redux';

interface Props extends AppProps {
  languageInitialProps: ILanguageProviderProps;
  Component: NextComponentType<NextPageContext, any> & {
    Layout: ComponentType;
  };
}

function App(props: Props) {
  const { Component, pageProps, languageInitialProps } = props;
  const store = useStore();
  const applyClientState = useApplyClientState();
  const loadUserVehicles = useLoadUserVehicles();

  // Loading and saving state on the client side (cart, wishlist, etc.).
  useEffect(() => {
    const state = load();

    applyClientState(state || {});

    if (process.browser) {
      store.subscribe(() => {
        save(store.getState());
      });
    }
  }, [store, applyClientState]);

  // Load user vehicles
  useEffect(() => {
    loadUserVehicles().then();
  }, [loadUserVehicles]);

  // preloader
  useEffect(() => {
    const preloader = document.querySelector('.site-preloader');

    if (!preloader) {
      return;
    }

    setTimeout(() => {
      if (preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 100);
  }, []);

  const page = useMemo(() => {
    const PageLayout = Component.Layout || React.Fragment;

    return (
      <UserProvider>
      <Layout>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Layout>
      </UserProvider>
    );
  }, [Component, pageProps]);

  // noinspection HtmlRequiredTitleElement
  return (
    <LanguageProvider {...languageInitialProps}>
      <CurrentVehicleGarageProvider>
        <Theme>
        <PageTitle />

        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {page}
        </Theme>
      </CurrentVehicleGarageProvider>
    </LanguageProvider>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const dispatch = context.ctx.store.dispatch as AppDispatch;

  await dispatch(
    optionsSetAll({
      desktopHeaderVariant: config.desktopHeaderVariant,
      mobileHeaderVariant: config.mobileHeaderVariant,
    })
  );

  let language;

  if (typeof context.ctx.query.lang === 'string') {
    language = getLanguageByLocale(context.ctx.query.lang);
  } else {
    language = getLanguageByPath(context.ctx.asPath || context.ctx.pathname);
  }

  return {
    ...(await AppBase.getInitialProps(context)),
    languageInitialProps: await getLanguageInitialProps(language),
  };
};

const WrappedApp = wrapper.withRedux(App);

// noinspection JSUnusedGlobalSymbols
export default WrappedApp;
