import styled, { css } from 'styled-components';

const textColor = css`
  color: ${(props) => `${props.theme.colors.white}`};
`;
export const IndicatorStyledComponent = styled.div`
  position: relative;
`;

export const IndicatorContentOpen = styled.div`
  pointer-events: auto;
  z-index: 1;
  position: absolute;
  right: 0;
  transition-delay: 0s, 0s, 0s;
  opacity: 1;
  visibility: visible;
  transform: rotateX(0deg);
  transition: transform 0.2s, opacity 0.2s;
`;

export const IndicatorButton = styled.button`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      ${textColor}
      display: -moz-box;
      display: flex;
      padding: 3px;
      padding-right: 12px;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      flex-direction: column;
      cursor: pointer;
      height: 54px;
      min-width: 54px;
      border-radius: 2px;
      border: none;
      box-sizing: border-box;
      &:hover {
        background: rgba(0, 0, 0, 0.15);
      }
      &:active {
        background: rgba(0, 0, 0, 0.15);
      }
      &:focus {
        outline: none;
      }
    `}
`;

export const IndicatorIcon = styled.span`
  position: absolute;
  padding: 8px;
  display: block;
  width: 48px;
  height: 48px;
  fill: ${(props) => `${props.theme.colors.white}`};
`;

export const IndicatorCounter = styled.span`
  position: absolute;
  top: 5px;
  font-size: 10px;
  line-height: 1;
  padding: 2px 3px 1px;
  text-align: center;
  z-index: 0;
  right: 4px;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  background-color: ${(props) => `${props.theme.colors.anchorcolor}`};
  transform: skewX(-13deg);
  box-sizing: border-box;
  display: block;
  border-radius: 2.5px;
`;

export const IndicatorTitle = styled.span`
  color: ${(props) => `${props.theme.colors.mutedTextColor}`};
  margin-left: 50px;
  padding-top: 3px;
  margin-bottom: -3px;
  font-size: 13px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
`;

export const IndicatorValue = styled.span`
  margin-left: 50px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  display: block;
  white-space: nowrap;
  ${textColor}
`;
