import styled, { css } from 'styled-components';

export const ProductFormRow = styled.div`
  margin-top: 12px;
`;

export const ProductFormTitle = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => `${props.theme.colors.formProductTitle}`};;
  margin-bottom: 4px;
`;
