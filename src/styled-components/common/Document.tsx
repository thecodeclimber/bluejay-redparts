import styled from 'styled-components';

export const Document = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

export const DocumentHeader = styled.div`
  text-align: center;
  padding: 44px 0 52px;
  @media (max-width: 1199.98px) {
    padding: 44px 0 48px;
  }
  @media (max-width: 767.98px) {
    padding: 36px 0 40px;
  }
`;

export const DocumentTitle = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  letter-spacing: 0.01em;
  margin: 0;
  @media (max-width: 767.98px) {
    font-size: 36px;
  }
  @media (max-width: 575.98px) {
    font-size: 32px;
  }
`;

export const DocumentSubTitle = styled.div`
  font-size: 15px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin-top: 8px;
  margin-bottom: -4px;
  @media (max-width: 1199.98px) {
    margin-top: 4px;
  }
  @media (max-width: 575.98px) {
    font-size: 14px;
  }
`;

export const DocumentContent = styled.div`
  padding: 50px;
  @media (max-width: 991.98px) {
    padding: 40px;
  }
  @media (max-width: 575.98px) {
    padding: 24px;
  }
`;

export const Typography = styled.div`
  line-height: 1.625;
  @media (max-width: 575.98px) {
    font-size: 15px;
    line-height: 1.75;
  }
`;

export const DocumentSignature = styled.div`
  margin-top: 2.5rem;
  @media (max-width: 575.98px) {
    margin-top: 24px;
  }
`;
