import styled, { css } from 'styled-components';

export const FilterColorList = styled.div`
  padding: 2px 0;
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
`;

export const FilterColorItem = styled.div`
  cursor: pointer;
  margin: 4px;
`;

const InputCheckColorWhite = css`
  cursor: pointer;
  margin: 4px;
`;

const InputCheckColorLight = css`
  cursor: pointer;
  margin: 4px;
`;

export const InputCheckColor = styled.div`
  display: inline-block;
`;

export const FilterColorCheck = styled.div`
  display: block;
`;

export const InputCheckColorBody = styled.label`
  display: block;
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 1.2px;
  overflow: hidden;
  cursor: inherit;
  margin: 0;
`;

export const InputCheckColorInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const InputCheckColorBox = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 1.2px;
  background: currentColor;
  cursor: inherit;
`;

export const InputCheckColorIcon = styled.span`
  position: absolute;
  left: 5px;
  top: 6px;
  fill: #fff;
  transform: scale(0);
  transition: transform 0.15s;
`;
