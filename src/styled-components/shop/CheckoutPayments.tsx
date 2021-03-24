import styled, { css } from 'styled-components';
import RadioButton from '~/components/shared/RadioButton';

export const CheckoutPaymentMethods = styled.div`
  margin-bottom: 20px;
`;

export const PaymentMethodsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PaymentMethodsItemHeader = styled.label`
  display: flex;
  align-items: center;
  line-height: 18px;
  margin: 0;
  padding: 10px 12px 8px;
  cursor: pointer;
  font-size: 15px;
`;

export const PaymentMethodsItemRadio = styled(RadioButton)`
  display: inline-block;
  margin-right: 8px;
`;

export const PaymentMethodsitemTitle = styled.span``;

export const PaymentMethodsItemContainer = styled.div`
  overflow: hidden;
  opacity: 0;
  height: 0;
  transition: height 0.3s, opacity 0.3s;
`;

export const PaymentMethodsItemDetails = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding: 0 12px 8px;
`;

export const PaymentMethodsItem = styled.li`
  border-radius: 2px;
  padding-bottom: 2px;
  border: 1px solid
    ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
  transition: background 0.12s, border-color 0.12s;
  ${(props: { open?: boolean }) =>
    props.open &&
    css`
      ${PaymentMethodsItemContainer} {
        opacity: 1;
        height: auto;
      }
    `}
  &:hover {
    background: ${(props) =>
      `${props.theme.colors.widgetsearchbuttonhoverbgcolor}`};
    border-color: ${(props) => `${props.theme.colors.tagBgHoverColor}`};
  }
`;