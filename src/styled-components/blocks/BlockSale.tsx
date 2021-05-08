import styled, { css } from 'styled-components';
import Arrow from '~/components/shared/Arrow';

export const BlockBlockSale = styled.div``;

export const BlockSaleContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlockSaleheader = styled.div`
  text-align: center;
  position: relative;
  padding: 14px 32px 0;
  margin: 0 auto -28px;
  z-index: 1;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 499px) {
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto -23px;
    display: flex;
    flex-direction: column;
  }
`;

export const BlockSaleTitle = styled.div`
  font-size: 32px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  line-height: 1;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    font-size: 28px;
    line-height: 30px;
  }
`;

export const BlockSaleSubTitle = styled.div`
  color: ${(props) => `${props.theme.colors.subtitlecolor}`};
  line-height: 1;
  margin-top: 10px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    margin-top: 6px;
    font-size: 15px;
  }
`;

export const BlockSaleTimer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    margin-top: 16px;
  }
`;

export const BlockSaleControls = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 0;
    position: relative;
    align-self: center;
    min-width: 220px;
  }
`;

export const BlockSaleArrowPrev = styled(Arrow)`
  position: absolute;
  bottom: 3px;
  left: -49.7957px;
  @media (max-width: 499px) {
    left: -42.1769px;
  }
`;

export const BlockSaleLink = styled.div`
  flex-grow: 1;
  font-size: 15px;
  line-height: 22px;
  padding: 18px 0;
  a {
    color: ${(props) => `${props.theme.colors.subtitlecolor}`};
    transition: color 0.12s;
  }
  a:hover {
    color: inherit;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 16px 24px;
    min-width: 300px;
  }
  @media (max-width: 499px) {
    padding: 14px 20px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    padding: 13px 20px;
    min-width: 220px;
    font-size: 14px;
  }
`;

export const BlockSaleBody = styled.div`
  position: relative;
  padding-top: 104px;
  padding-bottom: 100px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-top: 96px;
    padding-bottom: 92px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    padding-top: 88px;
    padding-bottom: 84px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding-top: 80px;
    padding-bottom: 76px;
  }
  @media (max-width: 575.98px) {
    padding-top: 51px;
    padding-bottom: 28px;
  }
`;

export const BlockSaleImage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(38, 38, 38, 0.8);
  }
`;

export const BlockSaleLoader = styled.div`
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      position: relative;
    `}
`;

export const BlockSaleHeaderDecor = styled.div`
  position: absolute;
  width: 100%;
  bottom: 1px;
  left: 0;
  z-index: -1;
`;

export const BlockSaleBodyDecor = styled.div`
  bottom: -1px;
`;

export const BlockSaleItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: stretch;
  width: 100%;
`;

const ArrowPrev = css`
  direction: ltr;
  left: -49.7957px;
`;

const ArrowNext = css`
  direction: ltr;
  right: -49.7957px;
`;

export const BlockSaleArrow = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 3px;
  ${(props: { prev?: any; next?: any }) => {
    if (props.prev) {
      return ArrowPrev;
    }
    return ArrowNext;
  }}
`;

export const BlockSaleCarousel = styled.div`
  .slick-track {
    display: flex;
    align-items: stretch;
  }
  .slick-list {
    margin: 10px calc(24px / 2 * -1);
    padding: 10px 0;
  }
  .slick-slide {
    padding: 0 calc(12px);
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

  .slick-dots {
    width: auto;
    position: static;
    padding: 0;
    font-size: 0;
    list-style: none;
    margin: 28px 0 -18px;
    text-align: center;

    li {
      display: inline-block;
      padding: 6px;
    }

    button {
      width: 10px;
      height: 10px;
      padding: 0;
      border: none;
      border-radius: 5px;
      background: rgba(#fff, 0.3);
      &:focus {
        outline: none;
      }
      &:hover {
        background: rgba(#fff, 0.5);
      }
    }
    .slick-active button {
      background: #1e74df;
    }
  }

  .owl-dots {
    margin-top: 28px;
    display: flex;
    justify-content: center;
    margin-bottom: (-10px - 28px);
  }
  .owl-carousel .owl-dot {
    &:before {
      display: block;
      content: '';
      width: 10px;
      height: 10px;
      border-radius: (10px / 2);
      background: rgba(#fff, 0.3);
      transition: background 0.12s;
      margin: 6px;
    }
    &:focus {
      outline: none;
    }
    &:hover:before {
      background: rgba(#fff, 0.5);
    }
    &:active:before {
      background: rgba(#fff, 0.7);
    }
    &.active:before {
      background: #1e74df;
    }
  }
`;
