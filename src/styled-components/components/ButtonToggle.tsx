import styled from 'styled-components';

export const ButtonToggle = styled.div``;

export const ButtonToggleList = styled.div`
  display: flex;
`;

export const ButtonToggleItem = styled.div`
  margin: 0;
`;

export const ButtonToggleButton = styled.div`
  margin: 0;
  background: ${(props) =>
    `${props.theme.colors.widgetsearchbuttonactivebgcolor}`};
  color: ${(props) => `${props.theme.colors.widgetnewsletterbgcolor}`};
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  font-size: 13px;
  line-height: 14px;
  padding: 5px 9px;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: background 0.12s, color 0.12s;
`;

export const ButtonToggleInput = styled.div`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
  &:checked ~ ${ButtonToggleButton} {
    background: ${(props) => `${props.theme.colors.primary}`};
    color: ${(props) => `${props.theme.colors.white}`};
  }
`;
