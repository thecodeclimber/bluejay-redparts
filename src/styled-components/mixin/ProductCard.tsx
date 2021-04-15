import styled, { css } from 'styled-components';
import Rating from '~/components/shared/Rating';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';

//info

export const ProductCardStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
`;

export const ProductCardMetaTitle = styled.span``;

export const ProductCardMeta = styled.div`
  font-size: 12px;
  line-height: 1;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  padding: 6px 16px;
`;

export const ProductCardbadges = styled.div`
  position: absolute;
  top: 16px;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  left: 16px;
`;

export const TagBadge = styled.div`
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  z-index: 0;
  height: 18px;
  padding: 4px 14px 0;
  color: ${(props) => `${props.theme.colors.white}`};
  & + & {
    margin-top: 3px;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 2.5px;
    transform-origin: center;
    left: 3.5px;
    right: 3.5px;
    transform: skewX(-20deg);
    ${(props: { badge?: any }) => {
      if (props.badge === 'hot') {
        return css`
          background: ${(props) => `${props.theme.colors.badgehotcolor}`};
        `;
      } else if (props.badge === 'new') {
        return css`
          background: ${(props) => `${props.theme.colors.badgenewcolor}`};
        `;
      } else if (props.badge === 'sale') {
        return css`
          background: ${(props) => `${props.theme.colors.badgesalecolor}`};
        `;
      }
    }}
  }
`;

export const ProductCardRatingLabel = styled.div`
  margin: 3px 0 2px 0;
  line-height: 1;
`;

export const ProductCardRatingStars = styled(Rating)`
  margin-top: 3px;
  margin-bottom: 2px;
  margin-left: 0px;
  margin-right: 7px;
  line-height: 1;
`;

export const ProductCardFeatures = styled.div`
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  font-size: 13px;
  line-height: 21px;
  padding: 10px 16px 0;
  margin-bottom: -2px;
  display: none;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding-left: 12px;
    &:before {
      display: block;
      position: absolute;
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 1.5px;
      background: currentColor;
      top: 9px;
      opacity: 0.7;
      left: 3px;
    }
  }
`;

export const ProductCardPriceOld = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  text-decoration: line-through;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin-left: 6px;
  font-size: 14px;
`;

export const ProductCardPriceNew = styled.div`
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
`;

export const CurrentCardProductPrice = styled.div``;

export const ImageTag = styled(AppImage)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const ImageBody = styled(AppLink)`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const ImageTypeProduct = styled.div``;

export const ProductCardAddToCartIcon = styled.button`
  position: relative;
  border: none;

  border-radius: 2px;
  background: transparent;
  fill: ${(props) => `${props.theme.colors.plusiconcolor}`};
  z-index: 0;
  transition: color 0.2s;
  margin: -3px;
  width: 36px;
  height: 36px;
  align-self: center;
  &:focus {
    outline: none;
  }
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      cursor: default;
      &:after {
        left: calc(50% - 11px);
        top: calc(50% - 11px);
        width: 22px;
        height: 22px;
        border-radius: 11px;
        border-width: 2px;
        border-color: ${(props) => `${props.theme.colors.loaderbordercolor}`};
        border-top-color: ${(props) =>
          `${props.theme.colors.loaderbordertopcolor}`};
        border-style: solid;
        animation-name: loader-animation;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        position: absolute;
        display: block;
        content: '';
      }
      svg {
        display: block;
        fill: currentColor;
        opacity: 0.3;
      }
    `}
  svg {
    display: block;
    fill: currentColor;
  }
  &:before {
    top: -2px;
    left: -2px;
    display: block;
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: transparent;
    z-index: -1;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s, background 0.2s;
  }
`;

export const ProductCardAction = styled.button`
  position: relative;
  display: block;
  padding: 8px;
  margin: 0;
  border: none;
  transition: color 0.08s, background 0.08s;
  background-color: ${(props) => `${props.theme.colors.white}`};
  color: ${(props) => `${props.theme.colors.plusiconcolor}`};
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      &,
      &:hover {
        cursor: default;
        background: transparent;
        color: transparent;
        transition-duration: 0s;
      }
      svg {
        opacity: 0;
      }
      &:before {
        left: calc(50% - 8px);
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
        border-radius: 8px;
        border-width: 2px;
        border-color: ${(props) => `${props.theme.colors.borderleftcolor}`};
        border-top-color: ${(props) =>
          `${props.theme.colors.loaderborderactiontopcolor}`};
        border-style: solid;
        animation-name: loader-animation;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        position: absolute;
        display: block;
        content: '';
      }
    `}
  &:first-child {
    border-top-right-radius: 2.5px;
  }
  &:last-child {
    border-bottom-left-radius: 2px;
  }
  svg {
    fill: currentColor;
    display: block;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transition-duration: 0s;
    background-color: ${(props) => `${props.theme.colors.bordercolor}`};
    color: ${(props) => `${props.theme.colors.selectarrowcolor}`};
  }
  &:hover {
    background-color: ${(props) => `${props.theme.colors.tagBgColor}`};
    color: ${(props) => `${props.theme.colors.selectarrowcolor}`};
  }
