import styled from 'styled-components';

export const OrderHeader = styled.div`
  padding: 1.625rem 2rem 1.375rem;
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export const OrderHeaderActions = styled.div`
  direction: ltr;
  float: right;
  margin-top: -1px;
`;

export const OrderHeaderTitle = styled.div`
  direction: ltr;
  border-bottom: 2px solid ${(props) => `${props.theme.colors.tagBgHoverColor}`};
  padding-bottom: 4px;
  margin-bottom: 0;
  padding-inline-end: 3.5rem;
  float: left;
`;

export const OrderHeaderSubtitle = styled.div`
  color: ${(props) => `${props.theme.colors.white}`};
  font-size: 14px;
  line-height: 1.375;
  clear: both;
  padding-top: 12px;

  mark {
    padding: 0;
    color: ${(props) => `${props.theme.colors.selectfontcolor}`};
    background: transparent;
    font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  }
`;
