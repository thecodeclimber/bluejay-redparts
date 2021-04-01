import styled, { css } from 'styled-components';

export const VehicleVehicleSelect = styled.div`
  display: block;
`;

export const VehicleSelectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -14px;
  margin-top: -14px;
`;

export const VehicleSelectItemControl = styled.select`
  width: 100%;
  height: 44px;
  border: none;
  appearance: none;
  appearance: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 2px;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  background-color: ${(props) => `${props.theme.colors.white}`};
  background-repeat: no-repeat;
  background-size: 5px 10px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 10'%3E%3Cpath fill='%234d4d4d' d='M4.503,4 L0.497,4 C0.094,4 -0.142,3.492 0.089,3.122 L2.095,0.233 C2.293,-0.084 2.712,-0.084 2.911,0.233 L4.911,3.122 C5.142,3.492 4.906,4 4.503,4 ZM0.497,6 L4.503,6 C4.906,6 5.142,6.504 4.911,6.871 L2.905,9.737 C2.707,10.052 2.288,10.052 2.089,9.737 L0.089,6.871 C-0.142,6.504 0.094,6 0.497,6 Z'/%3E%3C/svg%3E%0A");
  transition: opacity 0.25s ease-in-out, color 0.25s ease-in-out;
  padding-left: 16px;
  padding-right: 29px;
  background-position: right 12px center;
  text-align: left;
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.65;
    color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    height: 40px;
  }
`;

export const VehicleSelectItemLoader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
    width: calc(100% + 0px);
    height: calc(100% + 0px);
    background: ${(props) => `${props.theme.colors.white}`};
    opacity: 1;
    border-radius: 2.5px;
  }
  &:after {
    content: '';
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${(props) => `${props.theme.colors.borderleftcolor}`};
    border-top-color: ${(props) =>
      `${props.theme.colors.loadingbordertopcolor}`};
    border-style: solid;
    animation-name: loader-animation;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    position: absolute;
    display: block;
  }
`;

export const VehicleSelectItem = styled.div`
  position: relative;
  margin-left: 14px;
  margin-top: 14px;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 220px;
  ${(props: { loading?: any }) =>
    props.loading &&
    css`
      ${VehicleSelectItemLoader} {
        pointer-events: all;
        opacity: 1;
      }
    `}
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    width: 260px;
    min-width: 260px;
    flex-grow: 0;
  }
`;