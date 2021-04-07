import styled, { css } from 'styled-components';

export const CartTableTable = styled.div`
  width: 100%;
  border-spacing: 0;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
  }
`;

export const CartTableHead = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    display: none;
  }
`;

export const CartTableBody = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }
`;

export const CartTableProductName = styled.div`
  color: inherit;
  transition: color 0.15s;
`;

export const CartTableRow = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    width: calc(50% - 16px);
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 8px;
  }
`;

const CartTableColumnImage = css`
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 1px;
    text-align: center;
    .image {
      width: 80px;
    }
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    text-align: center;
    padding: 16px 14px;
    .image {
      max-width: 220px;
      margin: 0 auto;
    }
  }
`;
const CartTableColumnProduct = css`
  line-height: 1.25;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    flex-grow: 1;
    text-align: center;
    padding: 0 14px 16px;
  }
`;
const CartTableColumnPrice = css`
  direction: ltr;
  text-align: right;
  width: 130px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid
      ${(props) => `${props.theme.colors.blockBrandDivider}`};
    padding: 10px 14px;
    padding-left: 14px;
    font-size: 15px;
  }
`;
const CartTableColumnQuantity = css`
  direction: ltr;
  padding-left: 36px;
  width: 150px;
  text-align: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    padding-left: 14px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid
      ${(props) => `${props.theme.colors.blockBrandDivider}`};
    padding: 10px 14px;
    font-size: 15px;
    &:before {
      direction: ltr;
      margin-right: 12px;
      text-align: left;
      content: attr(data-title) ':';
      display: block;
      width: calc(40% - 6px);
      flex-shrink: 0;
      font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
    }
  }
`;
const CartTableColumnTotal = css`
  direction: ltr;
  text-align: right;
  width: 130px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    padding-left: 14px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid
      ${(props) => `${props.theme.colors.blockBrandDivider}`};
    padding: 10px 14px;
    font-size: 15px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    &:before {
      direction: ltr;
      margin-right: 12px;
      text-align: left;
      content: attr(data-title) ':';
      display: block;
      width: calc(40% - 6px);
      flex-shrink: 0;
      font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
    }
  }
`;
const CartTableColumnRemove = css`
  direction: ltr;
  padding-left: 0;
  width: 1px;
  white-space: nowrap;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    right: 0;
  }
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    margin-right: -12px;
  }
`;

const handleColumn = (props: any) => {
  if (props.columnimage) return CartTableColumnImage;
  if (props.columnproduct) return CartTableColumnProduct;
  if (props.columnquantity) return CartTableColumnQuantity;
  if (props.columnprice) return CartTableColumnPrice;
  if (props.columntotal) return CartTableColumnTotal;
  if (props.columnremove) return CartTableColumnRemove;
};

export const CartTableColumn = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding: 14px 16px;
    border-bottom: 1px solid
      ${(props) => `${props.theme.colors.blockBrandDivider}`};
  }
  &:first-child {
    direction: ltr;
    padding-left: 28px;
  }
  ${(props: {
    columnimage?: boolean;
    columnproduct?: boolean;
    columnquantity?: boolean;
    columnprice?: boolean;
    columntotal?: boolean;
    columnremove?: boolean;
  }) =>
    css`
      ${handleColumn}
    `}
`;

export const CartTableFoot = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    td {
      padding: 20px 24px;
    }
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    td {
      display: block;
      padding: 0;
    }
  }
`;

export const CartTableAction = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: block;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
    margin-top: 20px;
    justify-content: space-between;
  }
`;

export const CartTableCouponForm = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 360px;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    width: 60%;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding: 16px;
  }
`;

export const CartTableUpdateButton = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    border-top: 1px solid
      ${(props) => `${props.theme.colors.blockBrandDivider}`};
    text-align: center;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding: 16px;
  }
`;

export const CartTotals = styled.div`
  @media (max-width: 1399.98px) {
    direction: ltr;
    margin-left: auto;
    margin-top: 40px;
    width: 400px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    margin-left: 0;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    width: 100%;
  }
`;

export const CartTable = styled.div`
  flex-grow: 1;
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    align-self: flex-start;
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  }
  @media (max-width: 1399.98px) {
    width: 100%;
  }
`;

export const CartTotalsTable = styled.div`
  width: 100%;
  margin-bottom: 32px;
  font-size: 15px;
  display: block;
`;

export const CartTableRemove = styled.div`
  cursor: pointer;
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    margin-right: -12px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    position: absolute;
    direction: ltr;
    right: 0;
    top: 0;
  }
`;

export const CartTableQuantity = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    max-width: 120px;
  }
`;

export const CartTableOptions = styled.div`
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  line-height: 1.375;
  color: ${(props) => `${props.theme.colors.listcolor}`};
`;
