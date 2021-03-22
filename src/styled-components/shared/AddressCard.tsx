import styled, { css } from 'styled-components';
import { CardLoader } from '../../styled-components/components/Card';
import { TagBadge } from '~/styled-components/components/TagBdge';

export const AddressCardBody = styled.div`
  padding: 2rem;
  font-size: 15px;
  line-height: 18px;
`;

export const AddressCardName = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  font-size: 16px;
  margin-bottom: 1.125rem;
`;

export const AddressCardRow = styled.div`
  margin-top: 0.75rem;
`;

export const AddressCardFooter = styled.div`
  margin-top: 1.625rem;
`;

export const AddressCardRowTitle = styled.div`
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.listcolor}`};
`;

export const AddressCardBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  direction: ltr;
  ${TagBadge}
`;

const AddressCardFeatured = css`
  ${AddressCardBody} {
    padding: 2rem;
  }
  ${AddressCardName} {
    font-weight: ${(props) => `${props.theme.fontWeight.bold}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    ${AddressCardBody} {
      padding: 1.375rem;
    }
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}px`}) {
    ${AddressCardBody} {
      padding: 1.5rem;
    }
  }
`;

export const AddressCardStyledComponent = styled.div`
  position: relative;
  ${(props: { isLoading?: boolean; isFeatured?: boolean }) =>
    props.isLoading
      ? css`
          ${CardLoader} {
            pointer-events: auto;
            opacity: 1;
          }
        `
      : css`
          ${AddressCardFeatured}
        `};
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    width: calc(50% - 12px);
  }
`;
