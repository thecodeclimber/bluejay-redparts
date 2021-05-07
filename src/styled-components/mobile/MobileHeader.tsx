import styled, { css } from 'styled-components';

export const MobileContainer = styled.div`
  display: block;
  background: ${(props) => `${props.theme.colors.primary}`};
  box-shadow: ${(props) => `${props.theme.colors.primary}`};
  position: relative;
  z-index: 100;

  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    display: none;
  }
`;

export const MobileHeaderBody = styled.div`
  height: 50px;
  display: flex;
`;

export const MobileHeaderIndicators = styled.div`
  display: flex;
  margin-left: auto;
`;

export const MobileHeaderLogo = styled.a`
  display: flex;
  align-items: center;
  padding: 0 14px;
`;

export const MobileHeaderMenuButton = styled.header`
  width: 52px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: ${(props) => `${props.theme.colors.primary}`};
  fill: ${(props) => `${props.theme.colors.white}`};
  &:hover {
    background: ${(props) => `${props.theme.colors.btnafterbgcolor}`};
  }
  &:active {
    background: ${(props) => `${props.theme.colors.link}`};
  }
  &:focus {
    outline: none;
  }

  svg {
    display: block;
  }
`;

export const MobileHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 440px;
  flex-grow: 1;
  padding: 0 12px;
  margin: 0 auto;

  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: none;
    padding: 0;
    margin: 0;
    z-index: 1;
    transform: translateY(-100%);
    transition: transform 0.3s;
    ${(props: { isOpen?: boolean }) =>
      props.isOpen &&
      css`
        transform: none;
      `};
  }
`;
