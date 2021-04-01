import styled from 'styled-components';

export const ShopFeatures = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  margin-top: 30px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px){
    display: none;
  }
`;

export const ShopFeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
  padding: 14px 0;
`;

export const ShopFeaturesItem = styled.li`
  padding: 10px 28px;
  display: flex;
  align-items: center;
  width: calc((100% - 0px) / 1);
`;

export const ShopFeaturesItemIcon = styled.div`
  color: ${(props) => `${props.theme.colors.primary}`};
  margin-right: 18px;
  svg {
    width: 38px;
    height: 38px;
    fill: currentColor;
    vertical-align: middle;
  }
`;

export const ShopFeaturesInfo = styled.div``;

export const ShopFeaturesItemTitle = styled.div`
  font-size: 14px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;

export const ShopFeaturesItemSubTitle = styled.div`
  font-size: 14px;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  margin-top: -2px;
`;

export const ShopFeaturesDivider = styled.li`
  height: 1px;
  &:nth-child(2n) {
    width: 100%;
    height: 1px;
  }
  &:nth-child(2n):last-child {
    display: none;
  }
`;