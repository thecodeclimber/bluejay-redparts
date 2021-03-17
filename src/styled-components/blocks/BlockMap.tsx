import styled from 'styled-components';

export const BlockMapStyledComponent = styled.div`
  display: block;
  position: relative;
  height: 420px;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    width: 100%;
    height: 3px;
    z-index: 1;
    pointer-events: none;
  }
  &:before {
    top: 0;
    background: linear-gradient(to bottom, rgba(#000, 0.03), rgba(#000, 0));
  }
  &:after {
    bottom: 0;
    background-image: linear-gradient(to top, rgba(#000, 0.03), rgba(#000, 0));
  }
`;

export const BlockMapBody = styled.div``;
