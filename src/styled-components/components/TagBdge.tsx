import styled, { css } from 'styled-components';

export const TagBadge = css`
  display: inline-block;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  line-height: 1;
  z-index: 0;
  color: ${(props) => `${props.theme.colors.white}`};
  background: ${(props) => `${props.theme.colors.primary}`};
  height: 18px;
  padding: 4px 14px 0;
  -webkit-transform: skewX(-13deg);
  -ms-transform: skewX(-13deg);
  transform: skewX(-13deg);
  border-radius: 2px;
`;
