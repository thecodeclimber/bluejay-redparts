import styled, { css } from 'styled-components';

export const BlockBlockZone = styled.div``;

export const BlockZoneBody = styled.div`
  display: flex;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: block;
  }
`;

export const CategoryCardBody = styled.div`
  position: relative;
  flex-grow: 1;
  z-index: 0;
  overflow: hidden;
  border-radius: 2.5px;
  padding: 32px 20px 40px;
  &:before {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => `${props.theme.colors.cardbodybgcolor}`};
    background-image: linear-gradient(
      to top,
      rgba(26, 26, 26, 0.4) 20%,
      rgba(26, 26, 26, 0) 80%
    );
    z-index: -1;
    transition: background-color 0.2s;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 22px 28px 28px;
  }
`;

export const CategoryCardOverlayImage = styled.div`
  display: block;
  position: absolute;
  z-index: -3;
  left: -10px;
  right: -10px;
  top: -10px;
  bottom: -10px;
  transition: transform 0.3s ease-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CategoryCardOverlayImageBlue = styled(CategoryCardOverlayImage)`
  z-index: -2;
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  img {
    filter: blur(3px);
  }
`;

export const CategoryCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  flex-grow: 1;
  text-align: center;
  color: ${(props) => `${props.theme.colors.white}`};
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    align-items: flex-start;
  }
`;

export const CategoryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  flex-grow: 1;
  text-align: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    align-items: flex-start;
    align-content: flex-start;
  }
`;

export const CategoryCardName = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 1px 3px rgb(0 0 0 / 40%);
  a {
    color: inherit;
    transition: color 0.12s;
  }
  a:hover {
    color: ${props => `${props.theme.colors.anchorcolor}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-bottom: 10px;
    font-size: 22px;
  }
`;

export const CategoryCardChildren = styled.div`
  flex-grow: 1;
  list-style: none;
  padding: 0;
  font-size: 16px;
  margin: 0 0 28px;
  opacity: 1;
  text-shadow: 0 1px 3px rgb(0 0 0 / 40%);
  li {
    padding: 5px 0 6px;
  }
  a {
    color: inherit;
    transition: color 0.12s;
  }
  a:hover {
    color:${props => `${props.theme.colors.anchorcolor}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    margin-bottom: 24px;
    text-align: left;
    li {
      padding: 1px 0;
      margin-right: 16px;
    }
  }
`;

export const CategoryCardLayoutOverLay = styled.div`
  display: flex;
  &:hover {
    ${CategoryCardOverlayImage} {
      transform: scale(1.03);
    }
    ${CategoryCardOverlayImageBlue} {
      opacity: 1;
    }
  }
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    margin-right: 36px;
    width: 285px;
  }
`;

export const BlockZoneWidget = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    width: calc(100% - 321px);
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 16px;
  }
`;

export const BlockZoneWidgetHeader = styled.div`
  border-bottom: 2px solid ${props => `${props.theme.colors.widgetauthorbordercolor}`};
  margin-bottom: 24px;
  display: flex;
`;

export const BlockZoneTabs = styled.div`
  margin-bottom: -2px;
  display: flex;
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    flex-grow: 1;
    overflow-x: auto;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-grow: 1;
    overflow-x: auto;
  }
`;

export const BlockZoneTabsButton = styled.button`
  white-space: nowrap;
  padding: 7px 16px 6px;
  margin: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid ${props => `${props.theme.colors.widgetauthorbordercolor}`};
  transition: background 0.12s, border-color 0.12s;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  ${(props: { active?: boolean }) =>
    props.active
      ? css`
          border-color: ${props => `${props.theme.colors.activebordercolor}`};
        `
      : css`
          &:hover {
            background:${props => `${props.theme.colors.tagBgColor}`};
            border-color:${props => `${props.theme.colors.hoverbordercolor}`};
          }
        `}
  &:focus {
    outline: none;
  }
`;

export const BlockZoneWidgetBody = styled.div`
  flex-grow: 1;
  display: flex;
`;