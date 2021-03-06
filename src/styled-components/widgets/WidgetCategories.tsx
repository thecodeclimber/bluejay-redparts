import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const WidgetWidgetCategories = styled.div`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  position: relative;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
`;

export const WidgetHeader = styled.div`
  padding: 1.375rem 1.5rem;
  > h4 {
    font-size:${props => `${props.theme.headers.h5.fontSize}`};
    font-weight:${props =>`${props.theme.fontWeight.medium}`};
    margin-bottom: 0;
  }
`;

const WidgetCategoriesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const WidgetCategoriesItem = styled.li`
  position: relative;
`;

export const WidgetCategoriesListRoot = styled(WidgetCategoriesList)`
  padding: 0 1.5rem 1.5rem;
  font-size: 15px;
  line-height: 20px;
  ${WidgetCategoriesItem} {
    padding-left: 16px;
    &:before {
      position: absolute;
      display: block;
      content: '';
      width: 4px;
      height: 4px;
      background: currentColor;
      opacity: 0.2;
      top: 13px;
      left: 2px;
    }
  }
`;

export const WidgetCategoriesLink = styled(AppLink)`
  display: block;
  color: inherit;
  padding: 5px 0;
  transition: color 0.12s;
  margin-right: 34px;
  &:hover {
    color: #007bff;
  }
`;

export const WidgetCategoriesExpander = styled.button`
  position: absolute;
  top: 2px;
  padding: 0;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 2px;
  transition: color 0.15s, background 0.15s;
  right: 0;
  background-color: #fff;
  /* color: #ccc; */
  color:${props => props.theme.colors.plusiconcolor};
  &:before,
  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 10px;
    height: 2px;
    background: currentColor;
    top: 12px;
    left: 8px;
  }

  &:after {
    transition: transform 0.2s ease-in-out;
   
    transform: ${(props: { isOpen?: boolean }) =>
      props.isOpen ? 'none' : 'rotateZ(90deg)'};
  }

  &:focus {
    outline: none;
  }
  &:hover {
    background-color:${props => props.theme.colors.cardbgcolor};
    color: ${props => props.theme.colors.selectarrowcolor};
  }
  &:active {
    background-color:${props => props.theme.colors.cardbgcolor};
    color: ${props => props.theme.colors.selectarrowcolor};
  }
`;

export const WidgetCategoriesContainer = styled.div`
  overflow: hidden;
  height: 0;
  opacity: 0;
  ${(props: { isOpen?: any }) =>
    props.isOpen &&
    css`
      opacity: 1;
      height: auto;
    `}
  transition: height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  &:before,
  &:after {
    display: block;
    content: '';
  }
  &:before {
    height: 4px;
  }
  &:after {
    height: 12px;
  }
`;

export const WidgetCategoriesListChild = styled(WidgetCategoriesList)`
  background-color:${props => props.theme.colors.widgetchildbgcolor};
  border-radius: 3px;
  font-size: 14px;
  line-height: 18px;
  padding: 9px 18px;
  ${WidgetCategoriesLink} {
    padding: 5px 0 3px;
  }
`;
