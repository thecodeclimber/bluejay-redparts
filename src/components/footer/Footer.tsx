// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
  SiteFooter,
  SiteFooterWidgets,
  Container,
  SiteFooterBottom,
  SiteFooterBottomRow,
  SiteFooterPayments,
  FooterLink,
  FooterContact,
  FooterNewsletterComponent,
  SiteFooterDecor,
} from '~/styled-components/footer/Footer';
import AppImage from '~/components/shared/AppImage';
import Decor from '~/components/shared/Decor';

// data

export function Footer() {
  return (
    <SiteFooter>
      <SiteFooterDecor as={Decor} type="bottom" />
      <SiteFooterWidgets>
        <Container>
          <div className="row">
            <div className="col-12 col-xl-4">
              <FooterContact />
            </div>
            <div className="col-6 col-md-3 col-xl-2">
              <FooterLink
                header={<FormattedMessage id="HEADER_INFORMATION" />}
                links={[
                  { title: <FormattedMessage id="LINK_ABOUT_US" /> },
                  {
                    title: <FormattedMessage id="LINK_DELIVERY_INFORMATION" />,
                  },
                  { title: <FormattedMessage id="LINK_PRIVACY_POLICY" /> },
                  { title: <FormattedMessage id="LINK_BRANDS" /> },
                  { title: <FormattedMessage id="LINK_CONTACT_US" /> },
                  { title: <FormattedMessage id="LINK_RETURNS" /> },
                  { title: <FormattedMessage id="LINK_SITE_MAP" /> },
                ]}
              />
            </div>
            <div className="col-6 col-md-3 col-xl-2">
              <FooterLink
                header={<FormattedMessage id="HEADER_MY_ACCOUNT" />}
                links={[
                  { title: <FormattedMessage id="LINK_STORE_LOCATION" /> },
                  { title: <FormattedMessage id="LINK_ORDER_HISTORY" /> },
                  { title: <FormattedMessage id="LINK_WISH_LIST" /> },
                  { title: <FormattedMessage id="LINK_NEWSLETTER" /> },
                  { title: <FormattedMessage id="LINK_SPECIAL_OFFERS" /> },
                  { title: <FormattedMessage id="LINK_GIFT_CERTIFICATES" /> },
                  { title: <FormattedMessage id="LINK_AFFILIATE" /> },
                ]}
              />
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <FooterNewsletterComponent />
            </div>
          </div>
        </Container>
      </SiteFooterWidgets>
      <SiteFooterBottom>
        <Container>
          <SiteFooterBottomRow>
            <div>
              {/* copyright */}
              &copy; {new Date().getFullYear()} Blue-Jay Fasteners, Ltd. All
              rights reserved.
              {/* copyright / end */}
            </div>
            <SiteFooterPayments>
              <AppImage src="/images/payments.png" />
            </SiteFooterPayments>
          </SiteFooterBottomRow>
        </Container>
      </SiteFooterBottom>
    </SiteFooter>
  );
}

export default React.memo(Footer);
