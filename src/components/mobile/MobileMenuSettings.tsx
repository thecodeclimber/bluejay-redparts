// react
import React, { useCallback, useMemo } from 'react';
// application
import {
  MobileMenuSettingsList,
  MobileMenuSettingsStyledComponent,
  MobileMenuSettingsButton,
  MobileMenuSettingsIcon,
  MobileMenuSettingsTitle,
  MobileMenuSettingsArrow,
} from '~/styled-components/mobile/MobileMenu';
import AppImage from '~/components/shared/AppImage';
import MobileMenuLinks from '~/components/mobile/MobileMenuLinks';
import MobileMenuPanelController from '~/components/mobile/MobileMenuPanelController';
import { ArrowRoundedRight6x9Svg } from '~/svg';
import { getAllLanguages } from '~/services/i18n/utils';
import { IMobileMenuLink } from '~/interfaces/mobile-menu-link';
import { useCurrency, useCurrencyChange } from '~/store/currency/currencyHooks';
import { useLanguage, useSetLocale } from '~/services/i18n/hooks';
import { useMobileMenuClose } from '~/store/mobile-menu/mobileMenuHooks';
// data
import dataShopCurrencies from '~/data/shopCurrencies';

function MobileMenuSettings() {
  const language = useLanguage();
  const currency = useCurrency();
  const setLocale = useSetLocale();
  const currencyChange = useCurrencyChange();
  const mobileMenuClose = useMobileMenuClose();

  const languages: IMobileMenuLink[] = useMemo(
    () =>
      getAllLanguages().map<IMobileMenuLink>((eachLanguage) => ({
        title: eachLanguage.name,
        image: eachLanguage.icon,
        customFields: {
          locale: eachLanguage.locale,
        },
      })),
    []
  );

  const currencies: IMobileMenuLink[] = useMemo(
    () =>
      dataShopCurrencies.map((eachCurrency) => ({
        title: `${eachCurrency.symbol} ${eachCurrency.name}`,
        customFields: {
          currency: eachCurrency,
        },
      })),
    []
  );

  const onLanguageItemClick = useCallback(
    (item: IMobileMenuLink) => {
      if (item.customFields && item.customFields.locale) {
        setLocale(item.customFields.locale);
      }

      mobileMenuClose();
    },
    [setLocale, mobileMenuClose]
  );

  const onCurrencyItemClick = useCallback(
    (item: IMobileMenuLink) => {
      if (item.customFields && item.customFields.currency) {
        currencyChange(item.customFields.currency);
      }

      mobileMenuClose();
    },
    [currencyChange, mobileMenuClose]
  );

  return (
    <MobileMenuSettingsList>
      <MobileMenuSettingsStyledComponent>
        <MobileMenuPanelController
          label="Language"
          content={
            <MobileMenuLinks
              items={languages}
              onItemClick={onLanguageItemClick}
            />
          }
        >
          {(open) => (
            <MobileMenuSettingsButton
              as="button"
              title="Language"
              onClick={open}
            >
              <MobileMenuSettingsIcon>
                <AppImage src={language.icon} />
              </MobileMenuSettingsIcon>
              <MobileMenuSettingsTitle>{language.name}</MobileMenuSettingsTitle>
              <MobileMenuSettingsArrow>
                <ArrowRoundedRight6x9Svg />
              </MobileMenuSettingsArrow>
            </MobileMenuSettingsButton>
          )}
        </MobileMenuPanelController>
      </MobileMenuSettingsStyledComponent>
      <MobileMenuSettingsStyledComponent>
        <MobileMenuPanelController
          label="Currency"
          content={
            <MobileMenuLinks
              items={currencies}
              onItemClick={onCurrencyItemClick}
            />
          }
        >
          {(open) => (
            <MobileMenuSettingsButton
              as="button"
              type="button"
              title="Currency"
              onClick={open}
            >
              <MobileMenuSettingsIcon currency={true}>
                {currency.symbol}
              </MobileMenuSettingsIcon>
              <MobileMenuSettingsTitle>{currency.name}</MobileMenuSettingsTitle>
              <MobileMenuSettingsArrow>
                <ArrowRoundedRight6x9Svg />
              </MobileMenuSettingsArrow>
            </MobileMenuSettingsButton>
          )}
        </MobileMenuPanelController>
      </MobileMenuSettingsStyledComponent>
    </MobileMenuSettingsList>
  );
}

export default MobileMenuSettings;
