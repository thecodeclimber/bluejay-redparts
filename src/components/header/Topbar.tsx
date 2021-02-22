// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import {
  TopbarItemText,
  TopbarLink,
  TopbarItemSpring,
  TopbarButtonLabel,
  TopbarItemTitle,
} from '~/styled-components/header/Topbar';
import AppLink from '~/components/shared/AppLink';
import DropdownCurrency from '~/components/header/DropdownCurrency';
import DropdownLanguage from '~/components/header/DropdownLanguage';
import url from '~/services/url';
import { useCompare } from '~/store/compare/compareHooks';

type Layout = 'spaceship-start' | 'spaceship-end' | 'classic';

interface Props {
  layout: Layout;
}

function Topbar(props: Props) {
  const { layout } = props;
  const compare = useCompare();
  const rootClasses = classNames('topbar', `topbar--${layout}`);

  return (
    <div className={rootClasses}>
      {layout === 'spaceship-start' && (
        <React.Fragment>
          <div className="topbar__item-text d-none d-xxl-flex">
            <FormattedMessage id="TEXT_TOPBAR_PHONE" values={{ phone: '(800) 060-0730' }} />
          </div>
          <div className="topbar__item-text">
            <AppLink href={url.pageAboutUs()} className="topbar__link">
              <FormattedMessage id="LINK_ABOUT_US" />
            </AppLink>
          </div>
          <div className="topbar__item-text">
            <AppLink href={url.pageContactUs()} className="topbar__link">
              <FormattedMessage id="LINK_CONTACTS" />
            </AppLink>
          </div>
          <div className="topbar__item-text">
            <AppLink href={url.trackOrder()} className="topbar__link">
              <FormattedMessage id="LINK_TRACK_ORDER" />
            </AppLink>
          </div>
        </React.Fragment>
      )}
      {layout === 'classic' && (
        <React.Fragment>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageAboutUs()}>
              <FormattedMessage id="LINK_ABOUT_US" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageContactUs()}>
              <FormattedMessage id="LINK_CONTACTS" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageStoreLocation()}>
              <FormattedMessage id="LINK_STORE_LOCATION" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.trackOrder()}>
              <FormattedMessage id="LINK_TRACK_ORDER" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.blog()}>
              <FormattedMessage id="LINK_BLOG" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemSpring />
        </React.Fragment>
      )}
      {layout !== 'spaceship-start' && (
        <React.Fragment>
          <TopbarItemText>
            <TopbarLink as="a" href={url.compare()}>
              <TopbarButtonLabel>
                <FormattedMessage id="TEXT_TOPBAR_COMPARE" />:
              </TopbarButtonLabel>
              <TopbarItemTitle>{compare.items.length}</TopbarItemTitle>
            </TopbarLink>
          </TopbarItemText>

          <DropdownCurrency />

          <DropdownLanguage />
        </React.Fragment>
      )}
    </div>
  );
}

export default Topbar;
