import styled, { css } from 'styled-components';

export const ProductProductForm = styled.div`
  display: block;
  background: ${(props) => `${props.theme.colors.formbgcolor}`};
  margin-bottom: 24px;
  margin-top: -4px;
  padding: 16px 28px 18px;
  border-top: 1px solid
    ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
  border-bottom: 1px solid
    ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
  @media (max-width: 1399.98px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 991.98px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ProductFormBody = styled.div``;

//products
export const ProductFormRow = styled.div`
  margin-bottom: 12px;
`;

export const ProductFormTitle = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => `${props.theme.colors.titlecolor}`};
  margin-bottom: 4px;
`;

export const ProductFormControl = styled.div``;

export const InputRadioLabel = styled.div``;

export const InputRadioLabelList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -3px;
`;

export const InputRadioLabelItem = styled.label`
  margin: 3px;
`;

export const InputRadioLabelTitle = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => `${props.theme.colors.white}`};
  height: 28px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%) inset;
  font-size: 13px;
  font-weight: 500;
  padding: 0 12px 2px;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 0 0 2px rgb(0 0 0 / 10%) inset;
  }
  &:active {
    box-shadow: 0 0 0 2px rgb(0 0 0 / 20%) inset;
  }
  ${(props: { selected?: boolean }) =>
    props.selected &&
    css`
      background-color: ${(props) => `${props.theme.colors.primary}`};
      color: ${(props) => `${props.theme.colors.white}`};
      box-shadow: 0 0 0 2px ${(props) => `${props.theme.colors.primary}`} inset;
    `}
`;

export const InputRadioLabelInput = styled.input`
  position: absolute;
  pointer-events: none;
  opacity: 0;
  &:checked ~ ${InputRadioLabelTitle} {
    box-shadow: 0 0 0 2px ${(props) => `${props.theme.colors.primary}`} inset;
  }
`;

//color

export const InputRadioColor = styled.div`
  display: block;
`;

export const InputRadioColorList = styled.div`
  padding: 1px 0;
  display: flex;
  margin: -2px;
`;

export const Input = styled.input``;

export const Span = styled.span``;

export const InputRadioColorItem = styled.label`
  width: 28px;
  height: 28px;
  display: block;
  margin: 2px;
  cursor: pointer;
  ${Input} {
    pointer-events: none;
    opacity: 0;
    position: absolute;
    &:enabled:checked {
      ${Span} {
        transform: scale(1);
        &:before {
          transform: scale(1);
        }
        &:after {
          transform: scale(1);
        }
      }
    }
  }
  ${Span} {
    position: relative;
    width: 28px;
    height: 28px;
    display: block;
    border-radius: 14px;
    background: currentColor;
    transform: scale(0.7857142857);
    transition: transform 0.2s;
    &:before {
      display: block;
      position: absolute;
      content: '';
      border-radius: 1000px;
      left: 3px;
      top: 3px;
      width: 22px;
      height: 22px;
      background: #fff;
      transform: scale(0);
      transition: transform 0.2s;
    }
    &:after {
      display: block;
      position: absolute;
      content: '';
      border-radius: 1000px;
      left: 7px;
      top: 7px;
      width: 14px;
      height: 14px;
      background: currentColor;
      transform: scale(0);
      transition: transform 0.2s;
    }
    &:hover {
      ${Input} {
        &:enabled ~ ${Span} {
          transform: scale(0.8571428571);
        }
      }
    }
  }
`;
