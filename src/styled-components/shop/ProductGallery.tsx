import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';
import AppImage from '~/components/shared/AppImage';

export const ProductProductGallery = styled.div`
  grid-column: 1;
  grid-row: 1/4;
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
    grid-column: 1/3;
    grid-row: 3;
    padding-top: 0;
    max-width: 360px;
    width: 100%;
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding-left: 24px;
    padding-right: 24px;
    grid-column: 1;
    grid-row: 3;
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    background-color: ${(props) => `${props.theme.colors.white}`};
    box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
    max-width: 360px;
    width: 100%;
    grid-column: 1;
    grid-row: 2;
  }
`;

export const ProductGalleryFeatured = styled.div`
  position: relative;
`;

export const ProductGalleryZoom = styled.button`
  top: 0;
  position: absolute;
  padding: 9px;
  margin: 0;
  border: none;
  border-radius: 21px;
  fill: currentColor;
  z-index: 2;
  transition: background 0.15s, color 0.15s;
  background-color: ${(props) => `${props.theme.colors.white}`};
  color: ${(props) => `${props.theme.colors.plusiconcolor}`};
  right: 0;
  top: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    display: block;
  }
  &:hover {
    background-color: ${(props) =>
      `${props.theme.colors.widgetsearchbuttonactivebgcolor}`};
  }
`;

export const ImageTypeProduct = styled.div`
  width: 320px;
  max-width: 100%;
`;

export const ImageBody = styled(AppLink)`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;
export const ImageBody2 = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const ImageTag = styled(AppImage)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const ProductGalleryThumbnailsItem = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border: none;
  overflow: hidden;
  border-radius: 1.5px;
  padding: 2px;
  cursor: pointer;
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    width: 100%;
    height: 100%;
    transition: box-shadow 0.12s;
    left: 0;
    ${(props: { active?: any }) =>
      props.active &&
      css`
        cursor: default;
        box-shadow: 0 0 0 2px ${(props) => `${props.theme.colors.primary}`}
          inset;
      `}
  }
  &:hover {
    box-shadow: 0 0 0 2px ${(props) => `${props.theme.colors.itemhover}`} inset;
  }
  &:focus {
    outline: none;
  }
`;