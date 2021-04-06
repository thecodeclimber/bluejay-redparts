import styled, { css } from 'styled-components';

export const BlockEmptyBody = styled.div`
  text-align: center;
`;

export const BlockEmptyTitle = styled.div`
  margin-top: 12px;
  font-size: 36px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
`;

export const BlockEmptyMessage = styled.div`
  margin-top: 16px;
`;

export const BlockEmptyAction = styled.div`
  margin-top: 32px;
`;

export const Wishlist = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  }
`;

export const WishlistTable = styled.table`
  width: 100%;
  border-spacing: 0;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: block;
  }
`;

export const WishlistHead = styled.thead`
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: none;
  }
`;

export const WishlistRow = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
    position: relative;
    margin: 8px;
    width: calc(50% - 16px);
    text-align: center;
    padding: 16px;
    display: block;
  }
`;

const WishlistColumn = css`
  padding: 14px 16px;
  @media (max-width: 767.98px) {
    display: block;
  }
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    &:first-child {
      direction: ltr;
      padding-left: 28px;
    }
    &:last-child {
      direction: ltr;
      padding-right: 28px;
    }
  }
`;

const WishlistColumnImage = css`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    text-align: center;
    width: 1px;
    .image {
      width: 80px;
    }
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    .image {
      padding-bottom: 12px;
      max-width: 220px;
      margin: 0 auto;
    }
  }
  ${WishlistColumn}
`;

const WishlistColumnStock = css`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    text-align: center;
    width: 1px;
    white-space: nowrap;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    direction: ltr;
    padding-left: 0;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 16px;
    display: none;
    justify-content: center;
  }
  ${WishlistColumn}
`;

const WishlistColumnProduct = css`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    padding-left: 0;
  }
  ${WishlistColumn}
`;

const WishlistColumnButton = css`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    direction: ltr;
    text-align: right;
    white-space: nowrap;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 20px 0 12px;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    padding-left: 0;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) {
    width: 1px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    white-space: nowrap;
    width: 200px;
  }
  ${WishlistColumn}
`;

const WishlistColumnPrice = css`
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 8px;
    font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  }
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    direction: ltr;
    white-space: nowrap;
    width: 140px;
    text-align: right;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    direction: ltr;
    padding-left: 0;
    width: 1px;
  }
  ${WishlistColumn}
`;

const WishlistColumnRemove = css`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    direction: ltr;
    padding-left: 0;
    width: 1px;
    white-space: nowrap;
  }
  ${WishlistColumn}
`;

const handleColumn = (props: any) => {
  if (props.columnprice) return WishlistColumnPrice;
  if (props.columnstock) return WishlistColumnStock;
  if (props.columnimage) return WishlistColumnImage;
  if (props.columnproduct) return WishlistColumnProduct;
  if (props.columnbutton) return WishlistColumnButton;
  if (props.columnremove) return WishlistColumnRemove;
  return;
};

export const WishlistColumnHead = styled.th`
  font-size: 13px;
  text-transform: uppercase;
  white-space: pre;
  ${(props: {
    columnimage?: boolean;
    columnproduct?: boolean;
    columnstock?: boolean;
    columnprice?: boolean;
    columnbutton?: boolean;
    columnremove?: boolean;
  }) =>
    css`
      ${handleColumn}
    `}
`;

export const WishlistColumnBody = styled.td`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    border-top: 1px solid
      ${(props) => `${props.theme.colors.blockBrandDivider}`};
  }
  text-align: center;
  ${(props: {
    columnimage?: boolean;
    columnproduct?: boolean;
    columnstock?: boolean;
    columnprice?: boolean;
    columnbutton?: boolean;
    columnremove?: boolean;
  }) =>
    css`
      ${handleColumn}
    `}
`;

export const WishListBody = styled.tbody`
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }
`;

export const WishlistProductName = styled.div`
  text-align: left;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    text-align: center;
  }
  line-height: 20px;
  a {
    color: inherit;
    transition: color 0.15s;
  }
  a:hover {
    color: $link-color;
  }
`;

export const WishlistProductRating = styled.div`
  display: flex;
  margin-top: 6px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: flex;
    justify-content: center;
  }
`;

export const WishlistProductRatingTitle = styled.div`
  direction: ltr;
  margin-left: 8px;
  white-space: pre;
  font-size: 13px;
  line-height: 1;
  color: ${(props) => `${props.theme.colors.ItemDetailsColor}`}; ;
`;

export const WishlistRemove = styled.button`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    direction: ltr;
    margin-right: -12px;
    width: 1px;
    white-space: nowrap;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    direction: ltr;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
