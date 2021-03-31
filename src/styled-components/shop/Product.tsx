import styled, { css } from 'styled-components';
import CompatibilityStatusBadge from '~/components/shared/CompatibilityStatusBadge';
import { TagBadge } from '~/styled-components/components/TagBadge';

export const ProductRating = styled.div`
  display: flex;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  font-size: 14px;
  line-height: 1;
`;

export const ProductRatingStars = styled.div`
  margin-left: 8px;
`;

export const ProductRatingLabel = styled.div`
  a {
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const ProductFit = styled(CompatibilityStatusBadge)`
  margin-left: 12px;
`;

export const TagBadgeSale = styled(TagBadge)`
  top: -7px;
  position: absolute;
  left: 22px;
`;

export const ProductPricesStock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 22px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding-top: 0;
    padding-bottom: 10px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ProductPrices = styled.div`
  padding: 8px 0 7px;
  line-height: 1;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  letter-spacing: -0.04em;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
`;

export const ProdcutPriceOld = styled(ProductPrice)`
  font-size: 16px;
  text-decoration: line-through;
  font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin-bottom: 5px;
`;

export const ProductNewPrice = styled(ProductPrice)`
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
`;

export const ProductPriceCurrent = styled(ProductPrice)``;

export const ProductMeta = styled.div`
  margin: -3px 0;
  table {
    width: 100%;
    font-size: 14px;
  }
  th,
  td {
    padding: 3px 0;
  }
  th {
    font-weight: 500;
    padding-right: 12px;
  }
  tr + tr > * {
    border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  }
  a {
    color: ${(props) => `${props.theme.colors.link}`};
  }
  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    padding: 10px 0;
    margin: 8px 0;
    th,
    td {
      padding-top: 1px;
      padding-bottom: 1px;
    }
    tr + tr > * {
      border: none;
    }
  }
`;

export const ProductInfoBody = styled.div`
  padding: 28px 28px 24px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding-top: 0;
    padding-bottom: 16px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ProductActionsitemQuantity = styled.div`
  width: 100px;
  margin-right: 8px;
  margin-top: 20px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 10px;
  }
`;

export const ProductItemAdditemAddCart = styled.div`
  flex-grow: 1;
  margin-top: 20px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-grow: 0;
    margin-top: 10px;
  }
`;

export const ProductActionsDivider = styled.div`
  width: 100%;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    height: 10px;
  }
`;

export const ProductActionsItemWishlist = styled.button`
  position: relative;
  margin-top: 14px;
  margin-bottom: -8px;
  width: 50%;
  font-size: 13px;
  line-height: 16px;
  background: transparent;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  fill: ${(props) => `${props.theme.colors.tagBgActiveColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 2px;
  transition: background 0.15s, fill 0.15s;
  padding-left: 9px;
  padding-right: 10px;
  svg {
    position: relative;
    top: -1px;
    margin-right: 8px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(props) => `${props.theme.colors.widgetchildbgcolor}`};
    fill: ${(props) => `${props.theme.colors.widgetsearchbuttoncolor}`};
  }
  &:active {
    background: ${(props) =>
      `${props.theme.colors.widgetsearchbuttonactivebgcolor}`};
    fill: ${(props) => `${props.theme.colors.blockBrandsItemName}`};
  }
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      background: transparent;
      fill: transparent;
      cursor: default;
      &:before {
        left: calc(50% - 8px);
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
        border-radius: 8px;
        border-width: 2px;
        border-color: ${(props) => `${props.theme.colors.loadingbordercolor}`};
        border-top-color: ${(props) =>
          `${props.theme.colors.loadingbordertopcolor}`};
        border-style: solid;
        animation-name: loader-animation;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        position: absolute;
        display: block;
        content: '';
        position: static;
        margin-right: -16px;
      }
    `}
  @media (min-width: ${(props) =>
    `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
    `${props.theme.breakPoints.md}`}px) {
    position: absolute;
    top: 19px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    padding: 0;
    margin: 0;
    right: 16px;
    span {
      display: none;
    }
    svg {
      top: 0;
      display: block;
      margin: 0;
    }
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    width: auto;
    margin-top: 2px;
    margin-bottom: -2px;
  }
`;

export const ProductActionsItemCompare = styled(ProductActionsItemWishlist)`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    right: 52px;
  }
`;

export const ProductTagsAndShareLinks = styled.div`
  border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  padding: 24px 28px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    border: none;
    padding-top: 20px;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;