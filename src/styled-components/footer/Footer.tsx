import styled from 'styled-components';
import FooterContacts from '~/components/footer/FooterContacts';
import FooterLinks from '~/components/footer/FooterLinks';
import FooterNewsletter from '~/components/footer/FooterNewsletter';

export const SiteFooter = styled.div`
  position: relative;
  background-color: #333;
  color: #9e9e9e;
`;

export const SiteFooterWidgets = styled.div`
  padding: 56px 0 50px;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const SiteFooterBottom = styled.div`
  background-color: #2b2b2b;
  font-size: 14px;
  color: #9e9e9e;
  font-weight: 400;
`;

export const SiteFooterBottomRow = styled.div`
  display: flex;
  height: 72px;
  justify-content: space-between;
  align-items: center;
`;

export const SiteFooterPayments = styled.div`
  margin-top: 12px;
`;

export const FooterLink = styled(FooterLinks)`
  padding: 56px 0 50px;
`;

export const FooterContact = styled(FooterContacts)`
  padding: 56px 0 50px;
`;

export const FooterNewsletterComponent = styled(FooterNewsletter)`
  padding: 56px 0 50px;
`;
