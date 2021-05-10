import styled from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const FooterLink = styled.div`
  display: block;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    text-align: center;
  }
`;

export const FooterLinksTitle = styled.h5`
  font-size: 20px;
  color: ${(props) => `${props.theme.colors.white}`};
  margin-bottom: 22px;
  font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
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
    color: ${(props) => `${props.theme.colors.white}`};
  }
`;
