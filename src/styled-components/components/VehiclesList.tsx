import styled, { css } from 'styled-components';
import RadioButton from '~/components/shared/RadioButton';

export const VehiclesList = styled.div``;

export const VehiclesListBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
`;

export const VehiclesListItem = styled.label`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  border-radius: 2px;
  padding: 8px;
  width: 100%;
  margin: 4px;
`;

export const VehiclesListItemRadio = styled(RadioButton)`
  margin: 8px;
`;

export const VehicleListItemInfo = styled.span`
  margin: 2px 8px;
  flex-grow: 1;
  line-height: 1.25;
`;

export const VehiclesListItemLinks = styled.div`
  font-size: 14px;
  margin-top: 12px;

  a:hover {
    text-decoration: underline;
  }
`;

export const VehiclesListItemName = styled.span`
  display: block;
  font-size: 15px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;

export const VehiclesListItemDetails = styled.span`
  display: block;
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin-top: 2px;
`;

export const VehiclesListItemRemove = styled.button`
  margin: 8px;
  position: relative;
  display: flex;
  padding: 8px;
  border: none;
  margin: 0;
  border-radius: 2px;
  fill: currentColor;
  transition: background-color 0.15s, color 0.15s;
  background-color: ${(props) => `${props.theme.colors.white}`};
  color: ${(props) => `${props.theme.colors.plusiconcolor}`};
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${(props) => `${props.theme.colors.bordercolor}`};
    color: ${(props) => `${props.theme.colors.activeclor}`};
  }
  &:hover {
    background-color: ${(props) => `${props.theme.colors.tagBgColor}`};
    color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  }
  svg {
    display: block;
  }
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      cursor: default;
      fill: transparent;
      background: transparent;
      &:before {
        left: calc(50% - 9px);
        top: calc(50% - 9px);
        width: 18px;
        height: 18px;
        border-radius: 9px;
        border-width: 2px;
        border-color: ${(props) => `${props.theme.colors.loadingbordercolor}`};
        border-top-color: ${(props) =>
          `${props.theme.colors.loadingbordertopcolor}`};
        border-style: solid;
        animation-name: loader-animation;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        position: absolute;
        display: block;
        content: '';
      }
    `}
`;
