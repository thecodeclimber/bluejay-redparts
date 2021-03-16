import styled from 'styled-components';
import Breadcrumb from '~/components/shared/Breadcrumb';

export const BlockHeaderStyledComponent = styled.div``;

export const BlockHeaderBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlockHeaderBreadcrumb = styled(Breadcrumb)`
  padding-top: 16px;
  padding-bottom: 40px;
`;

export const BlockHeaderTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  padding-top: 36px;
  padding-bottom: 40px;
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    padding-bottom: 20px;
    font-size: 2rem;
    padding-top: 32px;
    margin-top: -77px;
    text-align: center;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    margin-top: -44px;
  }
`;
