import styled, { css } from 'styled-components';
import { ImageTypeProduct } from '../../styled-components/components/Image';

export const CompareTable = styled.div`
  width: 100%;
  font-size: 15px;
  border-spacing: 0;
`;

export const CompareTableColumnHeader = styled.div`
  direction: ltr;
  text-align: right;
  width: 15%;
  background: ${(props) => `${props.theme.colors.tabbgcolor}`};
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  min-width: 140px;
  padding: 14px 16px;
`;

export const CompareTableColumnProduct = styled.div`
  direction: ltr;
  border-left: 1px solid ${(props) => `${props.theme.colors.blockBrandDivider}`};
  width: 17%;
  text-align: center;
  vertical-align: top;
  min-width: 180px;
  padding: 14px 16px;
`;

export const CompareTableColumnFake = styled.div`
  direction: ltr;
  border-left: 1px solid ${(props) => `${props.theme.colors.blockBrandDivider}`};
  padding: 0;
`;

export const CompareTableProductImage = styled.div`
  width: 150px;
  margin: 0 auto;
  ${ImageTypeProduct}
`;

export const CompareTableProduct = styled.div`
  display: block;
  line-height: 20px;
  color: inherit;
  transition: color 0.12s;
`;

export const CompareTableProductName = styled.div`
  color: inherit;
`;

export const CompareTableRatingStars = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1px;
`;

export const CompareTableRatingTitle = styled.div`
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.listcolor}`};
  margin-top: 5px;
`;
