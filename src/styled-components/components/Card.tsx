import styled, { css } from 'styled-components';

export const CardLoader = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${(props) => `${props.theme.colors.blockBrandDivider}`};
  margin-bottom: 2rem;
  margin-top: -4px;
`;
