import styled from 'styled-components';
import ProductGallery from '~/components/shop/ProductGallery';
import ProductForm from '~/components/shop/ProductForm';
import ProductTabs from '~/components/shop/ProductTabs';

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
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
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

export const ProductActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  padding: 0 28px 24px;
  margin-top: -20px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: -12px;
    margin-bottom: -6px;
  }
`;

export const ProductFormForm = styled(ProductForm)`
  background: ${(props) => `${props.theme.colors.formbgcolor}`};
  margin-bottom: 24px;
  margin-top: -4px;
  padding: 16px 28px 18px;
  border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  display: block;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    background: transparent;
    border: none;
    margin-bottom: 16px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ProdcutInfoCard = styled.form`
  position: relative;
  width: 100%;
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    position: static;
    margin-top: 16px;
    padding-top: 24px;
    padding-bottom: 28px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 0;
    padding-top: 0;
  }
`;

export const ProductInfo = styled.div`
  grid-column: 3;
  grid-row: 1 / 5;
  margin-left: 30px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 3;
    grid-row: 1/4;
    display: flex;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    grid-column: 2;
    grid-row: 3;
    margin-left: 16px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    grid-column: 1;
    grid-row: 4;
    width: 100%;
    margin-left: 0;
  }
`;

export const ProductTabsTabs = styled(ProductTabs)`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  grid-column: 1/3;
  grid-row: 4;
  margin-top: 30px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1/4;
    grid-row: 4;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    grid-column: 1;
    grid-row: 5;
  }
`;

export const ProductBody = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 370px;
  grid-template-rows: max-content auto auto 1fr;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    grid-template-columns: auto 1fr 336px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-template-columns: auto 1fr 336px;
    grid-template-rows: max-content auto auto 1fr;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: max-content auto auto 1fr;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    width: 100%;
  }
`;
