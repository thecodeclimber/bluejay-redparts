import styled, { css } from 'styled-components';

export const PostsListItem = styled.div`
  display: flex;
`;

export const PostListBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PostsList = styled.div`
  ${(props: { layout?: any }) => {
    if (props.layout === 'classic') {
      return css`
        ${PostsListItem} {
          margin: 20px;
          width: calc(100% - 40px);
        }
        ${PostListBody} {
          margin: -20px;
        }
      `;
    } else if (props.layout === 'list') {
      return css`
        ${PostsListItem} {
          margin: 14px;
          width: calc(100% - 28px);
        }
        ${PostListBody} {
          margin: -14px;
        }
      `;
    } else if (props.layout === 'grid') {
      return css`
        ${PostsListItem} {
          margin: 14px;
          width: calc(50% - 28px);
          @media (max-width: @media (max-width:${(props) =>
            `${props.theme.breakPoints.xl}px`}) {) {
            margin: 10px;
            width: calc(50% - 20px);
          }
          @media (max-width: @media (max-width:${(props) =>
            `${props.theme.breakPoints.sm}px`}) {) {
            margin: 16px;
            width: calc(100% - 32px);
          }
        }
        ${PostListBody} {
          margin: -14px;
          @media (max-width: @media (max-width:${(props) =>
            `${props.theme.breakPoints.xl}px`}) {) {
            margin: -10px;
          }
          @media (max-width: @media (max-width:${(props) =>
            `${props.theme.breakPoints.sm}px`}) {) {
            margin: -16px;
          }
        }
      `;
    }
  }}
`;