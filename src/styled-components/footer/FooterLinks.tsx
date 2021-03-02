import styled from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const FooterLink = styled.div`
  display: block;
  @media (max-width: 767.98px) {
    text-align: center;
  }
`;

export const FooterLinksTitle = styled.h5`
  font-size: 20px;
  color: #fff;
  margin-bottom: 22px;
  font-weight: 400;
  @media (max-width: 767.98px) {
    margin-bottom: 12px;
  }
`;

export const FooterLinksList = styled.ul`
  font-size: 15px;
  line-height: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLinksItem = styled.li`
  padding: 5px 0;
`;

export const FooterLinksLink = styled(AppLink)`
  color: inherit;
  transition: 0.15s;
  &:hover {
    color: #fff;
  }
`;
