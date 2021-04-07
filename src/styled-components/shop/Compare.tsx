import styled from 'styled-components';

export const CompareOptionsList = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid
    ${(props) => `${props.theme.colors.blockBrandDivider}`};
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CompareTableColumn = styled.div``;

export const CompareOption = styled.div`
  display: flex;
  align-items: center;
`;

export const CompareOptionLabel = styled.div`
  direction: ltr;
  margin-right: 8px;
`;
