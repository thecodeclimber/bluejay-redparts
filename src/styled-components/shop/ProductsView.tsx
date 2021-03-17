import styled, { css } from 'styled-components';

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
  font-weight: 500;
`;

export const ProductViewEmptySubTitle = styled.div`
  margin-top: 4px;
`;

export const ProductsViewEmptyAction = styled.div`
  margin-top: 1.25rem;
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
  color: #fff;
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