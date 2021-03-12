import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const BlockSlideshowItem = styled(AppLink)`
  border-radius: 2.5px;
  overflow: hidden;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 84px 100px;
  position: relative;
  z-index: 0;

  &,
  &:hover {
    color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}px`}) {
    padding: 68px 80px;
    height: 460px;
  }
`;

const ReflectRtl = css`
  direction: ltr;
  transform: scaleX(1);
`;
export const BlockSlideshowItemImageDesktop = styled.span``;

export const BlockSlideshowItemImageMobile = styled.span`
  display: none;
  background-position: top center;
`;

export const BlockSlideshowItemImage = styled.span`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-size: cover;
  ${ReflectRtl}
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    ${BlockSlideshowItemImageDesktop} {
      display: none;
    }
    ${BlockSlideshowItemImageMobile} {
      display: block;
    }
  }
`;

export const BlockSlideshowItemOffer = styled.span`
  background: ${(props) => `${props.theme.colors.OfferBg}`};
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  align-self: flex-start;
  font-size: 36px;
  line-height: 40px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  padding: 2px 8px 0;
  margin-bottom: 12px;
  transition: transform 0.5s 0.5s, opacity 0.5s 0.5s;
  transform: translateX(0);
  opacity: 1;

  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}px`}) {
    font-size: 24px;
    line-height: 28px;
    padding: 1px 6px 1px;
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}px`}) {
    margin-bottom: 10px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    align-self: center;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}px`}) {
    font-size: 20px;
    line-height: 24px;
    padding: 1px 6px 1px;
    margin-bottom: 8px;
  }
`;

export const BlockSlideshowItemTitle = styled.span`
  font-size: 48px;
  line-height: 56px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  display: block;
  opacity: 1;
  transition: opacity 0.8s 0.2s;

  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}px`}) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    text-align: center;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}px`}) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const BlockSlideshowItemDetails = styled.span`
  color: ${(props) => `${props.theme.colors.ItemDetailsColor}`};
  font-size: 18px;
  line-height: 30px;
  display: block;
  margin-top: 16px;
  flex-grow: 1;
  transform: translateY(12px);
  opacity: 1;
  transition: transform 0.5s 0.5s, opacity 0.5s 0.5s;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}px`}) {
    margin-top: 12px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}px`}) {
    font-size: 16px;
    line-height: 26px;
    margin-top: 8px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    display: none;
  }
`;

export const BlockSlideshowItemButton = styled.span`
  margin-top: 24px;
  align-self: flex-start;
  font-size: 18px;
  line-height: 28px;
  padding: 10px 40px;
  border-radius: 2px;
  transition: background-color 0.2s, color 0.2s, opacity 0.5s 0.5s;
  background: ${(props) => `${props.theme.colors.primary}`};
  color: ${(props) => `${props.theme.colors.white}`};
  transform: translateX(0);
  opacity: 1;
  &:hover {
    background: ${(props) => `${props.theme.colors.widgetnewsletterbgcolor}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}px`}) {
    font-size: 16px;
    line-height: 24px;
    padding: 8px 28px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}px`}) {
    font-size: 15px;
    line-height: 24px;
    padding: 6px 24px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    align-self: center;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}px`}) {
    font-size: 14px;
    line-height: 21px;
    padding: 5.5px 20px;
    margin-top: 20px;
  }
`;
