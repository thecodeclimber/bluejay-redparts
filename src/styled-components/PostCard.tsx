import styled, { css } from 'styled-components';

export const PostCardContent = styled.div`
  position: relative;
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 1.875rem 2.1875rem 2.1875rem;
  }
`;

export const PostCardCategory = styled.div`
  direction: ltr;
  left: 0;
  position: absolute;
  bottom: calc(100% - 1px);
  font-weight: 500;
  z-index: 0;
  font-size: 14px;
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    height: 26px;
    padding: 1.125rem 2.1875rem 0;
  }
  &::before {
    direction: ltr;
    left: 0;
    border-top-right-radius: 2px;
    transform: skewX(30deg);
    transform-origin: left top;
    width: 100%;
    position: absolute;
    display: block;
    content: '';
    top: 0;
    background: #fff;
    z-index: -1;
    height: 100%;
  }
  &::after {
    direction: ltr;
    left: 0;
    width: 50px;
    position: absolute;
    display: block;
    content: '';
    top: 0;
    background: #fff;
    z-index: -1;
    height: 100%;
  }
`;

export const PostCardTitle = styled.div`
  h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 34px;
    margin: 0;
  }
  a {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const PostCardDate = styled.div`
  font-size: 14px;
  color: #999;
  a {
    color: inherit;
  }
  a:hover {
    color: #007bff;
  }
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 11px;
    margin-bottom: 15px;
  }
  &::before {
    margin-right: 4px;
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    content: '';
    height: 1px;
    background: currentColor;
    opacity: 0.6;
  }
`;

export const PostCardExcerpt = styled.div`
  overflow: hidden;
`;

export const Typography = styled.div`
  line-height: 1.625;
`;

export const PostCardMore = styled.div`
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 18px;
  }
`;

export const PostCardImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

const postCardLayoutGrid = css`
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  ${PostCardImage}
`;

const SelectLayout = (props: any) => {
  if (props.layout === 'grid') {
    return postCardLayoutGrid;
  }
  return;
};

export const PostCardStyledComponent = styled.div`
  ${(props: { layout?: any }) =>
    props.layout === 'grid' &&
    css`
      ${PostCardContent} {
        position: relative;
      }
    `}
`;
