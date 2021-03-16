import styled from 'styled-components';

export const WidgetWidgetProducts = styled.div`
  margin-top: 20px;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
`;

export const WidgetHeader = styled.div`
  padding: 1.375rem 1.5rem;
  h4 {
    font-size: ${(props) => `${props.theme.headers.h5.fontSize}`};
    font-weight: ${(props) => `${props.theme.headers.h5.fontWeight}`};
    margin-bottom: 0;
  }
`;

export const WidgetProductList = styled.div`
  padding-bottom: 1.5rem;
`;

export const WidgetProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  margin-top: 12px;
`;

export const WidgetProductImage = styled.div`
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
  width: 64px;
  margin-right: 12px;
  &:before {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid
      ${(props) => `${props.theme.colors.widgetproductimagebordercolor}`};
    border-radius: inherit;
    pointer-events: none;
    left: 0;
    top: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const WidgetProductsInfo = styled.div`
  padding-top: 2px;
`;

export const WidgetProductsName = styled.div`
  font-size: 14px;
  line-height: 17px;
  height: 34px;
  overflow: hidden;
  a {
    color: inherit;
    transition: color 0.12s;
  }
  a:hover {
    color: #007bff;
  }
`;

export const WidgetProductsPrice = styled.div`
  display: flex;
  padding-top: 2px;
`;

export const WidgetProductsCurrentPrice = styled.div`
  font-size: 14px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
`;

export const WidgetProductsNewPrice = styled.div`
  font-size: 14px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
`;

export const WidgetProductsOldPrice = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  font-size: 13px;
  text-decoration: line-through;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  padding-top: 1px;
  margin-left: 3px;
`;
