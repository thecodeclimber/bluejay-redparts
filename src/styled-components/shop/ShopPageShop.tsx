import styled, { css } from 'styled-components';

export const NoGutters = styled.div`
  margin-right: 0;
  margin-left: 0;
`;

export const BlockSplitItem = styled.div``;

export const BlockSplitItemContent = styled.div`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    margin-left: 32px;
    direction: ltr;
  }
  @media (min-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    margin-left: 40px;
    direction: ltr;
  }

  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
  }
  ${BlockSplitItem}
`;

export const BlockSplitItemSidebar = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
    order: 1;
    margin-top: 52px;
  }
  ${BlockSplitItem}
`;

export const BlockSplitHasSidebar = styled.div`
  ${(props: { hassidebar?: boolean }) =>
    props.hassidebar &&
    css`
      @media (min-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
        ${BlockSplitItemSidebar} {
          width: 270px;
        }
        ${BlockSplitItem} + ${BlockSplitItem} {
          direction: ltr;
          margin-left: 40px;
        }
        ${BlockSplitItemContent} {
          width: calc(100% - 310px);
        }
      }
      @media (min-width: ${(props) =>
          `${props.theme.breakPoints.md}`}px) and (max-width: ${(props) =>
          `${props.theme.breakPoints.xl}`}px) {
        ${BlockSplitItemSidebar} {
          width: 260px;
        }
        ${BlockSplitItem} + ${BlockSplitItem} {
          direction: ltr;
          margin-left: 32px;
        }
        ${BlockSplitItemContent} {
          width: calc(100% - 292px);
        }
      }
    `};
`;
