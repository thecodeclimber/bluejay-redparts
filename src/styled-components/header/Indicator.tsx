import styled from "styled-components";

export const IndicatorButton = styled.a`
  padding-right: 12px;
  padding: 3px;
  display: -moz-box;
  display: flex;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  position: relative;
  height: 54px;
  min-width: 54px;
  color: #fff;
  border-radius: 2px;
  background: transparent;
  border: none;
`;

export const IndicatorIcon = styled.span`
  position: absolute;
  padding: 8px;
  display: block;
  width: 48px;
  height: 48px;
  fill: #fff;
`;

export const IndicatorCounter = styled.span`
  right: 4px;
  color: #262626;
  background: #ffdf40;
  font-weight: 500;
  position: absolute;
  top: 5px;
  font-size: 10px;
  line-height: 1;
  padding: 2px 3px 1px;
  border-radius: 2.5px;
  text-align: center;
  z-index: 0;
  transform: skewX(-11deg);
`;
