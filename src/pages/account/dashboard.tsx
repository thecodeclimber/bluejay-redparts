// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  CardHeader,
  CardDivider,
  CardTable,
} from '~/styled-components/components/Card';
import {
  Dashboard,
  DashboardOrders,
  DashboardProfile,
  DashboardAddress,
} from '~/styled-components/pages/Dashboard';
import {
  ProfileCardBody,
  ProfileCardAvatar,
  ProfileCardName,
  ProfileCardEmail,
} from '~/styled-components/pages/ProfileCard';
import AccountLayout from '~/components/account/AccountLayout';
import AddressCard from '~/components/shared/AddressCard';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { accountApi } from '~/api';
import { IAddress } from '~/interfaces/address';
import { IOrder } from '~/interfaces/order';
import { useUser } from '~/store/user/userHooks';

function Page() {
  const intl = useIntl();
  const user = useUser();
  const [address, setAddress] = useState<IAddress | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    if (user) {
      accountApi.getDefaultAddress().then(setAddress);
      accountApi.getOrdersList({ limit: 3 }).then((list) => {
        setOrders(list.items);
      });
    } else {
      setAddress(null);
      setOrders([]);
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <Dashboard>
      <PageTitle>{intl.formatMessage({ id: 'HEADER_DASHBOARD' })}</PageTitle>

      <DashboardProfile className="card profile-card">
        <ProfileCardBody className="card-body">
          <ProfileCardAvatar>
            <AppImage src={user.avatar} />
          </ProfileCardAvatar>
          <ProfileCardName>
            {`${user.firstName} ${user.lastName}`}
          </ProfileCardName>
          <ProfileCardEmail>{user.email}</ProfileCardEmail>
          <div className="profile-card__edit">
            <AppLink
              href={url.accountProfile()}
              className="btn btn-secondary btn-sm"
            >
              <FormattedMessage id="BUTTON_EDIT_PROFILE" />
            </AppLink>
          </div>
        </ProfileCardBody>
      </DashboardProfile>

      {!address && (
        <DashboardAddress className="card">
          <div className="card-body d-flex justify-content-center align-items-center">
            <div className="text-center w-75">
              <p>
                <FormattedMessage id="TEXT_CALL_ADD_ADDRESS" />
              </p>

              <AppLink
                href={url.accountAddressNew()}
                className="btn btn-secondary btn-sm"
              >
                <FormattedMessage id="BUTTON_ADD_ADDRESS" />
              </AppLink>
            </div>
          </div>
        </DashboardAddress>
      )}

      {address && (
        <DashboardAddress
          as={AddressCard}
          address={address}
          label={<FormattedMessage id="TEXT_DEFAULT_ADDRESS" />}
          featured
          footer={
            <AppLink href={url.accountAddressEdit(address)}>
              <FormattedMessage id="LINK_EDIT_ADDRESS" />
            </AppLink>
          }
        />
      )}

      {orders.length > 0 && (
        <DashboardOrders className="card">
          <CardHeader>
            <h5>
              <FormattedMessage id="HEADER_RECENT_ORDERS" />
            </h5>
          </CardHeader>
          <CardDivider />
          <CardTable>
            <div className="table-responsive-sm">
              <table>
                <thead>
                  <tr>
                    <th>
                      <FormattedMessage id="TABLE_NUMBER" />
                    </th>
                    <th>
                      <FormattedMessage id="TABLE_DATE" />
                    </th>
                    <th>
                      <FormattedMessage id="TABLE_STATUS" />
                    </th>
                    <th>
                      <FormattedMessage id="TABLE_TOTAL" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <AppLink href={url.accountOrderView(order)}>
                          <FormattedMessage
                            id="FORMAT_ORDER_NUMBER"
                            values={{ number: order.number }}
                          />
                        </AppLink>
                      </td>
                      <td>
                        <FormattedMessage
                          id="FORMAT_DATE_MEDIUM"
                          values={{ date: Date.parse(order.createdAt) }}
                        />
                      </td>
                      <td>
                        <FormattedMessage
                          id={`TEXT_ORDER_STATUS_${order.status}`}
                        />
                      </td>
                      <td>
                        <FormattedMessage
                          id="TEXT_ORDER_TOTAL"
                          values={{
                            total: <CurrencyFormat value={order.total} />,
                            quantity: order.quantity,
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardTable>
        </DashboardOrders>
      )}
    </Dashboard>
  );
}

Page.Layout = AccountLayout;

export default Page;
