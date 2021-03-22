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

  @include local-define-arrow-scheme(normal);

  svg {
    fill: currentColor;
    display: block;

    @include direction {
      transform: scaleX($transform-direction);
    }
  }

  &:focus {
    outline: none;
  }
  &:before {
    position: absolute;
    display: block;
    content: '';
    height: 100%;
    transform-origin: center center;
    z-index: -1;
    border-radius: 2px;
    pointer-events: auto;
    transition: background 0.15s;
  }
  &:hover {
    @include local-define-arrow-scheme(hover);
  }
  &:active {
    @include local-define-arrow-scheme(active);

    &,
    &:before {
      transition-duration: 0s;
    }
  }

  // this is to avoid chrome rendering bug
  &:after {
    position: absolute;
    display: block;
    content: '';
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    transition: background 0.2s;
    opacity: 0.01;

    @include direction {
      #{$inset-inline-start}: -2px;
    }
  }
  &:hover:after {
    background: $barely-black;
  }
  &:active:after {
    background: $barely-white;
    transition-duration: 0s;
  }
`;
