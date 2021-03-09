// react
import React, { FunctionComponent } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// data
import {
  FooterContactsStyledComponent,
  FooterContactsTitle,
  FooterContactsText,
  FooterAddress,
  FooterAddressDefinitionDescription,
  FooterAddressDescriptionList,
  FooterAddressDefinitionList,
} from '~/styled-components/footer/FooterContacts';
import theme from '~/data/theme';

const FooterContacts: FunctionComponent<
  React.HTMLAttributes<HTMLElement>
> = () => (
  <FooterContactsStyledComponent>
    <FooterContactsTitle>
      <FormattedMessage id="HEADER_CONTACT_US" />
    </FooterContactsTitle>

    <FooterContactsText>
      <FormattedMessage id="TEXT_CONTACT_US_MESSAGE" />
    </FooterContactsText>

    <FooterAddress>
      <FooterAddressDescriptionList>
        <FooterAddressDefinitionList>
          <FormattedMessage id="TEXT_PHONE_NUMBER" />
        </FooterAddressDefinitionList>
        {theme.contacts.phone.map((item, index) => (
          <FooterAddressDefinitionDescription key={index}>
            {item}
          </FooterAddressDefinitionDescription>
        ))}
      </FooterAddressDescriptionList>
      <FooterAddressDescriptionList>
        <FooterAddressDefinitionList>
          <FormattedMessage id="TEXT_EMAIL_ADDRESS" />
        </FooterAddressDefinitionList>
        {theme.contacts.email.map((item, index) => (
          <FooterAddressDefinitionDescription key={index}>
            {item}
          </FooterAddressDefinitionDescription>
        ))}
      </FooterAddressDescriptionList>
      <FooterAddressDescriptionList>
        <FooterAddressDefinitionList>
          <FormattedMessage id="TEXT_OUR_LOCATION" />
        </FooterAddressDefinitionList>
        {theme.contacts.address.map((item, index) => (
          <FooterAddressDefinitionDescription key={index}>
            {item}
          </FooterAddressDefinitionDescription>
        ))}
      </FooterAddressDescriptionList>
      <FooterAddressDescriptionList>
        <FooterAddressDefinitionList>
          <FormattedMessage id="TEXT_WORKING_HOURS" />
        </FooterAddressDefinitionList>
        {theme.contacts.hours.map((item, index) => (
          <FooterAddressDefinitionDescription key={index}>
            {item}
          </FooterAddressDefinitionDescription>
        ))}
      </FooterAddressDescriptionList>
    </FooterAddress>
  </FooterContactsStyledComponent>
);

export default FooterContacts;
