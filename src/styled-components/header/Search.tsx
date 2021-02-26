import styled, { css } from 'styled-components';

export const SearchBody = styled.form`
  display: flex;
  z-index: 0;
  position: relative;
  max-width: 560px;
  height: 38px;
`;

export const SearchShadow = styled.form`
  display: flex;
  z-index: 0;
  position: relative;
  max-width: 560px;
  height: 38px;
`;

export const SearchInput = styled.input`
  padding: 0 13px 0 37px;
  color: #262626;
  background-color: #fff;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 2.5px;
  flex-grow: 1;
  font-size: 15px;
  font-family: inherit;
  flex-basis: 0;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  &:focus {
    background-color: #fff;
    border-color: #fff;
    outline: none;
  }
`;

export const SearchButton = styled.input`
  flex-shrink: 0;
  fill: currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const SearchButtonEnd = styled.button`
  right: 0;
  color: #b2b2b2;
  transition: color 0.2s;
  position: absolute;
  height: 38px;
  width: 38px;
  border: none;
`;

export const SearchButtonStart = styled.div`
  padding-left: 12px;
  padding-right: 27px;
  margin-right: 5px;
  background-position: right 12px center;
  left: 0;
  order: 1;
  border: 1px solid transparent;
  background-repeat: no-repeat;
  background-size: 5px 10px;
  border-radius: 2.5px;
  transition: color 0.15s, background-color 0.15s;
  background-color: #ffdf40;
  color: #262626;
  background-image: url(
    data:image/svg + xml,
    %3Csvgxmlns='http://www.w3.org/2000/svg'viewBox='0 0 5 10'%3E%3Cpathfill='rgba(0, 0, 0, 0.35)'d='M4.503,4 L0.497,4 C0.094,4 -0.142,3.492 0.089,3.122 L2.095,0.233 C2.293,-0.084 2.712,-0.084 2.911,0.233 L4.911,3.122 C5.142,3.492 4.906,4 4.503,4 ZM0.497,6 L4.503,6 C4.906,6 5.142,6.504 4.911,6.871 L2.905,9.737 C2.707,10.052 2.288,10.052 2.089,9.737 L0.089,6.871 C-0.142,6.504 0.094,6 0.497,6 Z'/%3E%3C/svg%3E%0A
  );
`;

export const SearchButtonIcon = styled.span`
  fill: rgba(0, 0, 0, 0.75);
`;

export const SearchButtonTitle = styled.span`
  margin-left: 9px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-top: 1px;
`;

export const SearchDropdown = styled.span`
  color: #262626;
  background-color: #fff;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  position: absolute;
  top: 100%;
  border-radius: 1.5px;
  opacity: 0;
  transform: translateY(26px);
  visibility: hidden;
  transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), visibility 0s 0.25s;
`;

export const Suggestions = styled.span`
  padding: 14px 0;
`;

export const SuggestionsGroup = styled.div``;
export const SuggestionsGroupTitle = styled.div`
  padding: 3px 20px 3px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  color: #999;
`;

export const SearchCarSelectorLink = styled.div`
  font-size: 14px;
  color: #999;
  &:hover {
    text-decoration: underline;
  }
`;

export const VehiclePickerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;
`;

export const VehiclePickerPanelBody = styled.div`
  padding: 20px 20px 28px;
`;

export const VehiclePickerPanelActive = styled.div`
  display: block;
`;

export const VehiclePickerPanel = styled.div`
  ${(props: { vehiclePanel?: any }) =>
    props.vehiclePanel &&
    css`
      ${VehiclePickerPanelActive}
    `}
`;

export const VehiclesListItemRemove = styled.button`
  position: relative;
  display: flex;
  padding: 8px;
  border: none;
  margin: 0;
  border-radius: 2px;
  fill: currentColor;
  transition: background-color 0.15s, color 0.15s;
  background-color: #fff;
  color: #ccc;
`;

export const VehiclesListItem = styled.label`
  display: flex;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  padding: 8px;
  width: 100%;
  margin: 4px;
`;
