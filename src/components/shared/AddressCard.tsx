// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import {
  AddressCardBody,
  AddressCardName,
  AddressCardRow,
  AddressCardRowTitle,
  AddressCardFooter,
  AddressCardBadge,
} from '~/styled-components/shared/AddressCard';
import { CardLoader } from '~/styled-components/components/Card';
import { IAddressData } from '~/interfaces/address';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  address: IAddressData;
  label?: React.ReactNode;
  featured?: boolean;
  loading?: boolean;
  footer?: React.ReactNode;
}

function AddressCard(props: Props) {
  const {
    address,
    label,
    featured = false,
    loading = false,
    className,
    footer,
    ...rootProps
  } = props;

  const rootClasses = classNames('card', className);

  return (
    <div className={rootClasses} {...rootProps}>
      <CardLoader />
      {label && <AddressCardBadge>{label}</AddressCardBadge>}

      <AddressCardBody>
        <AddressCardName>
          {`${address.firstName} ${address.lastName}`}
        </AddressCardName>
        <AddressCardRow>
          <FormattedMessage id={`COUNTRY_NAME_${address.country}`} />
          <br />
          {`${address.postcode}, ${address.city}`}
          <br />
          {`${address.address1} ${address.address2}`}
        </AddressCardRow>
        <AddressCardRow>
          <AddressCardRowTitle>
            <FormattedMessage id="TEXT_PHONE_NUMBER" />
          </AddressCardRowTitle>
          <div>{address.phone}</div>
        </AddressCardRow>
        <AddressCardRow>
          <AddressCardRowTitle>
            <FormattedMessage id="TEXT_EMAIL_ADDRESS" />
          </AddressCardRowTitle>
          <div>{address.email}</div>
        </AddressCardRow>

        {footer && <AddressCardFooter>{footer}</AddressCardFooter>}
      </AddressCardBody>
    </div>
  );
}

export default AddressCard;
