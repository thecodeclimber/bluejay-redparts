import styled, { css } from 'styled-components';

export const WidgetWidgetSearch = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
  margin-bottom: 20px;
`;
export const WidgetSearchForm = styled.form`
  display: flex;
  position: relative;
  z-index: 0;
  &:hover {
    box-shadow: 0 0 0 1px rgb(0 0 0 / 10%);
  }
`;

export const WidgetSearchButton = styled.button`
  flex-shrink: 0;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => `${props.theme.colors.widgetsearchbuttoncolor}`};
  fill: currentColor;
  width: 52px;
  height: 52px;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${(props) => `${props.theme.colors.widgetsearchbuttonhovercolor}`};
    background: ${(props) =>
      `${props.theme.colors.widgetsearchbuttonhoverbgcolor}`};
  }
  &:active {
    color: ${(props) => `${props.theme.colors.widgetsearchbuttonhovercolor}`};
    background: ${(props) =>
      `${props.theme.colors.widgetsearchbuttonactivebgcolor}`};
  }
`;

export const WidgetSearchFiled = styled.div`
  position: absolute;
  display: block;
  content: '';
  z-index: -1;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  transition: box-shadow 0.2s;
`;

export const WidgetSearchInput = styled.input`
  flex-grow: 1;
  appearance: none;
  border: none;
  background: none;
  padding: 15.5px 24px;
  font-family: inherit;
  font-size: 16px;
  line-height: 21px;
  &:focus {
    outline: none;
  }
  &:focus ~ ${WidgetSearchFiled} {
    box-shadow: 0 0 0 3px rgb(0 0 0 / 10%);
  }
`;
