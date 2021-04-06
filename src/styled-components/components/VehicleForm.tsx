import styled, { css } from 'styled-components';

export const VehicleFormLoader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  &:before {
    position: absolute;
    display: block;
    content: '';
    left: 0px;
    top: 0px;
    width: calc(100% + 0px);
    height: calc(100% + 0px);
    background: ${(props) => `${props.theme.colors.bordercolor}`};
    opacity: 1;
    border-radius: 2.5px;
  }
  &:after {
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 10px;
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
`;

export const VehicleFormItem = styled.div`
  position: relative;
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      ${VehicleFormLoaderInput} {
        pointer-events: all;
        opacity: 1;
      }
    `}
`;

export const VehicleFormItemSelect = styled(VehicleFormItem)`
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      ${VehicleFormLoader} {
        pointer-events: all;
        opacity: 1;
      }
    `}
`;

export const VehicleFormDevider = styled.div`
  width: 100%;
  line-height: 1;
  font-size: 13px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin: 12px 6px;
  &:before,
  &:after {
    display: block;
    content: '';
    height: 1px;
    flex-grow: 1;
    background: ${(props) => `${props.theme.colors.bordercolor}`};
  }
  &:before {
    margin-right: 6px;
  }
  &:after {
    margin-left: 6px;
  }
`;

export const VehicleFormLoaderInput = styled.div`
  left: auto;
  right: 9px;
  top: calc(50% - 9px);
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border-width: 2px;
  border-color: ${(props) => `${props.theme.colors.loadingbordercolor}`};
  border-top-color: ${(props) => `${props.theme.colors.loadingbordertopcolor}`};
  border-style: solid;
  animation-name: loader-animation;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  position: absolute;
  display: block;
  content: '';
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const VehicleFormItemInput = styled.div`
  position: relative;
`;

export const VehicleFormSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  ${(props: { location?: any }) => {
    if (props.location === 'account') {
      return css`
        ${VehicleFormItem} {
          width: calc(25% - 12px);
          @media (max-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
            width: calc(50% - 12px);
          }
          @media (max-width: 459px) {
            width: calc(100% - 12px);
          }
        }
      `;
    } else if (props.location === 'modal') {
      return css`
        @media (max-width: 399px) {
          ${VehicleFormItem} {
            width: calc(100% - 12px);
          }
        }
      `;
    }
  }}
  ${VehicleFormItem} {
    width: calc(50% - 12px);
    margin: 6px;
    &:last-child {
      width: 100%;
    }
  }
`;

export const VehicleFormItemAlert = styled.div`
  &:before {
    display: block;
    content: '';
    height: 0.375rem;
  }
`;