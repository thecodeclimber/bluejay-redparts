import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const WidgetCategoriesListRootItem = styled.li`
  line-height: 20px;
  ${(props: { hasChild?: any }) =>
    props.hasChild &&
    css`
      margin-top: 1.375rem;
    `}
`;

export const WidgetCategoriesListRootLink = styled(AppLink)`
  color: inherit;
  transition: color 0.1s;
  font-weight: 500;
  font-size: 17px;
`;

export const WidgetCategoriesListChildItem = styled.li`
  padding: 3px 0;
`;

export const WidgetCategoriesListChild = styled.ul`
  margin-top: 0;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  ${(props: { isOpen?: any }) =>
    props.isOpen &&
    css`
      height: 100%;
      opacity: 1;
    `}
`;

export const WidgetCategoriesListShowMoreArrow = styled.span`
  transform: rotate(0deg);
  ${(props: { isOpen?: any }) =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;



export const WidgetCategoriesListShowMoreButton = styled.button`
  direction: ltr;
  padding-left: 16px;
  position: relative;
  display: inline;
  border: none;
  background: transparent;
  color: #999;
  font-size: 14px;
  font-family: inherit;
  margin-top: 4px;
`;
