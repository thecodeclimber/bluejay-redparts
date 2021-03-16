import styled from 'styled-components';
import AppLink from '~/components/shared/AppLink';
import AppImage from '~/components/shared/AppImage';

export const BlockBlockBanners = styled.div``;

export const BlockBannersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    margin: -10px;
  }
`;

export const BlockBannersItemImage = styled.span`
  border-radius: 3px;
  z-index: -3;
  position: absolute;
  content: '';
  display: block;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  left: -10px;
  top: -10px;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BlockBannersItemImageBlur = styled(BlockBannersItemImage)`
  z-index: -2;
  opacity: 0;
  img {
    filter: blur(3px);
  }
`;

const BlockBannerItem = styled(AppLink)`
  margin: 15px;
  width: calc(50% - 30px);
  height: 210px;
  padding: 32px 34px;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  z-index: 0;
  color: ${(props) => `${props.theme.colors.white}`};
  &:hover {
    color: ${(props) => `${props.theme.colors.white}`};
  }
  &:before {
    border-radius: 3px;
    z-index: -1;
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${(props) =>
      `${props.theme.background.blockbanneritemlineargradient}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    height: 190px;
    padding: 24px 24px;
    margin: 10px;
    width: calc(50% - 20px);
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    height: auto;
    padding: 24px 24px;
    margin: 10px;
    width: calc(100% - 20px);
  }
  @media (max-width: 474px) {
    &:before {
      background: ${(props) =>
        `${props.theme.background.blockbanneritemmobilelineargradient}`};
    }
  }
  &:hover {
    ${BlockBannersItemImage} {
      transform: scale(1.03);
    }
    ${BlockBannersItemImageBlur} {
      opacity: 1;
    }
  }
`;

export const BlockBannerItemStyleOne = styled(BlockBannerItem)``;

export const BlockBannerItemStyleTwo = styled(BlockBannerItem)``;

export const BlockBannerItemTitle = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  color: ${(props) => `${props.theme.colors.OfferBg}`};
`;

export const BlockBannerItemTitleTwo = styled.span`
  background: ${(props) => `${props.theme.colors.OfferBg}`};
  display: inline-block;
  vertical-align: middle;
  padding: 2px 5px;
  border-radius: 1.5px;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  font-size: 24px;
  margin-top: -2px;
  margin-bottom: 2px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const BlockBannersItemDetails = styled.span`
  display: block;
  margin-top: 12px;
  font-size: 15px;
`;

export const BlockBannersItemButton = styled.span`
  margin-top: 28px;
`;

export const ReflectRtl = styled(AppImage)`
  transform: scaleX(1);
`;
