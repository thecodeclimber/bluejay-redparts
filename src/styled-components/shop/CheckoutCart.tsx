import styled from 'styled-components';

export const CheckoutTotals = styled.table`
  width: 100%;
  font-size: 15px;
  line-height: 19px;
  border-spacing: 0;
  margin-bottom: 40px;
  th,
  td {
    padding: 0;
  }
`;

export const CheckoutTotalsHeader = styled.thead`
  font-size: 13px;
  text-transform: uppercase;
  th {
    padding-bottom: 4px;
    border-bottom: 1px solid
      ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
  }
`;

export const CheckoutTotalsProducts = styled.tbody`
  td {
    padding: 4px 0;
  }
  tr:first-child td {
    padding-top: 16px;
  }
  tr:last-child td {
    padding-bottom: 16px;
  }
`;

export const CheckoutTotalsSubTotals = styled.tbody`
  th {
    font-weight: 500;
  }
  td,
  th {
    padding: 4px 0;
  }
  tr:first-child td,
  tr:first-child th {
    padding-top: 16px;
    border-top: 1px solid
      ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
  }
  tr:last-child {
    td,
    th {
      padding-bottom: 16px;
    }
  }
`;

export const CheckoutTotalsFooter = styled.tfoot`
  font-size: 24px;
  th {
    font-weight: 500;
  }
  tr:first-child td,
  tr:first-child th {
    padding-top: 20px;
    border-top: 1px solid
      ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
  }
`;

export const CheckoutAgree = styled.div`
  margin-bottom: 40px;
`;
