import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';
import RadioButton from '~/components/shared/RadioButton';

export const SearchBody = styled.form`
  display: flex;
  z-index: 0;
  position: relative;
  max-width: 560px;
  height: 38px;
`;

export const SearchShadow = styled.div`
  position: absolute;
  bottom: 100%;
  height: 10px;
  width: calc(100% - 20px);
  overflow: hidden;
  margin-inline-start: 10px;
  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 60px;
    position: relative;
    top: 100%;
    box-shadow: 0 -1px 4px rgba(#000, 0.12), 0 -1px rgba(#000, 0.02);
    border-radius: 120px / 10px;
  }
`;

export const SearchInput = styled.input`
  direction: ltr;
  padding-left: 13px;
  padding-right: 37px;
  color: #262626;
  background-color: #fff;
  border-color: #fff;
  flex-grow: 1;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
  border-width: 1px;
  border-style: solid;
  border-radius: 2.5px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  &:focus {
    outline: none;
  }
`;

const SearchButton = css`
  border: 2px solid transparent;
  fill: currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
  white-space: nowrap;
  background: transparent;
`;

const SearchButtonHover = css``;

export const SearchButtonStart = styled.div`
  ${SearchButton}
  direction: ltr;
  background-color: #ffdf40;
  color: #262626;
  order: -1;
  padding: 0 27px 0 12px;
  border: 1px solid transparent;
  border-radius: 2.5px;
  margin-right: 5px;
  &:hover {
    background-color: #ffd226;
  }
`;

export const SearchButtonIcon = styled.span`
  flex-shrink: 0;
`;

export const SearchButtonTitle = styled.span`
  direction: ltr;
  margin-left: 9px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-top: 1px;
`;

export const SearchButtonEnd = styled.span`
  ${SearchButton}
  direction: ltr;
  right: 0;
  color: #b2b2b2;
  transition: color 0.2s;
  position: absolute;
  height: 38px;
  width: 38px;
  border: none;
  &:hover {
    color: #404040;
  }
`;

const Suggestions = css`
  padding: 14px 0;
`;

const VehiclePicker = css`
  max-width: 440px;
`;

export const SearchDropdown = styled.div`
  direction: ltr;
  left: 0;
  right: 0;
  color: #262626;
  background-color: #fff;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  position: absolute;
  top: 100%;
  opacity: 0;
  transform: translateY(26px);
  visibility: hidden;
  border-radius: 1.5px;
  transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), visibility 0s 0.25s;
  ${Suggestions}
  ${(props: { isOpen?: any }) =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
      transition-delay: 0s;
    `}
`;

export const SuggestionsGroupTitle = styled.span`
  padding: 3px 20px 3px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  color: #999;
`;

export const SuggestionsGroup = styled.div`
  margin-top: 10px;
`;

const SuggestionsProduct = css`
  display: flex;
  padding: 6px 20px;
  color: inherit;
`;

const SuggestionsCategory = css`
  display: block;
  padding: 6px 20px;
  color: inherit;
  font-size: 15px;
  line-height: 17px;
`;

export const SuggestionsAppLink = styled(AppLink)`
  ${SuggestionsProduct}
  &:hover {
    color: inherit;
    background: #f2f2f2;
  }
`;

export const SuggestionsCategoryAppLink = styled(AppLink)`
  ${SuggestionsCategory}
  &:hover {
    color: inherit;
    background: #f2f2f2;
  }
`;

export const SuggestionsProductImage = styled.div`
  direction: ltr;
  margin-right: 10px;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 1px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const SuggestionsProductInfo = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 4px;
  min-width: 0;
`;

export const SuggestionsProductPrice = styled.div`
  margin-left: 14px;
  text-align: right;
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 700;
  padding-top: 3px;
  width: 70px;
`;

export const SuggestionsProductName = styled.div`
  font-size: 15px;
  line-height: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SuggestionsProductRating = styled.div`
  display: flex;
  margin-top: 2px;
`;

export const SuggestionsProductRatingStars = styled.div`
  margin-right: 8px;
`;

export const SuggestionsProductRatingLabel = styled.div`
  font-size: 13px;
  line-height: 1;
  color: #6c757d;
`;

export const SearchDropdownArrow = styled.div`
  position: absolute;
  width: 46px;
  height: 21px;
  pointer-events: none;
  bottom: 100%;
  overflow: hidden;
`;

export const VehiclePickerPanelActive = styled.div`
  display: none;
  ${(props: { isActive?: boolean }) =>
    props.isActive &&
    css`
      display: block;
    `}
`;

export const VehiclePickerPanelBody = styled.div`
  padding: 20px 20px 28px;
`;

export const VehiclePickerText = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: #6c757d;
  margin-bottom: 12px;
  &:first-child {
    margin-top: -3px;
  }
`;

export const VehiclesListBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
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

export const VehiclesListItemRadio = styled(RadioButton)`
  margin: 8px;
`;

export const VehiclesListItemInfo = styled.span`
  margin: 2px 8px;
  flex-grow: 1;
  line-height: 1.25;
`;

export const VehiclesListItemName = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 500;
`;

export const VehiclesListItemDetails = styled.span`
  display: block;
  font-size: 13px;
  color: #999;
  margin-top: 2px;
`;

export const VehiclesListItemRemove = styled.div`
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
  &:hover {
    background-color: #f2f2f2;
    color: #999;
  }
`;

export const VehiclePickerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;
`;

export const SearchCarSelectorLink = styled.div`
  > a {
    font-size: 14px;
    color: #999;
    margin-right: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
