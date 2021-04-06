import styled, { css } from 'styled-components';

export const BlogViewItem = styled.div`
  & + & {
    margin-left: 48px;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}px`}) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}px`}) {
    & + & {
      margin-left: 36px;
    }
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}px`}) {
    & + & {
      margin-left: 0;
    }
  }
`;

export const BlogViewItemSideBar = styled(BlogViewItem)`
  width: 332px;
  flex-shrink: 0;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}px`}) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}px`}) {
    width: 290px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}px`}) {
    width: 100%;
    margin-top: 48px;
    order: 1;
  }
`;

export const BlogViewBody = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}px`}) {
    flex-direction: column;
  }
`;

export const BlogViewItemPosts = styled(BlogViewItem)`
  flex-grow: 1;
`;

export const BlogView = styled.div`
  width: 100%;
  ${(props: { layout?: any }) => {
    if (props.layout === 'classic') {
      return css`
        ${BlogViewItemPosts} {
          max-width: 730px;
        }
      `;
    }
  }}
`;