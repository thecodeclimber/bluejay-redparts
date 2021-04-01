import styled from 'styled-components';

export const InputRadio = styled.span`
  display: inline-block;
`;

export const InputRadioBody = styled.span`
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
`;

export const InputRadioCircle = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 0 0 1px ${(props) => `${props.theme.colors.radiobgcolor}`} inset;
  transition: background 0.2s, box-shadow 0.2s;
  &:after {
    display: block;
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: ${(props) => `${props.theme.colors.white}`};
    transform: scale(0);
    transition: background 0.2s, transform 0.2s, visibility 0s 0.2s;
    visibility: hidden;
  }
`;

export const InputRadioInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: inherit;
  &:checked ~ {
    ${InputRadioCircle} {
      background: ${(props) => `${props.theme.colors.primary}`};
      box-shadow: 0 0 0 1px
        ${(props) => `${props.theme.colors.blockcategoriesbodycolor}`} inset;
      &:after {
        background: ${(props) => `${props.theme.colors.white}`};
        visibility: visible;
        transition-delay: 0s, 0s, 0s;
        transform: scale(1);
      }
    }
  }
  &:disabled ~ {
    ${InputRadioCircle} {
      background: ${(props) => `${props.theme.colors.cardbgcolor}`};
      box-shadow: 0 0 0 1px
        ${(props) => `${props.theme.colors.disabledradiocolor}`} inset;
      &:after {
        background: ${(props) => `${props.theme.colors.disabledbgcolorafter}`};
      }
    }
  }
`;