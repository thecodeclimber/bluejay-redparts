import styled, { css } from 'styled-components';
import Rating from '~/components/shared/Rating';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';

//info

export const ProductCardStyledComponent = styled.div`
  width: 100%;
  margin-top: 20px;
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: #fff;
        box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
        &:after {
          display: block;
          position: static;
          content: '';
          order: 1;
          flex-grow: 1;
        }
      `;
    } else if (props.layout === 'table') {
      return css`
        background: transparent;
        box-shadow: none;
        display: flex;
        align-items: center;
        @media (min-width: 576px) {
          padding-left: 16px;
          padding-right: 0;
        }
        @media (max-width: 575.98px) {
          background-color: #fff;
          box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
          flex-wrap: wrap;
          align-items: stretch;
          padding-top: 0;
          padding-bottom: 0;
        }
      `;
    } else if (props.layout === 'list') {
      return css`
        display: flex;
        position: relative;
        background-color: #fff;
        box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
        @media (max-width: 767.98px) {
          flex-direction: column;
        }
      `;
    }
  }};
`;

export const ProductCardActionsList = styled.div`
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        direction: ltr;
        right: 0;
        position: absolute;
        overflow: hidden;
        z-index: 1;
      `;
    } else if (props.layout === 'table') {
      return css`
        direction: ltr;
        right: 0;
        position: absolute;
        overflow: hidden;
        z-index: 1;
      `;
    } else if (props.layout === 'list') {
      return css`
        @media (min-width: 576px);
         {
          padding: 0;
          display: none;
        }
      `;
    }
  }}
`;

export const ProductCardImage = styled.div`
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        display: block;
        position: relative;
      `;
    } else if (props.layout === 'table') {
      return css`
        direction: ltr;
        right: 0;
        position: absolute;
        overflow: hidden;
        z-index: 1;
      `;
    } else if (props.layout === 'list') {
      return css`
        @media (min-width: 768px);
         {
          padding: 16px 24px;
          width: 260px;
          flex-shrink: 0;
          display: block;
        }
        @media (min-width: 768px) and (max-width: 1199.98px) {
          width: 192px;
          padding-left: 16px;
          padding-right: 16px;
        }
        @media (max-width: 767.98px) {
          padding: 20px;
          width: 100%;
          display: flex;
          position: relative;
        }
      `;
    }
  }}
`;

export const ProductCardMeta = styled.div`
  font-size: 12px;
  line-height: 1;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  padding: 6px 16px;
`;

export const ProductCardName = styled.div`
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        padding: 0 16px;
        line-height: 1.1875;
      `;
    } else if (props.layout === 'table') {
      return css`
        @media (min-width: 1200px) {
          direction: ltr;
          border-left: 1px solid #ebebeb;
          padding: 0 18px;
        }
        @media (min-width: 576px) {
          flex-grow: 1;
          display: flex;
          align-items: center;
          font-size: 15px;
          line-height: 18px;
        }
        @media (min-width: 576px) and (max-width: 1199.98px) {
          padding: 0;
        }
        @media (max-width: 575.98px) {
          line-height: 20px;
          margin-top: 6px;
        }
      `;
    } else if (props.layout === 'list') {
      return css``;
    }
  }}
  a {
    color: inherit;
  }
  a:hover {
    text-decoration: none;
  }
`;

export const ProductCardRating = styled.div`
  color: #6c757d;
  font-size: 0.8125rem;
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        margin: -3px 0 -2px 0;
        padding: 8px 16px 0;
        display: flex;
        flex-wrap: wrap;
      `;
    } else if (props.layout === 'table') {
      return css``;
    } else if (props.layout === 'list') {
      return css``;
    }
  }}
`;

export const ProductCardRatingLabel = styled.div`
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        line-height: 1;
        margin: 3px 0 2px 0;
      `;
    } else if (props.layout === 'table') {
      return css`
        @media (min-width: 576px) {
          margin-top: 3px;
        }
        @media (min-width: 576px) and (max-width: 1199.98px) {
          line-height: 1;
          margin: 3px 0 2px 0;
        }
        @media (max-width: 575.98px) {
          line-height: 1;
        }
      `;
    } else if (props.layout === 'list') {
      return css``;
    }
  }}
`;

