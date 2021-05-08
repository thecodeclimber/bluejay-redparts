import styled, { css } from 'styled-components';

const BlockProductsCarouselGutter = '20px';

export const BlockPostsCarouselLoader = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0s 0.3s;
  &:before {
    position: absolute;
    display: block;
    content: '';
    left: -10px;
    top: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background: ${(props) => `${props.theme.colors.cardbgcolor}`};
    opacity: 0.9;
  }
  &:after {
    left: calc(50% - 50px);
    top: calc(50% - 50px);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-width: 2px;
    border-color: rgba(0, 0, 0, 0.1);
    border-top-color: rgba(0, 0, 0, 0.5);
    border-style: solid;
    animation-name: loader-animation;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    position: absolute;
    display: block;
    content: '';
  }
`;

export const BlockPostsCarouselItem = styled.div`
  display: flex;
`;

export const BlockPostsCarousel = styled.div`
  position: relative;
`;

export const BlockPostsCarouselayout = styled.div`
  ${(props: { isLoading?: any }) =>
    props.isLoading &&
    css`
      ${BlockPostsCarouselLoader} {
        visibility: visible;
        transition-delay: 0s;
        opacity: 1;
      }
    `}
`;

export const BlockPostsCarouselCarousel = styled.div`
  position: relative;

  .slick-track {
    display: flex;
    align-items: stretch;
  }

  .slick-list {
    margin: 10px calc(18px);
    padding: 10px 0;
  }
  .slick-slide {
    padding: 0 calc(10px);
    height: auto;
    display: flex;

    & > div,
    & > div > div {
      width: 100%;
      display: flex !important;
      align-items: stretch;
    }
  }
  .slick-slide,
  .slick-slide > div > div {
    &:focus {
      outline: none;
    }
  }
`;