`;

export const ProductCardActionQuickView = styled(ProductCardAction)``;

export const ProductCardActionWishList = styled(ProductCardAction)`
  transition: transform 0.2s, opacity 0.2s, color 0.12s, background 0.12s;
  opacity: 0;
  will-change: transform;
  transform: translateX(100%) translateX(6px);
`;

export const ProductCardActionCompare = styled(ProductCardActionWishList)``;

export const ProductCardActionsList = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  right: 0;
`;

export const ProductCardLayout = styled.div`
  &:hover,
  &:active {
    ${ProductCardAddToCartIcon} {
      fill: ${(props) => `${props.theme.colors.white}`};
      &:before {
        transform: scale(1);
        background: ${(props) => `${props.theme.colors.primary}`};
      }
      &:hover {
        fill: ${(props) => `${props.theme.colors.white}`};
        &:before {
          background: ${(props) =>
            `${props.theme.colors.widgetnewsletterbgcolor}`};
        }
      }
      &:active {
        fill: ${(props) => `${props.theme.colors.white}`};
        &:before {
          transition-duration: 0.05s;
          background: ${(props) => `${props.theme.colors.selectarrowcolor}`};
        }
      }
    }
    ${ProductCardActionWishList} {
      transform: none;
      opacity: 1;
    }
  }
`;

export const ProductCardAddToCartFull = styled.button`
  display: none;
  position: relative;
  background: ${(props) => `${props.theme.colors.primary}`};
  color: ${(props) => `${props.theme.colors.white}`};
  border: none;
  border-radius: 2px;
  font-weight: 500;
  transition: background-color 0.15s, color 0.15s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(props) => `${props.theme.colors.dark}`};
    color: ${(props) => `${props.theme.colors.white}`};
  }
  &:active {
    background: ${(props) => `${props.theme.colors.selectarrowcolor}`};
    color: ${(props) => `${props.theme.colors.white}`};
  }
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      background: ${(props) => `${props.theme.colors.primary}`};
      color: transparent;
      cursor: default;
      &:after {
        left: calc(50% - 11px);
        top: calc(50% - 11px);
        width: 22px;
        height: 22px;
        border-radius: 11px;
        border-width: 2px;
        border-color: ${(props) =>
          `${props.theme.colors.loaderbordertopcolor}`};
        border-top-color: ${(props) =>
          `${props.theme.colors.loaderborderactiontopcolor}`};
        border-style: solid;
        animation-name: loader-animation;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        position: absolute;
        display: block;
        content: '';
      }
    `}
`;

export const ProductCardWishList = styled.button`
  display: none;
  position: relative;
  border: none;
  background: transparent;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  fill: ${(props) => `${props.theme.colors.tagBgActiveColor}`};
  border-radius: 2px;
  transition: background 0.15s, fill 0.15s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(props) => `${props.theme.colors.widgetchildbgcolor}`};
    fill: ${(props) => `${props.theme.colors.widgetsearchbuttoncolor}`};
  }
  &:active {
    background: ${(props) => `${props.theme.colors.switcherbgcolor}`};
    fill: ${(props) => `${props.theme.colors.blockBrandsItemName}`};
  }
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      background: ${(props) => `${props.theme.colors.primary}`};
      fill: transparent;
      cursor: default;
      &:after {
        left: calc(50% - 11px);
        top: calc(50% - 11px);
        width: 22px;
        height: 22px;
        border-radius: 11px;
        border-width: 2px;
        border-color: ${(props) =>
          `${props.theme.colors.loaderbordertopcolor}`};
        border-top-color: ${(props) =>
          `${props.theme.colors.loaderborderactiontopcolor}`};
        border-style: solid;
        animation-name: loader-animation;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        position: absolute;
        display: block;
        content: '';
      }
    `}
`;

export const ProductCardCompare = styled(ProductCardWishList)``;
