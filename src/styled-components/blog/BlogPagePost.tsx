import styled, { css } from 'styled-components';

export const PostView = styled.div``;

export const PostHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 0;
  overflow: hidden;
  ${(props: { hasimage?: boolean }) => {
    return (
      props.hasimage &&
      css`
        background: ${(props) => `${props.theme.colors.selectfontcolor}`};
        margin-bottom: -150px;
        padding-bottom: 150px;
      `
    );
  }}
`;

export const PostHeaderImage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  opacity: 0.22;
`;

export const PostHeaderBody = styled.div`
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
  padding: 52px 30px;
`;

export const PostHeaderCategories = styled.div`
  margin-bottom: 28px;
`;

export const PostHeaderCategoriesList = styled.div`
  list-style: none;
  margin: -3px;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const PostHeaderCategoriesItem = styled.div`
  margin: 3px;
`;

export const PostHeaderCategoriesLink = styled.div`
  color: ${(props) => `${props.theme.colors.white}`};
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  background: ${(props) => `${props.theme.colors.primary}`};
  padding: 3px 9px;
  border-radius: 1.5px;
  @media (-webkit-max-device-pixel-ratio: 1), (max-resolution: 1dppx) {
    font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  }
`;

export const PostHeaderTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  color: ${(props) => `${props.theme.colors.white}`}; ;
`;

export const PostHeaderMeta = styled.div`
  font-size: 14px;
  margin-top: 24px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`}; ;
`;

export const PostHeaderMetaList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PostHeaderMetaLink = styled.div`
  color: inherit;
  transition: color 0.1s;
`;

export const PostHeaderMetaItem = styled.div`
  direction: ltr;
  margin-left: 24px;
  position: relative;
  &:before {
    direction: ltr;
    left: -14px;
    display: block;
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: currentColor;
    top: 9px;
  }
`;

export const PostViewBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostViewItemPost = styled.div`
  flex-grow: 1;
  max-width: 760px;
  direction: ltr;
  margin-inline-start: 48px;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) {
    margin-inline-start: 36px;
  }
`;

export const PostViewItem = styled.div`
  direction: ltr;
  margin-inline-start: 48px;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) {
    margin-inline-start: 36px;
  }
`;

export const PostHeaderDecor = styled.div`
  bottom: -1px;
`;
