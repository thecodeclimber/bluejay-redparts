// react
import React, { useState, useEffect } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import {
  TopbarStyledComponent,
  TopbarItemText,
  TopbarLink,
  TopbarItemSpring,
  TopbarItemTitle,
} from '~/styled-components/header/Topbar';
import url from '~/services/url';
import { useCompare } from '~/store/compare/compareHooks';
import { useUser } from '~/store/user/userHooks';
import { accountApi } from '~/api';
import { IOrder } from '~/interfaces/order';
import { useWishlist } from '~/store/wishlist/wishlistHooks';

type Layout = 'spaceship-start' | 'spaceship-end' | 'classic';

interface Props {
  layout: Layout;
}

function Topbar(props: Props) {
  const { layout } = props;
  const user = useUser();
  const wishlist = useWishlist();
  const compare = useCompare();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const { items } = wishlist;

  useEffect(() => {
    if (user) {
      accountApi.getOrdersList().then((list) => {
        setOrders(list.items);
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  const rootClasses = classNames(`topbar--spaceship-end`);

  return (
    <TopbarStyledComponent className={rootClasses}>
      {layout === 'spaceship-start' && (
        <React.Fragment>
          <TopbarItemText className="d-none d-xxl-flex">
            <FormattedMessage
              id="TEXT_TOPBAR_PHONE"
              values={{ phone: '(800) 060-0730' }}
            />
          </TopbarItemText>
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
            <TopbarLink as="a" href={url.trackOrder()}>
              <FormattedMessage id="LINK_TRACK_ORDER" />
            </TopbarLink>
          </TopbarItemText>
        </React.Fragment>
      )}
      {layout === 'classic' && (
        <React.Fragment>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageContactUs()}>
              <FormattedMessage id="LINK_CONTACTS" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href="#!">
              <FormattedMessage id="LINK_TRACK_ORDER" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageStoreLocation()}>
              <FormattedMessage id="LINK_STORE_LOCATION" />
            </TopbarLink>
          </TopbarItemText>

          <TopbarItemSpring />
        </React.Fragment>
      )}
      {layout !== 'spaceship-start' && (
        <React.Fragment>
          <TopbarItemText>
            <TopbarLink as="a" href={url.wishlist()}>
              <FormattedMessage id="TEXT_TOPBAR_FAVORITES" />:
              <TopbarItemTitle>{items.length}</TopbarItemTitle>
            </TopbarLink>
          </TopbarItemText>

          {/* <DropdownCurrency /> */}

          {user ? (
            <React.Fragment>
              <TopbarItemText>
                <TopbarLink as="a" href={url.accountOrders()}>
                  <FormattedMessage id="TEXT_TOPBAR_ORDERS" />:
                  <TopbarItemTitle>{orders.length}</TopbarItemTitle>
                </TopbarLink>
              </TopbarItemText>
              <TopbarItemText>
                <TopbarLink as="a" href={url.accountDashboard()}>
                  <FormattedMessage id="TEXT_TOPBAR_ACCOUNT" />
                </TopbarLink>
              </TopbarItemText>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )}
    </TopbarStyledComponent>
  );
}

export default Topbar;
