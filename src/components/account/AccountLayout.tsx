// react
import React, { PropsWithChildren } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import Redirect from '~/components/shared/Redirect';
import url from '~/services/url';
import { ILink } from '~/interfaces/link';
import { useAppRouter } from '~/services/router';
import { useAsyncAction } from '~/store/hooks';
import { useUser, useUserSignOut } from '~/store/user/userHooks';
import {
    AccountNav ,
    AccountNavTitle ,
    AccountNavList ,
    AccountNavItem ,
    AccountNavDevider ,
    ActiveNavItemButton
} 
from '~/styled-components/account/AccountLayout';

interface Props extends PropsWithChildren<{}> { }

function AccountLayout(props: Props) {
    const { children } = props;
    const intl = useIntl();
    const router = useAppRouter();
    const userSignOut = useUserSignOut();
    const user = useUser();
    const [onSignOutClick] = useAsyncAction(() => userSignOut(), [userSignOut]);

    const navigation: ILink[] = [
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_DASHBOARD' }), url: url.accountDashboard() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_GARAGE' }), url: url.accountGarage() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_PROFILE' }), url: url.accountProfile() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_ORDERS' }), url: url.accountOrders() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_ADDRESSES' }), url: url.accountAddresses() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_PASSWORD' }), url: url.accountPassword() },
    ];

    if (!user) {
        return <Redirect href={url.signIn()} />;
    }

    return (
        <React.Fragment>
            <BlockSpace layout="after-header" />

            <div className="block">
                <div className="container container--max--xl">
                    <div className="row">
                        <div className="col-12 col-lg-3 d-flex">
                            <AccountNav className="flex-grow-1">
                                <AccountNavTitle >
                                    <FormattedMessage id="HEADER_NAVIGATION" />
                                </AccountNavTitle>
                                <AccountNavList >
                                    {navigation.map((item, index) => (
                                        <AccountNavItem
                                           active ={router.pathname === item.url}
                                            key={index}
                                            >
                                            <AppLink href={item.url}>
                                                {item.title}
                                            </AppLink>
                                        </AccountNavItem>
                                    ))}
                                    <AccountNavDevider  role="presentation" />
                                    <ActiveNavItemButton active>
                                        {/* eslint-disable-next-line */}
                                        <button type="button" onClick={onSignOutClick}>
                                            <FormattedMessage id="LINK_ACCOUNT_LOGOUT" />
                                        </button>
                                    </ActiveNavItemButton>
                                </AccountNavList>
                            </AccountNav>
                        </div>
                        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default AccountLayout;
