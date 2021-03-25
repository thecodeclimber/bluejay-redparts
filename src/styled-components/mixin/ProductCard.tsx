import styled, { css } from 'styled-components';
import Rating from '~/components/shared/Rating';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';

//info
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