import styled, { css } from 'styled-components';

const TagBadgeTheme = css`
  color: ${(props) => `${props.theme.colors.white}`};
`;

export const TagBadge = styled.div`
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  line-height: 1;
  z-index: 0;
  height: 18px;
  padding: 4px 14px 0;
  &:before {
    direction: ltr;
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
  }
  ${TagBadgeTheme}
`;
