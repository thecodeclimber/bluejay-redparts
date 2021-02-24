import styled from 'styled-components';

export const MobileSearchBody = styled.form`
  display: flex;
  position: relative;
  z-index: 0;
  width: 100%;

  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
  @media (max-width: 767.98px) {
    height: 100%;
    background-color: #fff;
  }
`;

export const MobileSearchInput = styled.input`
  margin: 0;
  line-height: inherit;
  flex-grow: 1;
  font: 400 13.3333px Arial;
  font-size: 15px;
  background: transparent;

  border: none;
  font-family: inherit;
  color: inherit;
  &:focus {
    outline: none;
    outline-offset: 0px;
  }

  @media (min-width: 768px) {
    padding-left: 11px;
    padding-right: 37px;
    height: 36px;
    padding: 0 11px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    -webkit-transition: color 0.2s, background 0.2s, border-color 0.2s;
    -moz-transition: color 0.2s, background 0.2s, border-color 0.2s;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
    color: #262626;
    background-color: #fff;
    border-color: #fff;
  }
  @media (max-width: 767.98px) {
    padding-left: 12px;
    background-color: #fff;
    padding-right: 0;
    color: #262626;
    padding-top: 0;
    padding-bottom: 0;
    flex-basis: 0;
    width: 0;
  }
`;

export const MobileSearchVehiclePicker = styled.button`
  order: -1;
  background: #ffdf40;
  color: #262626;
  min-width: 44px;
  padding: 0px 12px;
  margin-right: 8px;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 500;
  border-radius: 2.5px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: color 0.15s, background-color 0.15s;

  &:hover {
    background: #ffd226;
  }
  &:active {
    background: #ffca16;
  }
  &:focus {
    outline: none;
  }

  svg {
    display: block;
    flex-shrink: 0;
    fill: rgba(0, 0, 0, 0.75);
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    margin: 8px;
  }
`;

export const MobileSearchButton = styled.button`
  background: transparent;
  border: none;
  font-family: inherit;
  color: #b2b2b2;
  width: 38px;
  flex-shrink: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  fill: currentcolor;

  &:hover {
    color: #1e74df;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    width: 52px;
  }
`;

export const MobileSearchField = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
`;
