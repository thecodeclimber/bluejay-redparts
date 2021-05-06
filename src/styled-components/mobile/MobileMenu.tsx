import styled, { css } from 'styled-components';
export const MobileMenuBase = styled.div`
  visibility: hidden;
  transition: translateX(0) 0s 0.25s;
  ${(props: { isOpen?: boolean }) =>
    props.isOpen &&
    css`
      visibility: visible;
      transition-duration: 0s;
      ${MobileMenuBackdrop} {
        opacity: 1;
      }
      ${MobileMenuBody} {
        transform: translateX(0);
      }
    `}
`;
export const MobileMenuBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(51, 51, 51, 0.8);
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
export const MobileMenuBody = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
  width: 300px;
  overflow: hidden;
  transform: translateX(-100%);
  transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const MobileMenuClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 50px;
  display: -moz-box;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  z-index: 2;
  border: none;
  padding: 0;
  fill: currentColor;
  transition: background-color 0.15s, color 0.15s;
  background-color: ${(props) => `${props.theme.colors.white}`};
  color: ${(props) => `${props.theme.colors.plusiconcolor}`};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      `${props.theme.colors.widgetauthorbordercolor}`};
    color: ${(props) => `${props.theme.colors.selectarrowcolor}`};
  }
  &:active {
    background-color: ${(props) =>
      `${props.theme.colors.widgetauthorbordercolor}`};
    color: ${(props) => `${props.theme.colors.selectarrowcolor}`};
  }
  &:focus {
    outline: none;
  }
`;

export const MobileMenuDivider = styled.div`
  flex-shrink: 0;
  height: 1px;
  background: ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
`;

export const MobileMenuSpring = styled.div`
  flex-grow: 1;
`;

export const MobileMenuContactsTitle = styled.div`
  font-size: 18px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;

export const MobileMenuContactsSubtitle = styled.div`
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
`;

export const MobileMenuContacts = styled.a`
  text-align: center;
  padding: 16px 20px 14px;
  transition: background 0.2s;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  &:hover {
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
    color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  }
`;

export const MobileMenuIndicatorsStyledComponent = styled.div`
  display: flex;
  padding: 8px 11px;
`;

export const MobileMenuIndicator = styled.div`
  width: calc((100% - 0px * 3) / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  fill: ${(props) => `${props.theme.colors.btnicon}`};
  border-radius: 2px;
  padding: 8px 0 6px;
  &:hover {
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
  }
`;

export const MobileMenuIndicatorIcon = styled.span`
  position: relative;
  svg {
    display: block;
  }
`;

export const MobileMenuIndicatorCounter = styled.span`
  direction: ltr;
  left: calc(100% - 4px);
  position: absolute;
  bottom: calc(100% - 7px);
  color: ${(props) => `${props.theme.colors.white}`};
  font-size: 10px;
  line-height: 1;
  padding: 2px 3px 1px;
  border-radius: 6.5px;
  text-align: center;
  z-index: 0;
  @media (-webkit-max-device-pixel-ratio: 1), (max-resolution: 1dppx) {
    font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  }
  &:before {
    transform: skewX(-11deg);
    display: block;
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => `${props.theme.colors.primary}`};
    z-index: -1;
    border-radius: 2.5px;
  }
`;

export const MobileMenuIndicatorTitle = styled.span`
  font-size: 9px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  text-transform: uppercase;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin-top: 5px;
`;

export const MobileMenuPanelStyledComponent = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  background: ${(props) => `${props.theme.colors.white}`};
`;

export const MobileMenuPanelHeader = styled.div`
  flex-shrink: 0;
  height: 51px;
  border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const MobileMenuPanelTitle = styled.div`
  text-align: center;
  margin: auto;
  font-size: 15px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;
export const MobileMenuPanelBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const MobileMenuPanelBack = styled.div`
  direction: ltr;
  left: 0;
  padding-left: 0;
  padding-right: 2px;
  padding-top: 0;
  padding-bottom: 0;
  position: absolute;
  top: 0;
  width: 48px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: none;
  fill: currentColor;
  transition: background-color 0.15s, color 0.15s;
  background-color: ${(props) => `${props.theme.colors.white}`};
  color: ${(props) => `${props.theme.colors.plusiconcolor}`};
  svg {
    direction: ltr;
    transform: scaleX(1);
  }
  &:focus {
    outline: none;
  }
`;
