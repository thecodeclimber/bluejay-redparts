import styled, { css } from 'styled-components';
export const NoGutters = styled.div``;
const BlockSplitItemContent = css`
  width: calc(100% - 292px);
`;
export const BlockSplitItem = styled.div`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    margin-left: 32px;
  }
  ${(props: { itemContent?: boolean }) =>
    props.itemContent &&
    css`
      ${BlockSplitItemContent}
    `};
`;

export const BlockSplitItemSidebar = styled.div`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    width: 260px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
    order: 1;
    margin-top: 52px;
  }
`;