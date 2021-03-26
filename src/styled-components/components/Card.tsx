import styled from 'styled-components';

export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${(props) => `${props.theme.colors.blockBrandDivider}`};
  margin-bottom: 2rem;
  margin-top: -4px;
`;
