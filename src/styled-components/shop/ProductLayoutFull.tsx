import styled from 'styled-components';
import ProductGallery from '~/components/shop/ProductGallery';

export const ProductCardOne = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  grid-column: 1 / 3;
  grid-row: 1 / 4;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1/3;
    grid-row: 1/4;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: none;
  }
`;

export const ProductCardTwo = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  display: none;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1/3;
    grid-row: 1/4;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    grid-column: 1;
    grid-row: 3 / 5;
    display: block;
    margin-top: 30px;
  }
`;

export const ProductsGallery = styled(ProductGallery)`
  grid-column: 1;
  grid-row: 1 / 4;
  padding-top: 36px;
  padding-bottom: 48px;
  width: 440px;
  padding-left: 40px;
  padding-right: 0;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-top: 24px;
    padding-bottom: 36px;
    width: 348px;
    padding-left: 28px;
    padding-right: 0;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1 / 3;
    grid-row: 3;
    padding-top: 0;
    width: 100%;
    max-width: 380px;
    padding-right: 28px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 385px;
    padding-top: 24px;
    padding-bottom: 28px;
    margin-top: 16px;
    padding-left: 24px;
    padding-right: 24px;
    grid-column: 1;
    grid-row: 3;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
    width: 100%;
    max-width: 360px;
    grid-column: 1;
    grid-row: 2;
  }
`;

export const ProductHeader = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding-top: 36px;
  padding-bottom: 16px;
  padding-left: 36px;
  padding-right: 40px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-top: 24px;
    padding-bottom: 16px;
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    padding-bottom: 10px;
    grid-column: 1/3;
    grid-row: 1;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding-left: 24px;
    padding-right: 24px;
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
    padding-top: 24px;
    padding-bottom: 22px;
    grid-column: 1;
    grid-row: 1;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    padding-right: 80px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const ProductSubTitle = styled.div`
  display: flex;
  padding-top: 8px;
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding-top: 8px;
  }
  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductMain = styled.div`
  grid-column: 2;
  grid-row: 2;
  padding-top: 0;
  padding-bottom: 48px;
  padding-left: 36px;
  padding-right: 40px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-top: 0;
    padding-bottom: 36px;
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1 / 3;
    grid-row: 2;
    padding-bottom: 16px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    grid-column: 1 / 3;
    grid-row: 2;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    grid-column: 1;
    grid-row: 3;
    padding-top: 24px;
    padding-bottom: 18px;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 30px;
  }
`;

export const ProductExcert = styled.div`
  font-size: 15px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    padding-bottom: 14px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    border: none;
    padding-bottom: 8px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding-bottom: 0;
  }
`;

export const ProductFeatures = styled.div`
  margin: 20px 0 0;
  font-size: 14px;
  border-radius: 3px;
  ul {
    list-style: none;
    padding: 0;
    color: ${(props) => `${props.theme.colors.subtitilecolor}`};
    margin: -6px;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    padding-top: 3px;
    padding-bottom: 2px;
    position: relative;
    margin: 0 6px;
    width: calc(100% / 1 - 12px);
    padding-left: 11px;
    padding-right: 0;
    &:before {
      position: absolute;
      display: block;
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 1.5px;
      background: currentColor;
      top: 12px;
      opacity: 0.85;
      left: 0;
    }
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    display: none;
  }
`;

export const ProductFeaturesTitle = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  padding-bottom: 12px;
`;

export const ProductFeaturesLink = styled.div`
  margin: 20px -2px 0;
  padding: 20px 2px 0;
  font-size: 14px;
  border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  a:hover {
    text-decoration: underline;
  }
`;