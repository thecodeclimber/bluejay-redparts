import styled from 'styled-components';

export const Arrow = styled.div`
  display: block;
`;

export const ArrowButton = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
  align-items: center;
  border: none;
  background: transparent;
  pointer-events: none;
  transition: color 0.15s;
  color: ${(props) => `${props.theme.colors.white}`};
  height: 23px;
  padding: 0 14.37131px;
  svg {
    fill: ${(props) => `${props.theme.colors.white}`};
  }
  &:hover::before {
    background: ${(props) => `${props.theme.colors.selectfontcolor}`};
  }
  &::before {
    transform: skewX(-20deg);
    left: 4.185655px;
    direction: ltr;
    width: calc(100% - 8.37131px);
    position: absolute;
    display: block;
    content: '';
    height: 100%;
    transform-origin: center center;
    z-index: -1;
    border-radius: 2px;
    pointer-events: auto;
    transition: background 0.15s;
    background: ${(props) => `${props.theme.colors.primary}`};
  }
  &::after {
    position: absolute;
    display: block;
    content: '';
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    transition: background 0.2s;
    opacity: 0.01;
  }
`;
