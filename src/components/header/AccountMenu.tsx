// react
import React, { useCallback } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  AccountMenuStyledComponent,
  AccountMenuForm,
  AccountMenuFormTitle,
  FormGroup,
  InvalidFeedback,
  AccountMenuFormLink,
  AccountMenuUser,
  AccountMenuUserAvatar,
  AccountMenuUserInfo,
  AccountMenuUserName,
  AccountMenuUserEmail,
  AccountMenuDivider,
  AccountMenuLinks
} from '~/styled-components/header/AccountMenu';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { useSignInForm } from '~/services/forms/sign-in';
import { useUser, useUserSignOut } from '~/store/user/userHooks';
import { validateEmail } from '~/services/validators';

interface Props {
  onCloseMenu: () => void;
}

function AccountMenu(props: Props) {
  const { onCloseMenu } = props;
  const intl = useIntl();
  const user = useUser();
  const userSignOut = useUserSignOut();

  const signInForm = useSignInForm({
    onSuccess: useCallback(() => {
      if (onCloseMenu) {
        onCloseMenu();
      }
    }, [onCloseMenu]),
  });

  const onLogOutButtonClick = () => {
    userSignOut().then(() => {
      if (onCloseMenu) {
        onCloseMenu();
      }
    });
  };

  return (
    <AccountMenuStyledComponent onSubmit={signInForm.submit}>
      {user === null && (
        <AccountMenuForm>
          <AccountMenuFormTitle>
            <FormattedMessage id="HEADER_LOGIN_TO_YOUR_ACCOUNT" />
          </AccountMenuFormTitle>
          {signInForm.serverError && (
            <div className="alert alert-xs alert-danger mt-n2">
              <FormattedMessage id={signInForm.serverError} />
            </div>
          )}
          <FormGroup>
            <label htmlFor="header-signin-email" className="sr-only">
              <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
            </label>
            <input
              id="header-signin-email"
              type="email"
              className={classNames('form-control', 'form-control-sm', {
                'is-invalid': signInForm.errors.email,
              })}
              placeholder="customer@example.com"
              name="email"
              ref={signInForm.register({
                required: true,
                validate: { email: validateEmail },
              })}
            />
            <InvalidFeedback>
              {signInForm.errors.email?.type === 'required' && (
                <FormattedMessage id="ERROR_FORM_REQUIRED" />
              )}
              {signInForm.errors.email?.type === 'email' && (
                <FormattedMessage id="ERROR_FORM_INCORRECT_EMAIL" />
              )}
            </InvalidFeedback>
          </FormGroup>
          <FormGroup>
            <label htmlFor="header-signin-password" className="sr-only">
              <FormattedMessage id="INPUT_PASSWORD_LABEL" />
            </label>
            <div
              className={classNames('account-menu__form-forgot', {
                'is-invalid': signInForm.errors.password,
              })}
            >
              <input
                id="header-signin-password"
                type="password"
                className={classNames('form-control', 'form-control-sm', {
                  'is-invalid': signInForm.errors.password,
                })}
                placeholder={intl.formatMessage({
                  id: 'INPUT_PASSWORD_PLACEHOLDER',
                })}
                name="password"
                ref={signInForm.register({ required: true })}
              />
              <AppLink
                href={url.passwordRecovery()}
                className="account-menu__form-forgot-link"
              >
                <FormattedMessage id="LINK_FORGOT" />
              </AppLink>
            </div>
            <InvalidFeedback>
              {signInForm.errors.password?.type === 'required' && (
                <FormattedMessage id="ERROR_FORM_REQUIRED" />
              )}
            </InvalidFeedback>
          </FormGroup>

          <FormGroup className="account-menu__form-button">
            <button
              type="submit"
              className={classNames('btn', 'btn-primary', 'btn-sm', {
                'btn-loading': signInForm.submitInProgress,
              })}
            >
              <FormattedMessage id="BUTTON_LOGIN" />
            </button>
          </FormGroup>
          <AccountMenuFormLink>
            <AppLink href={url.signUp()} onClick={onCloseMenu}>
              <FormattedMessage id="LINK_CREATE_ACCOUNT" />
            </AppLink>
          </AccountMenuFormLink>
        </AccountMenuForm>
      )}
      {user !== null && (
        <React.Fragment>
          <AccountMenuUser
            as="a"
            href={url.accountDashboard()}
            onClick={onCloseMenu}
          >
            <AccountMenuUserAvatar>
              <AppImage src={user.avatar} />
            </AccountMenuUserAvatar>
            <AccountMenuUserInfo>
              <AccountMenuUserName>
                {`${user.firstName} ${user.lastName}`}
              </AccountMenuUserName>
              <AccountMenuUserEmail>{user.email}</AccountMenuUserEmail>
            </AccountMenuUserInfo>
          </AccountMenuUser>
          <AccountMenuDivider />
          <AccountMenuLinks>
            <li>
              <AppLink href={url.accountDashboard()} onClick={onCloseMenu}>
                <FormattedMessage id="LINK_ACCOUNT_DASHBOARD" />
              </AppLink>
            </li>
            <li>
              <AppLink href={url.accountGarage()} onClick={onCloseMenu}>
                <FormattedMessage id="LINK_ACCOUNT_GARAGE" />
              </AppLink>
            </li>
            <li>
              <AppLink href={url.accountProfile()} onClick={onCloseMenu}>
                <FormattedMessage id="LINK_ACCOUNT_PROFILE" />
              </AppLink>
            </li>
            <li>
              <AppLink href={url.accountOrders()} onClick={onCloseMenu}>
                <FormattedMessage id="LINK_ACCOUNT_ORDERS" />
              </AppLink>
            </li>
            <li>
              <AppLink href={url.accountAddresses()} onClick={onCloseMenu}>
                <FormattedMessage id="LINK_ACCOUNT_ADDRESSES" />
              </AppLink>
            </li>
          </AccountMenuLinks>
          <AccountMenuDivider/>
          <AccountMenuLinks >
            <li>
              <button type="button" onClick={onLogOutButtonClick}>
                <FormattedMessage id="LINK_ACCOUNT_LOGOUT" />
              </button>
            </li>
          </AccountMenuLinks>
        </React.Fragment>
      )}
    </AccountMenuStyledComponent>
  );
}

export default AccountMenu;
