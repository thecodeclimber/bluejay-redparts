import styled from 'styled-components';
import AppImage from '~/components/shared/AppImage';

export const BlockBlockSplit = styled.div``;

export const BlockSplitRow = styled.div``;

export const BlockSplitItemContent = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    margin-left: 40px;
    width: calc(100% - 310px);
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    margin-left: 32px;
    width: calc(100% - 292px);
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
  }
`;

export const BlockSplitItemSideBar = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    width: 270px;
  }
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

export const Block = styled.div``;

export const CategoriesListLayout = styled.div``;

export const CategoriesListBody = styled.ul`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const CategoriesListItem = styled.li`
  padding: 1.125rem;
  text-align: center;
  position: relative;
  a {
    display: block;
    font-size: 15px;
    font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
    line-height: 20px;
    color: inherit;
  }
  &:before {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${(props) => `${props.theme.colors.backgroundcolor}`};
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.12s;
    z-index: 1;
  }
  &:hover:before {
    opacity: 1;
  }
  @media (min-width: 576px) {
    width: calc((100% - 2px) / 3);
  }
  @media (max-width: 575.98px) {
    width: calc((100% - 1px) / 2);
  }
`;

export const ImageTypeCategory = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
`;

export const ImageBody = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const ImageTag = styled(AppImage)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const CategoriesListItemName = styled.div``;

export const CategoriesListItemProducts = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
`;

export const CategoriesListDivider = styled.li`
  width: 1px;
  background-color: ${(props) => `${props.theme.colors.bordercolor}`};
  @media (min-width: 576px) {
    &:nth-child(6n) {
      width: 100%;
      height: 1px;
    }
    &:last-child:nth-child(6n) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    &:nth-child(4n) {
      width: 100%;
      height: 1px;
    }
    &:last-child:nth-child(4n) {
      display: none;
    }
  }
`;