export const ProductCardFeatures = styled.div`
  color: #6c757d;
  font-size: 13px;
  line-height: 21px;
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        padding: 10px 16px 0;
        margin-bottom: -2px;
        display: none;
      `;
    } else if (props.layout === 'grid-with-features') {
      return css`
        padding: 10px 16px 0;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          position: relative;
          direction: ltr;
          padding-left: 12px;

          &:before {
            direction: ltr;
            inset-inline-start: 3px;
            display: block;
            position: absolute;
            content: '';
            width: 3px;
            height: 3px;
            border-radius: 1.5px;
            background: currentColor;
            top: 9px;
            opacity: 0.7;
          }
        }
      `;
    } else if (props.layout === 'table') {
      return css`
        display: none;
      `;
    } else if (props.layout === 'list') {
      return css``;
    }
  }}
`;

export const ProductCardFooter = styled.div`
  ${(props: { layout?: any }) => {
    if (props.layout === 'grid') {
      return css`
        padding: 16px;
        align-items: center;
        display: flex;
        order: 2;
      `;
    } else if (props.layout === 'table') {
      return css`
        @media (min-width: 576px) {
          border-left: 1px solid #ebebeb;
          padding-left: 16px;
          display: flex;
          align-items: center;
          align-self: stretch;
          flex-shrink: 0;
          margin: 16px 0;
        }
        @media (max-width: 575.98px) {
          display: flex;
          flex-grow: 1;
          flex-shrink: 0;
        }
      `;
    } else if (props.layout === 'list') {
      return css``;
    }
  }}
`;

export const ProductCardPrices = styled.div`
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
  color: #262626;
  ${(props: { layout?: any; price?: any }) => {
    if (props.price === 'new') {
      return css`
        color: #262626;
      `;
    }
    if (props.price === 'old') {
      return css`
        font-weight: 400;
        text-decoration: line-through;
        color: #999;
        @media (min-width: 576px) {
          margin-left: 0;
          margin-top: 4px;
          font-size: 14px;
        }
        @media (max-width: 575.98px) {
          font-size: 14px;
          margin-top: 4px;
        }
      `;
    }
    if (props.price === 'current') {
      return css``;
    }
    if (props.layout === 'grid') {
      return css`
        flex-grow: 1;
        font-size: 18px;
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
      `;
    } else if (props.layout === 'table') {
      return css`
        @media (min-width: 576px) {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          flex-grow: 1;
          flex-shrink: 0;
          justify-content: center;
          align-self: stretch;
          align-items: flex-end;
          width: 120px;
          font-size: 15px;
          border-right: 1px solid #ebebeb;
          padding-right: 16px;
        }
        @media (min-width: 576px) and (max-width: 767.98px) {
          width: 90px;
        }
        @media (max-width: 575.98px) {
          border-left: 1px solid #ebebeb;
          border-right: 1px solid #ebebeb;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-grow: 1;
          padding: 12px 14px;
          height: 100%;
        }
      `;
    } else if (props.layout === 'list') {
      return css``;
    }
  }}
`;

export const ProductCardAction = styled.div`
  position: relative;
  display: block;
  padding: 8px;
  margin: 0;
  border: none;
  transition: color 0.08s, background 0.08s;
  background-color: #fff;
  color: #ccc;

  svg {
    fill: currentColor;
    display: block;
    overflow: hidden;
    vertical-align: middle;
  }
  &:hover {
    background-color: #f2f2f2;
    color: #4d4d4d;
  }
`;

// export const ProductCardAddtocartIcon = styled.div`
//   position: relative;
//   border: none;
//   padding: 8px;
//   border-radius: 2px;
//   background: transparent;
//   color: #ccc;
//   z-index: 0;
//   transition: color 0.2s;
//   ${(props: { layout?: any }) => {
//     if (props.layout === 'grid') {
//       return css`
//         margin: -3px;
//       `;
//     } else if (props.layout === 'table') {
//       return css`
//         @media (min-width: 576px);
//          {
//           margin: 0 16px;
//         }
//       `;
//     } else if (props.layout === 'list') {
//       return css``;
//     }
//   }}
//   &:before {
//     top: -2px;
//     left: -2px;
//     display: block;
//     content: '';
//     position: absolute;
//     width: calc(100% + 4px);
//     height: calc(100% + 4px);
//     background: transparent;
//     z-index: -1;
//     border-radius: 50%;
//     transform: scale(0);
//     transition: transform 0.2s, background 0.2s;
//   }
// `;

