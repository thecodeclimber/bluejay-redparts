import styled, { css } from 'styled-components';

export const ProductsProductsView = styled.div``;

export const ProductViewBody = styled.div`
  position: relative;
`;

export const ProductsViewLoader = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  z-index: 4;
  background: ${(props) => `${props.theme.colors.loaderbgcolor}`};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  ${(props: { isloading?: boolean }) =>
    props.isloading &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const ProductViewEmpty = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2.5rem;
  text-align: center;
`;

export const ProductViewEmptyTitle = styled.div`
  font-size: 22px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;

export const ProductViewEmptySubTitle = styled.div`
  margin-top: 4px;
`;

export const ProductsViewEmptyAction = styled.div`
  margin-top: 1.25rem;
`;
export const ProductViewOption = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.shadowcolor}`};
  margin-bottom: 20px;
  font-size: 0.9375rem;
  overflow: hidden;
`;

export const ViewOptionsBody = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin-top: -8px;
  margin-right: -20px;
`;

export const ViewOptionsFiltersButton = styled.button`
  display: flex;
  background: ${(props) => `${props.theme.colors.switcherbgcolor}`};
  border: none;
  border-radius: 2px;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  color: inherit;
  font-family: inherit;
  transition: background-color 0.12s;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-right: 20px;
  margin-top: 8px;
  padding-left: 9px;
  padding-right: 7px;
  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    display: none;
  }
`;

export const ViewOptionsLayout = styled.div`
  margin-right: 20px;
  margin-top: 8px;
  @media (max-width: 575.98px) {
    margin-left: auto;
  }
`;

export const LayoutSwitcherList = styled.div`
  display: flex;
`;

export const LayoutSwitcherButton = styled.button`
  padding: 7px;
  margin: 0;
  border: none;
  display: block;
  border-radius: 2px;
  background-color: transparent;
  color: ${(props) => `${props.theme.colors.switcherbtncolor}`};
  &:hover {
    background-color: ${(props) => `${props.theme.colors.switcherbgcolor}`};
  }
  ${(props: { active?: boolean }) =>
    props.active &&
    css`
      color: ${(props) => `${props.theme.colors.primary}`};
      &:hover {
        background-color: transparent;
      }
    `}
  &:focus {
    outline: none;
  }
  svg {
    display: block;
    fill: currentColor;
  }
`;

export const FilterButtonIcon = styled.span`
  fill: ${(props) => `${props.theme.colors.btnicon}`};
  margin-right: 7px;
  svg {
    display: block;
  }
`;

export const FilterButtonTitle = styled.span`
  padding-top: 1px;
`;

export const FilterButtonCounter = styled.span`
  background: ${(props) => `${props.theme.colors.primary}`};
  color: ${(props) => `${props.theme.colors.white}`};
  padding: 3px 4px 2px;
  font-size: 11px;
  border-radius: 1.5px;
  margin-left: 6px;
`;

export const ViewOptionsLegend = styled.div`
  white-space: nowrap;
  margin-right: 20px;
  margin-top: 8px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    margin-left: auto;
  }
  @media (max-width: 575.98px) {
    width: 100%;
    padding-top: 2px;
  }
`;

export const ViewOptionsSpring = styled.div`
  flex-grow: 1;
  margin-right: 20px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 100%;
  }
`;

export const ViewOptionsSelect = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-top: 8px;
  > label {
    margin-bottom: 0;
    white-space: nowrap;
    margin-right: 10px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    margin-left: auto;
  }
  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
    > label {
      margin: 0 0 2px;
    }
  }
`;

export const ViewOptionsBodyFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin-top: -8px;
  padding: 0.875rem 1rem;
  margin-right: -20px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    margin-top: 2px;
  }
`;

export const ViewOptionsLabel = styled.div`
  position: absolute;
  background: ${(props) => `${props.theme.colors.white}`};
  padding: 0 8px;
  top: -5px;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  left: 50%;
  transform: translateX(-50%);
`;

export const ViewOptionsAppliedFilter = styled.div`
  margin-right: 20px;
`;

export const AppliedFiltersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: -2px;
  display: flex;
  flex-wrap: wrap;
`;

export const AppliedFilterItem = styled.li`
  margin: 2px;
`;

const AppliedFilterButton = styled.button`
  padding: 4px 11px;
  display: block;
  height: 21px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
  background-color: ${(props) => `${props.theme.colors.switcherbgcolor}`};
  transition: background 0.12s, color 0.12s;
  border-radius: 11.5px;
  position: relative;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => `${props.theme.colors.tagBgHoverColor}`};
    color: inherit;
  }
`;

export const AppliedFilterButtonFilter = styled(AppliedFilterButton)`
  padding-right: 33px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    top: 4px;
    bottom: 4px;
    background-color: ${(props) => `${props.theme.colors.btnafterbgcolor}`};
    right: 25px;
  }
  svg {
    position: absolute;
    top: 6px;
    fill: ${(props) => `${props.theme.colors.svgfillcolor}`};
    right: 10px;
  }
`;

export const AppliedFilterButtonClear = styled(AppliedFilterButton)`
  background: transparent;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
`;

export const ProductListHead = styled.div`
  display: none;
`;

export const ProductListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    margin: -8px;
  }
`;

export const ProductListItem = styled.div`
  flex-shrink: 0;
  display: flex;
  margin: 10px;
  width: calc((100% - 80px) / 4);
  width: 100%;
  @media (min-width: 768px) and (max-width: 1199.98px) {
    margin: 8px;
    width: calc((100% - 48px) / 3);
  }
  @media (min-width: 420px) and (max-width: 767px) {
    margin: 8px;
    width: calc((100% - 32px) / 2);
  }
  @media (max-width: 419px) {
    margin: 8px;
    width: calc((100% - 16px) / 1);
  }
`;

export const ProductsViewPagination = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0.75rem 1rem;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding-top: 1rem;
    flex-direction: column;
  }
`;

export const ProductViewPaginationLegend = styled.div`
  font-size: 0.9375rem;
  padding: 0 0.375rem;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding-top: 9px;
  }
`;
