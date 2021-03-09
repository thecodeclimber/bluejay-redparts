import styled, { css } from 'styled-components';

export const FilterColorDiv = styled.div``;

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

export const FilterColorCheck = styled.div`
  display: block;
  ${(props: { colorWhite?: boolean , colorLight?: boolean}) =>
    props.colorWhite &&
     css`
          ${InputCheckColorBox} {
            box-shadow: 0 0 0 2px #d9d9d9 inset;
          }
          ${InputCheckColorIcon} {
            fill: #3d464d;
          }
        `}

    ${(props: { colorWhite?: boolean , colorLight?: boolean}) =>
    props.colorLight &&
     css`
          ${InputCheckColorIcon} {
            
            fill: #fff;
          }
        `}

`;

export const InputCheckColor = styled.div`
  display: inline-block;
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
  ${(props: { count?: boolean }) =>
    props.count
      ? css`
          &:disabled {
            cursor: default;
          }
          &:disabled ~ ${InputCheckColorBox} {
            position: relative;
            left: 0px;
            top: 0px;
            width: 22px;
            height: 22px;
            opacity: 0.5;
            cursor: default;
          }
        `
      : css`
          &:checked ~ ${InputCheckColorIcon} {
            transform: scale(1);
          }
        `}
`;

export const InputCheckColorBox = styled.span`
  ${(props: { count?: boolean; color?: 'string' }) =>
    props.count
      ? css`
          position: relative;
          left: 0px;
          top: 0px;
          width: 22px;
          height: 22px;
          opacity: 0.5;
          cursor: default;
          display: block;
          border-radius: 1.2px;
          background: currentColor;
        `
      : css`
          display: block;
          width: 22px;
          height: 22px;
          border-radius: 1.2px;
          background: currentColor;
          cursor: inherit;
        `}
`;

export const InputCheckColorIcon = styled.span`
  ${(props: { count?: boolean }) =>
    props.count
      ? css``
      : css`
          position: absolute;
          left: 5px;
          top: 6px;
          fill: #fff;
          transform: scale(0);
          transition: transform 0.15s;

          svg {
            display: block;
          }
          &:checked {
            transform: scale(1);
          }
        `}
`;

export const InputCheckColorStick = styled.span`
  ${(props: { count?: boolean }) =>
    props.count &&
    css`
      pointer-events: none;
      display: block;
      position: absolute;
      width: 2px;
      border-radius: 1px;
      height: 34px;
      left: calc(50% - 1px);
      top: -6px;
      background: rgba(102, 102, 102, 0.9);
      transform: rotateZ(45deg);
      transform-origin: center center;
    `}
`;
