import styled from 'styled-components';

export const InputInputNumber = styled.div`
  display: block;
  width: 100%;
  position: relative;
`;

export const InputNumberInput = styled.input`
  -moz-appearance: textfield;
  display: block;
  width: 100%;
  min-width: 88px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const InputNumberAddSub = styled.div`
  position: absolute;
  height: 100%;
  width: 24px;
  top: 0;
  cursor: pointer;
  user-select: none;
  opacity: 0.3;
  transition: opacity 0.18s;
  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: currentColor;
  }
  &:before {
    width: 8px;
    height: 2px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const InputNumberAdd = styled(InputNumberAddSub)`
  right: 1px;
  &:after {
    width: 2px;
    height: 8px;
  }
`;

export const InputNumberSub = styled(InputNumberAddSub)`
  left: 1px;
`;