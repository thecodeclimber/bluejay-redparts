// react
import React, { useMemo } from 'react';
// third-party
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
// application
import Collapse from '~/components/shared/Collapse';
import RadioButton from '~/components/shared/RadioButton';
import {
  PaymentMethodsList,
  PaymentMethodsItemHeader,
  PaymentMethodsItemRadio,
  PaymentMethodsitemTitle,
  PaymentMethodsItemContainer,
  PaymentMethodsItemDetails,
  PaymentMethodsItem,
  CheckoutPaymentMethods,
} from '~/styled-components/shop/CheckoutPayments';

function CheckoutPayments() {
  const intl = useIntl();
  const { register, watch } = useFormContext();
  const currentPayment = watch('payment');
  const payments = useMemo(
    () => [
      {
        name: 'bank',
        label: intl.formatMessage({ id: 'TEXT_PAYMENT_BANK_LABEL' }),
        description: intl.formatMessage({
          id: 'TEXT_PAYMENT_BANK_DESCRIPTION',
        }),
      },
      {
        name: 'check',
        label: intl.formatMessage({ id: 'TEXT_PAYMENT_CHECK_LABEL' }),
        description: intl.formatMessage({
          id: 'TEXT_PAYMENT_CHECK_DESCRIPTION',
        }),
      },
      {
        name: 'cash',
        label: intl.formatMessage({ id: 'TEXT_PAYMENT_CASH_LABEL' }),
        description: intl.formatMessage({
          id: 'TEXT_PAYMENT_CASH_DESCRIPTION',
        }),
      },
      {
        name: 'paypal',
        label: intl.formatMessage({ id: 'TEXT_PAYMENT_PAYPAL_LABEL' }),
        description: intl.formatMessage({
          id: 'TEXT_PAYMENT_PAYPAL_DESCRIPTION',
        }),
      },
    ],
    [intl]
  );

  return (
    <CheckoutPaymentMethods>
      <PaymentMethodsList>
        {payments.map((payment, paymentIndex) => (
          <Collapse<HTMLLIElement, HTMLDivElement>
            key={paymentIndex}
            open={currentPayment === payment.name}
            toggleClass="payment-methods__item--active"
            render={({ setItemRef, setContentRef }) => (
              <PaymentMethodsItem
                open={currentPayment === payment.name}
                ref={setItemRef}
              >
                <PaymentMethodsItemHeader>
                  <PaymentMethodsItemRadio
                    name="payment"
                    value={payment.name}
                    inputRef={register}
                  />
                  <PaymentMethodsitemTitle>
                    {payment.label}
                  </PaymentMethodsitemTitle>
                </PaymentMethodsItemHeader>
                <PaymentMethodsItemContainer ref={setContentRef}>
                  <PaymentMethodsItemDetails className="text-muted">
                    {payment.description}
                  </PaymentMethodsItemDetails>
                </PaymentMethodsItemContainer>
              </PaymentMethodsItem>
            )}
          />
        ))}
      </PaymentMethodsList>
    </CheckoutPaymentMethods>
  );
}

export default CheckoutPayments;
