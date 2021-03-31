// react
import React, { useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
// application
import { FormCheck, FormCheckInput } from '~/styled-components/components/Form';
import {
  CollapseAreaAccount,
  CollapseAreaAddress,
} from '~/styled-components/components/CollapseArea';
import { CardTitle } from '~/styled-components/components/Card';
import AddressForm from '~/components/shared/AddressForm';
import RegisterForm from '~/components/shared/RegisterForm';
import { useUser } from '~/store/user/userHooks';

function CheckoutForm() {
  const user = useUser();
  const intl = useIntl();
  const [isOpenCreatAccount, setIsOpenCreatAccount] = useState(false);
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const { register, watch } = useFormContext();
  const createAccount = watch('createAccount');
  const shipToDifferentAddress = watch('shipToDifferentAddress');

  const handleClick = (id: any) => {
    if (id === 1) setIsOpenCreatAccount((prevCheck: boolean) => !prevCheck);
    if (id === 2) setIsOpenAddress((prevCheck: boolean) => !prevCheck);
  };

  return (
    <React.Fragment>
      <CardTitle as="h3">
        <FormattedMessage id="HEADER_BILLING_DETAILS" />
      </CardTitle>

      <div className="form-group d-block">
        <AddressForm
          namespace="billingAddress"
          idPrefix="checkout-billing-address"
        />
      </div>

      <FormCheck className="mb-2">
        {!user && (
          <React.Fragment>
            <FormCheck>
              <FormCheckInput
                name="createAccount"
                id="form-checkout-create-account"
                inputRef={register}
                onClick={() => handleClick(1)}
              />
              <label
                className="form-check-label"
                htmlFor="form-checkout-create-account"
              >
                <FormattedMessage id="INPUT_CREATE_ACCOUNT_LABEL" />
              </label>
            </FormCheck>

            <CollapseAreaAccount isOpenCreatAccount={isOpenCreatAccount}>
              <div className="pt-2" />

              <div className="d-block mb-2 pb-1">
                <RegisterForm
                  namespace="account"
                  disabled={!createAccount}
                  idPrefix="checkout-account"
                />
              </div>
            </CollapseAreaAccount>

            <div className="mt-1" />
          </React.Fragment>
        )}

        <FormCheck>
          <FormCheckInput
            name="shipToDifferentAddress"
            id="form-checkout-ship-to-different-address"
            onClick={() => handleClick(2)}
          />
          <label
            className="form-check-label"
            htmlFor="form-checkout-ship-to-different-address"
          >
            <FormattedMessage id="INPUT_SHIP_TO_DIFFERENT_ADDRESS_LABEL" />
          </label>
        </FormCheck>

        <CollapseAreaAddress isOpenAddress={isOpenAddress}>
          <div className="pt-2" />
          <AddressForm
            namespace="shippingAddress"
            disabled={!shipToDifferentAddress}
            idPrefix="checkout-shipping-address"
          />
        </CollapseAreaAddress>
      </FormCheck>

      <div className="form-group mb-0">
        <label htmlFor="checkout-comment">
          <FormattedMessage id="INPUT_ORDER_NOTES_LABEL" />
          <span className="text-muted">
            {' ('}
            <FormattedMessage id="TEXT_OPTIONAL" />)
          </span>
        </label>
        <textarea
          id="checkout-comment"
          name="comment"
          className="form-control"
          placeholder={intl.formatMessage({
            id: 'INPUT_ORDER_NOTES_PLACEHOLDER',
          })}
          rows={4}
          ref={register}
        />
      </div>
    </React.Fragment>
  );
}

export default CheckoutForm;
