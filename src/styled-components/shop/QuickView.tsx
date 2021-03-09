import styled from 'styled-components';
// third-party
import { Modal } from 'reactstrap';
// application
import ProductGallery from '~/components/shop/ProductGallery';
import AppLink from '~/components/shared/AppLink';
import StockStatusBadge from '~/components/shared/StockStatusBadge';
import ProductForm from '~/components/shop/ProductForm';

export const QuickView = styled(Modal)`
  max-width: 800px;
  @media (max-width: 991.98px) {
    max-width: 520px;
  }
  @media (max-width: 575.98px) {
    max-width: 100%;
  }
`;

export const QuickViewClose = styled.button`
  z-index: 2;
  position: absolute;
  padding: 16px;
  border: none;
  top: 0;
  border-radius: 0 2.5px 0 2.5px;
  background-color: #fff;
  cursor: pointer;
  color: #ccc;
  right: 0;
  fill: currentColor;
  transition: background 0.2s, color 0.2s;
  svg {
    display: block;
  }
  &:hover {
    background-color: #f2f2f2;
    color: #4d4d4d;
  }

  &:active {
    transition-duration: 0s;
    background-color: #ebebeb;
    color: #4d4d4d;
  }
  &:focus {
    outline: none;
  }
`;

export const QuickViewBody = styled.form`
  padding: 32px 32px 36px;
  display: flex;
  flex-direction: row;
  @media (max-width: 991.98px) {
    flex-direction: column;
  }
  @media (max-width: 474px) {
    padding: 20px 20px 24px;
  }
`;

export const QuickViewGallery = styled(ProductGallery)`
  width: 320px;
  flex-shrink: 0;
  margin-right: 28px;
  @media (max-width: 991.98px) {
    width: 100%;
    margin-bottom: 28px;
    margin-right: 0;
  }
`;

export const QuickViewSeeDetails = styled(AppLink)`
  border-radius: 0 0 2.5px 2.5px;
  border-top: 1px solid #ebebeb;
  display: block;
  text-align: center;
  color: #6c757d;
  font-size: 15px;
  height: 52px;
  line-height: 50px;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    color: #6c757d;
    background: #f7f7f7;
  }

  &:active {
    background: #f0f0f0;
    transition-duration: 0s;
  }
`;
//products table styled component

export const QuickViewProduct = styled.div`
  flex-grow: 1;
`;

export const QuickViewProductName = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  margin-top: -2px;
`;

export const QuickViewProductRating = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const QuickViewProductRatingTitle = styled.div`
  font-size: 13px;
  line-height: 1;
  color: #6c757d;
  margin-left: 8px;
`;

export const QuickViewProductMeta = styled.div`
  margin: 12px 0 0;

  table {
    display: block;
    margin: -3px;
  }
  tbody {
    display: flex;
    flex-wrap: wrap;
  }
  tr,
  th,
  td {
    display: block;
  }
  tr {
    background: #f2f2f2;
    border-radius: 1.5px;
    margin: 3px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 7px;
    padding-right: 14px;
  }
  th {
    font-size: 11px;
    font-weight: 400;
    color: #808080;
    line-height: 1;
  }
  td {
    font-size: 13px;
    line-height: 1;
    font-weight: 500;
  }
  a {
    color: inherit;
  }
`;

export const QuickViewProductDescription = styled.div`
  margin-top: 10px;
  font-size: 15px;
  line-height: 22px;
`;

export const QuickViewProductPriceStock = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 16px;
`;

export const QuickViewProductPrice = styled.div`
  line-height: 1;
  padding: 6px 0;
`;

export const QuickViewProductOldPrice = styled.div`
  font-size: 14px;
  text-decoration: line-through;
  font-weight: 400;
  color: #999;
  margin-bottom: 3px;
  letter-spacing: -0.04em;
`;

export const QuickViewProductNewPrice = styled.div`
  color: #262626;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

export const QuickViewProductPriceCurrent = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: #262626;
`;

export const QuickViewProductStock = styled(StockStatusBadge)`
  margin-bottom: 2px;
  margin-left: 12px;
`;

export const QuickViewProductForm = styled(ProductForm)`
  margin-bottom: 16px;
`;

export const QuickViewProductAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
`;

export const QuickViewProductActionItemQuantity = styled.div`
  width: 100px;
  margin: 4px;
`;

export const QuickViewProductActionItemAddToCart = styled.div`
  margin: 4px;
`;

export const QuickViewProductActionItemWishList = styled.div`
  margin: 4px;
`;

export const QuickViewProductActionsItemCompare = styled.div`
  margin: 4px;
`;
