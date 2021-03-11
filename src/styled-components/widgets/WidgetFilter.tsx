import styled from 'styled-components';

export const WidgetFilter = styled.div`
  margin-bottom: 20px;
  display: block;
  @media (min-width: 992px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  }
`;

export const WidgetFilterHeader = styled.div`
  padding: 1.375rem 1.5rem;
  @media (max-width: 991.98px) {
    display: none;
  }
  h4 {
    font-size: ${(props) => `${props.theme.headers.h5.fontSize}`};
    font-weight: ${(props) => `${props.theme.headers.h5.fontWeight}`};
    margin-bottom: 0;
  }
`;

export const WidgetFilterList = styled.div``;

export const WidgetFilterAction = styled.div`
  padding: 20px 1.5rem 1.5rem;
`;
