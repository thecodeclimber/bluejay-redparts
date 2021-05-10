import styled from 'styled-components';
import { Check100Svg } from '~/svg';
import AddressCard from '~/components/shared/AddressCard';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';

export const OrderOrderSuccess = styled.div``;

export const OrderSuccessBody = styled.div`
  max-width: 690px;
  margin: 0 auto;
`;

export const OrderSuceesheader = styled.div`
  padding: 60px 0 52px;
  text-align: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 44px 0 40px;
  }
`;

export const OrderSuccessIcon = styled(Check100Svg)`
  fill: ${(props) => `${props.theme.colors.primary}`};
  margin: 0 auto;
  display: block;
`;

export const OrderSuccessTitle = styled.h1`
  margin-top: 24px;
  margin-bottom: 2px;
`;

export const OrderSuceesSubTitle = styled.div`
  font-size: 19px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;

export const OrderSuccessActions = styled.div`
  margin-top: 20px;
`;

export const OrderSuccessMeta = styled.div`
  padding: 16px 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const OrderSuceesMetaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-wrap: wrap;
  }
`;

export const OrderSuccessMetaItem = styled.li`
  flex-basis: 25%;
  line-height: 1.25;
  position: relative;
  padding: 2px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:not(:last-child):before {
    position: absolute;
    display: block;
    content: '';
    border-left: 2px dashed
      ${(props) => `${props.theme.colors.borderleftcolor}`};
    width: 0;
    height: 100%;
    top: 0;
    right: -1px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-basis: 50%;
    &:nth-child(2n):before {
      display: none;
    }
    &:nth-child(n + 3) {
      margin-top: 16px;
    }
  }
`;

export const OrderSuceesMetaTitle = styled.span`
  display: block;
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  margin-bottom: 4px;
`;

export const OrderSuccessMetaValue = styled.span`
  display: block;
  font-size: 14px;
  line-height: 16px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;

export const OrderList = styled.div`
  a {
    color: inherit;
  }
  a:hover {
    color: inherit;
    text-decoration: underline;
  }

  table {
    width: 100%;
    font-size: 15px;
  }
  @media (min-width: 576px) {
    th,
    td {
      padding: 4px 12px;
    }
    &:first-child {
      padding-left: 1.5rem;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  }
`;

export const OrderListColumnLabel = styled.th``;

export const OrderListColumnQuantity = styled.th`
  text-align: center;
`;

export const OrderListColumnTotal = styled.th`
  text-align: right;
`;

export const OrderListHeader = styled.thead`
  td,
  th {
    text-transform: uppercase;
    color: ${(props) => `${props.theme.colors.subtitlecolor}`};
    font-size: 13px;
    font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  }
  @media (min-width: 576px) {
    td,
    th {
      border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
      padding: 10px 12px;
      padding-left: 1.5rem;
    }
  }
  @media (max-width: 576px) {
    display: block;
    tr {
      display: flex;
      padding: 0 1rem;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    }
    ${OrderListColumnLabel} {
      flex-grow: 1;
    }
    ${OrderListColumnQuantity} {
      display: none;
    }
  }
`;
export const ImageBody = styled(AppLink)`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const ImageTag = styled(AppImage)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const ImageTypeProduct = styled.div`
  width: 40px;
`;

export const OrderListColumnImage = styled.td`
  width: 1px;
`;

export const OrderListOptions = styled.div`
  color: ${(props) => `${props.theme.colors.listcolor}`};
  font-size: 13px;
  margin-top: 2px;
`;

export const OrderListOptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const OrderListOptionsItem = styled.li`
  &:not(:last-child) {
    position: relative;
    padding-right: 19px;
    &:after {
      position: absolute;
      content: '';
      display: block;
      background: ${(props) => `${props.theme.colors.plusiconcolor}`};
      width: 1px;
      height: 10px;
      top: calc(50% - 5px);
      transform: skewX(-20deg);
      right: 9px;
    }
  }
`;

export const OrderListOptionsLabel = styled.span``;

export const OrderListOptionsValue = styled.span``;

export const OrderListColumnProduct = styled.td`
  line-height: 1.25;
`;

export const OrderListColumnQunatity = styled.td`
  text-align: center;
`;

export const OrderListColumnTotals = styled.td`
  text-align: right;
`;

export const OrderListProduct = styled.tbody`
  @media (min-width: 576px) {
    th,
    td {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    tr:first-child {
      th,
      td {
        padding-top: 14px;
      }
    }
    tr:last-child {
      th,
      td {
        padding-bottom: 14px;
      }
    }
    ${OrderListColumnProduct} {
      padding-left: 4px;
    }
  }
  @media (max-width: 576px) {
    display: block;
    tr {
      padding: 0 1rem;
    }
    tr {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    }

    ${OrderListColumnImage} {
      width: 40px;
      flex-shrink: 0;
    }
    ${OrderListColumnProduct} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: calc(100% - 40px);
      padding-left: 1rem;
    }
    ${OrderListColumnQunatity} {
      display: block;
      margin-top: 0.625rem;
      margin-bottom: -0.125rem;
      &:before {
        content: attr(data-title) ' ';
      }
    }
    ${OrderListColumnTotals} {
      margin-top: 0.625rem;
      margin-bottom: -0.125rem;
      flex-grow: 1;
    }
  }
`;

export const OrderListColumnFooterLabel = styled.th``;

export const OrderListColumnFooterTotal = styled.td`
  text-align: right;
`;

export const OrderListSubtotals = styled.tbody`
  @media (min-width: 576px) {
    th,
    td {
      padding-top: 3px;
      padding-bottom: 3px;
    }
    tr:first-child {
      th,
      td {
        padding-top: 12px;
        border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
      }
    }
    tr:last-child {
      th,
      td {
        padding-bottom: 12px;
      }
    }
  }
  @media (max-width: 576px) {
    display: block;
    tr {
      padding: 0 1rem;
      display: flex;
    }
    ${OrderListColumnFooterLabel} {
      flex-grow: 1;
    }
    ${OrderListColumnFooterTotal} {
      margin-top: 0.625rem;
      margin-bottom: -0.125rem;
    }
  }
`;

export const OrderListFooter = styled.tfoot`
  font-size: 20px;
  th {
    font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  }
  @media (min-width: 576px) {
    th,
    td {
      padding-top: 14px;
      padding-bottom: 14px;
      border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    }
  }
  @media (max-width: 576px) {
    display: block;
    padding-top: 12px;
    padding-bottom: 12px;
    border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    tr {
      padding: 0 1rem;
      display: flex;
    }
    ${OrderListColumnFooterLabel} {
      flex-grow: 1;
    }
    ${OrderListColumnFooterTotal} {
      margin-top: 0.625rem;
      margin-bottom: -0.125rem;
    }
  }
`;

export const OrderSuccessAddresses = styled.div`
  margin-left: -20px;
  display: flex;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-direction: column;
  }
`;

export const OrderSuccessAddress = styled(AddressCard)`
  margin-left: 20px;
  margin-top: 20px;
  flex-basis: 0;
  flex-grow: 1;
`;
