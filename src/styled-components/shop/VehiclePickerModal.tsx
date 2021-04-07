import styled, { css } from 'styled-components';

export const VehiclePickerModalClose = styled.button`
  z-index: 2;
  position: absolute;
  padding: 16px;
  border: none;
  top: 0;
  border-radius: 0 2.5px 0 2.5px;
  background: transparent;
  fill: currentColor;
  transition: background 0.2s, color 0.2s;
  background-color: ${(props) => `${props.theme.colors.white}`};
  color: ${(props) => `${props.theme.colors.plusiconcolor}`};
  right: 0;
  svg {
    display: block;
  }
  &:active {
    transition-duration: 0s;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => `${props.theme.colors.cardbgcolor}`};
    color: ${(props) => `${props.theme.colors.selectarrowcolor}`};
  }
`;

export const VehiclePickerModalPanel = styled.div`
  padding: 32px 32px 36px;
  display: none;
  ${(props: { active?: boolean }) =>
    props.active &&
    css`
      display: block;
    `}
  @media (max-width: 479px) {
    padding: 24px 24px 28px;
  }
  @media (max-width: 399px) {
    padding: 20px 20px 24px;
  }
`;

export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  margin-bottom: 2rem;
  margin-top: -4px;
`;

export const VehiclePickerModalTitle = styled(CardTitle)``;

export const VehiclePickerModalText = styled.div`
  font-size: 15px;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  margin-bottom: 10px;
  margin-top: -10px;
`;

export const VehiclePickerModalAddButton = styled.button`
  min-height: 44px;
`;

export const VehiclePickerModalAction = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  > *:not(:last-child) {
    margin-right: 12px;
  }
  @media (max-width: 479px) {
    margin-top: 32px;
  }
  @media (max-width: 399px) {
    margin-top: 28px;
  }
`;