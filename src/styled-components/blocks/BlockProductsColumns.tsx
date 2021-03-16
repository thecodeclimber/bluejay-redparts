import styled from 'styled-components';

export const BlockBlockProduct = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    display: none;
  }
`;
export const BlockProductsColumnsTitle = styled.div`
  border-bottom: 2px solid ${(props) => `${props.theme.colors.bordercolor}`};
  margin-bottom: 20px;
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
`;
export const BlockProductColumnList = styled.div``;

export const BlockProductsColumnsListItem = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
`;