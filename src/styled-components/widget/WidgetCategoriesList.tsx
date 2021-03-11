import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';
import { ArrowDown9x6Svg } from '~/svg';

export const WidgetCategoriesListRootItem = styled.li`
  padding: 0.5rem;
  a {
    color: inherit;
    transition: color 0.1s;
  }
  a:hover {
    color: #007bff;
  }
`;

export const WidgetCategoriesListBody = styled.div`
  padding: 1.5rem;
`;

export const WidgetCategoriesListRoot = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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
  list-style-type: none;
  transition: height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  ${(props: { isOpen?: any }) =>
    props.isOpen &&
    css`
      height: 100%;
      opacity: 1;
    `}
`;

export const ShowMoreIcon = styled.div`
  direction: ltr;
  position: absolute;
  top: 0;
  left: 0;
`;

export const WidgetCategoriesListShowMoreArrow = styled(ArrowDown9x6Svg)`
  transform: rotate(0deg);
  fill: #999;
  transition: transform 0.2s;
  ${(props: { isOpen?: boolean }) =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
      transition: transform 0.2s;
    `}
`;

export const WidgetCategoriesListShowMoreCollapseText = styled.span`
  display: none;
`;

export const WidgetCategoriesListShowMoreExpandText = styled.span`
  display: none;
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
  margin-bottom: 20px;
  ${(props: { isOpen?: any }) =>
    props.isOpen
      ? css`
          ${WidgetCategoriesListShowMoreCollapseText} {
            display: block;
          }
        `
      : css`
          ${WidgetCategoriesListShowMoreExpandText} {
            display: block;
          }
        `}
  &:hover {
    text-decoration: underline;
  }
`;
