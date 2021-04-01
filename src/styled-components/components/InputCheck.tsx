import styled, { css } from 'styled-components';

export const InputCheck = styled.span`
  display: inline-block;
`;

export const InputCheckBody = styled.span`
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
`;

export const InputCheckBox = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 1.2px;
  background: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) inset;
  transition: background 0.15s, box-shadow 0.15s;
`;

export const InputCheckIcon = styled.span`
  pointer-events: none;
  position: absolute;
  left: 4px;
  top: 5px;
  fill: ${(props) => `${props.theme.colors.white}`};
  transform: scale(0);
  transition: fill 0.15s, transform 0.15s, visibility 0s 0.15s;
  svg {
    display: block;
  }
`;

export const InputCheckInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: inherit;
  &:checked ~ {
    ${InputCheckBox} {
      background: ${(props) => `${props.theme.colors.primary}`};
      box-shadow: ${(props) =>
        `${props.theme.boxShadow.checkBoxCheckedShadow}`};
    }
    ${InputCheckIcon} {
      fill: ${(props) => `${props.theme.colors.white}`};
      transition-delay: 0s, 0s, 0s;
      transform: scale(1);
    }
  }
  &:disabled ~ {
    ${InputCheckBox} {
      background: ${(props) => `${props.theme.colors.tagBgColor}`};
      box-shadow: ${(props) =>
        `${props.theme.boxShadow.checkBoxDisabledShadow}`};
    }
    ${InputCheckIcon} {
      fill: rgba(#000, 0.2);
    }
  }
`;
