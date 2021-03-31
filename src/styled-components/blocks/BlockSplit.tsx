import styled from 'styled-components';

export const BlockSplitItem = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
  }
`;

export const BlockSplitItemSidebar = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
    order: 1;
    margin-top: 52px;
  }
`;

export const BlockSplitRow = styled.div``;

export const BlockSplit = styled.div``;