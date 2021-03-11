import styled from 'styled-components';

const LocalCarouselExpand = "10px";
const LockProductsCarouselGutter ="20px"

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
    background: #fafafa;
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