export const ProductCardAddtocartIcon = styled.button`
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

export const ProductCardLayout = styled.div`
  &:hover,
  &:active {
    ${ProductCardAddtocartIcon} {
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
  }
`;

export const ProductCardAddtocartFull = styled.div`
  position: relative;
  background: #1e74df;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-weight: 500;
  transition: background-color 0.15s, color 0.15s;
`;

// export const ProductCardbadges = styled.div`
//   position: absolute;
//   top: 16px;
//   display: flex;
//   z-index: 1;
//   flex-direction: column;
//   align-items: flex-start;
//   left: 16px;
// `;

// export const TagBadge = styled.div`
//   display: inline-block;
//   position: relative;
//   text-transform: uppercase;
//   font-size: 11px;
//   font-weight: 500;
//   line-height: 1;
//   z-index: 0;
//   height: 18px;
//   padding: 4px 14px 0;
//   color: ${(props) => `${props.theme.colors.white}`};
//   & + & {
//     margin-top: 3px;
//   }
//   &:before {
//     content: '';
//     display: block;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     z-index: -1;
//     border-radius: 2.5px;
//     transform-origin: center;
//     left: 3.5px;
//     right: 3.5px;
//     transform: skewX(-20deg);
//     ${(props: { badge?: any }) => {
//       if (props.badge === 'hot') {
//         return css`
//           background: ${(props) => `${props.theme.colors.badgehotcolor}`};
//         `;
//       } else if (props.badge === 'new') {
//         return css`
//           background: ${(props) => `${props.theme.colors.badgenewcolor}`};
//         `;
//       } else if (props.badge === 'sale') {
//         return css`
//           background: ${(props) => `${props.theme.colors.badgesalecolor}`};
//         `;
//       }
//     }}
//   }
// `;

// export const ProductCardRatingLabel = styled.div`
//   margin: 3px 0 2px 0;
//   line-height: 1;
// `;

// export const ProductCardRatingStars = styled(Rating)`
//   margin-top: 3px;
//   margin-bottom: 2px;
//   margin-left: 0px;
//   margin-right: 7px;
//   line-height: 1;
// `;

// export const ProductCardFeatures = styled.div`
//   color: ${(props) => `${props.theme.colors.subtitilecolor}`};
//   font-size: 13px;
//   line-height: 21px;
//   padding: 10px 16px 0;
//   margin-bottom: -2px;
//   display: none;
//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }
//   li {
//     padding-left: 12px;
//     &:before {
//       display: block;
//       position: absolute;
//       content: '';
//       width: 3px;
//       height: 3px;
//       border-radius: 1.5px;
//       background: currentColor;
//       top: 9px;
//       opacity: 0.7;
//       left: 3px;
//     }
//   }
// `;

// export const ProductCardPriceOld = styled.div`
//   font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
//   text-decoration: line-through;
//   color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
//   margin-left: 6px;
//   font-size: 14px;
// `;

// export const ProductCardPriceNew = styled.div`
//   color: ${(props) => `${props.theme.colors.selectfontcolor}`};
// `;

// export const CurrentCardProductPrice = styled.div``;

// export const ImageTag = styled(AppImage)`
//   display: block;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: scale-down;
// `;

// export const ImageTypeProduct = styled.div``;

// export const ProductCardAddToCartIcon = styled.button`
//   position: relative;
//   border: none;

//   border-radius: 2px;
//   background: transparent;
//   fill: ${(props) => `${props.theme.colors.plusiconcolor}`};
//   z-index: 0;
//   transition: color 0.2s;
//   margin: -3px;
//   width: 36px;
//   height: 36px;
//   align-self: center;
//   &:focus {
//     outline: none;
//   }
//   ${(props: { loading?: any }) =>
//     props.loading &&
//     css`
//       cursor: default;
//       &:after {
//         left: calc(50% - 11px);
//         top: calc(50% - 11px);
//         width: 22px;
//         height: 22px;
//         border-radius: 11px;
//         border-width: 2px;
//         border-color: ${(props) => `${props.theme.colors.loaderbordercolor}`};
//         border-top-color: ${(props) =>
//           `${props.theme.colors.loaderbordertopcolor}`};
//         border-style: solid;
//         animation-name: loader-animation;
//         animation-duration: 0.5s;
//         animation-timing-function: linear;
//         animation-iteration-count: infinite;
//         position: absolute;
//         display: block;
//         content: '';
//       }
//       svg {
//         display: block;
//         fill: currentColor;
//         opacity: 0.3;
//       }
//     `}
//   svg {
//     display: block;
//     fill: currentColor;
//   }
//   &:before {
//     top: -2px;
//     left: -2px;
//     display: block;
//     content: '';
//     position: absolute;
//     width: calc(100% + 4px);
//     height: calc(100% + 4px);
//     background: transparent;
//     z-index: -1;
//     border-radius: 50%;
//     transform: scale(0);
//     transition: transform 0.2s, background 0.2s;
//   }
// `;

// export const ProductCardActionQuickView = styled(ProductCardAction)``;

// export const ProductCardActionWishList = styled(ProductCardAction)`
//   transition: transform 0.2s, opacity 0.2s, color 0.12s, background 0.12s;
//   opacity: 0;
//   will-change: transform;
//   transform: translateX(100%) translateX(6px);
// `;

// export const ProductCardActionCompare = styled(ProductCardActionWishList)``;

// export const ProductCardLayout = styled.div`
//   &:hover,
//   &:active {
//     ${ProductCardAddToCartIcon} {
//       fill: ${(props) => `${props.theme.colors.white}`};
//       &:before {
//         transform: scale(1);
//         background: ${(props) => `${props.theme.colors.primary}`};
//       }
//       &:hover {
//         fill: ${(props) => `${props.theme.colors.white}`};
//         &:before {
//           background: ${(props) =>
//             `${props.theme.colors.widgetnewsletterbgcolor}`};
//         }
//       }
//       &:active {
//         fill: ${(props) => `${props.theme.colors.white}`};
//         &:before {
//           transition-duration: 0.05s;
//           background: ${(props) => `${props.theme.colors.selectarrowcolor}`};
//         }
//       }
//     }
//   }
// `;

// export const ProductCardAddToCartFull = styled.button`
//   display: none;
//   position: relative;
//   background: ${(props) => `${props.theme.colors.primary}`};
//   color: ${(props) => `${props.theme.colors.white}`};
//   border: none;
//   border-radius: 2px;
//   font-weight: 500;
//   transition: background-color 0.15s, color 0.15s;
//   &:focus {
//     outline: none;
//   }
//   &:hover {
//     background: ${(props) => `${props.theme.colors.dark}`};
//     color: ${(props) => `${props.theme.colors.white}`};
//   }
//   &:active {
//     background: ${(props) => `${props.theme.colors.selectarrowcolor}`};
//     color: ${(props) => `${props.theme.colors.white}`};
//   }
//   ${(props: { loading?: any }) =>
//     props.loading &&
//     css`
//       background: ${(props) => `${props.theme.colors.primary}`};
//       color: transparent;
//       cursor: default;
//       &:after {
//         left: calc(50% - 11px);
//         top: calc(50% - 11px);
//         width: 22px;
//         height: 22px;
//         border-radius: 11px;
//         border-width: 2px;
//         border-color: ${(props) =>
//           `${props.theme.colors.loaderbordertopcolor}`};
//         border-top-color: ${(props) =>
//           `${props.theme.colors.loaderborderactiontopcolor}`};
//         border-style: solid;
//         animation-name: loader-animation;
//         animation-duration: 0.5s;
//         animation-timing-function: linear;
//         animation-iteration-count: infinite;
//         position: absolute;
//         display: block;
//         content: '';
//       }
//     `}
// `;

// export const ProductCardWishList = styled.button`
//   display: none;
//   position: relative;
//   border: none;
//   background: transparent;
//   color: ${(props) => `${props.theme.colors.selectfontcolor}`};
//   fill: ${(props) => `${props.theme.colors.tagBgActiveColor}`};
//   border-radius: 2px;
//   transition: background 0.15s, fill 0.15s;
//   &:focus {
//     outline: none;
//   }
//   &:hover {
//     background: ${(props) => `${props.theme.colors.widgetchildbgcolor}`};
//     fill: ${(props) => `${props.theme.colors.widgetsearchbuttoncolor}`};
//   }
//   &:active {
//     background: ${(props) => `${props.theme.colors.switcherbgcolor}`};
//     fill: ${(props) => `${props.theme.colors.blockBrandsItemName}`};
//   }
//   ${(props: { loading?: any }) =>
//     props.loading &&
//     css`
//       background: ${(props) => `${props.theme.colors.primary}`};
//       fill: transparent;
//       cursor: default;
//       &:after {
//         left: calc(50% - 11px);
//         top: calc(50% - 11px);
//         width: 22px;
//         height: 22px;
//         border-radius: 11px;
//         border-width: 2px;
//         border-color: ${(props) =>
//           `${props.theme.colors.loaderbordertopcolor}`};
//         border-top-color: ${(props) =>
//           `${props.theme.colors.loaderborderactiontopcolor}`};
//         border-style: solid;
//         animation-name: loader-animation;
//         animation-duration: 0.5s;
//         animation-timing-function: linear;
//         animation-iteration-count: infinite;
//         position: absolute;
//         display: block;
//         content: '';
//       }
//     `}
// `;

// export const ProductCardCompare = styled(ProductCardWishList)``;
