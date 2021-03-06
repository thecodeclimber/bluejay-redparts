import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const WidgetWidgetCategoriesList = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
  margin-bottom: 20px;
`;

export const WidgetCategoriesListBody = styled.div`
  padding: 1.5rem;
  a {
    color: inherit;
    transition: color 0.1s;
  }
  a:hover {
    color: #007bff;
  }
`;

export const WidgetCategoriesListRoot = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const WidgetCategoriesListRootItem = styled.li`
  margin-top: ${(props: { length?: any }) =>
    props.length ? '1.375rem' : '.375rem'};
  margin-bottom: 0.375rem;
  line-height: 20px;
`;

export const WidgetCategoriesListRootLink = styled(AppLink)`
  font-weight: 500;
  font-size: 17px;
`;

export const WidgetCategoriesListChild = styled.ul`
  transition: height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  list-style: none;
  padding: 0;
  font-size: 15px;
  margin: 10px 0 0;
  ${(props: { isOpen?: boolean }) =>
    props.isOpen ?
    css`
      height: auto;
      opacity: 1;
    `:
    css`
    font-size: 15px;
    `}
`;
export const WidgetCategoriesListChildItem = styled.li`
  padding: 3px 0;
`;

export const WidgetCategoriesListShowMoreExpanText = styled.span``;

export const WidgetCategoriesListShowMoreCollapseText = styled.span`
  display: none;
`;

export const WidgetCategoriesListShowMoreArrow = styled.span`
  fill: currentColor;
  position: absolute;
  top: 6px;
  transition: transform 0.2s;
  opacity: 0.78;
  left: 0;
  svg {
    display: block;
  }
`;

export const WidgetCategoriesListShowMore = styled.button`
  position: relative;
  display: inline;
  border: none;
  background: transparent;
  padding: 0;
  color: #999;
  font-size: 14px;
  font-family: inherit;
  margin-top: 4px;
  padding-left: 16px;
  ${(props: { isOpen?: boolean }) =>
    props.isOpen
      ? css`
          ${WidgetCategoriesListShowMoreExpanText} {
            display: none;
          }
          ${WidgetCategoriesListShowMoreCollapseText} {
            display: inline;
          }
        `
      : css`
          ${WidgetCategoriesListShowMoreExpanText} {
            display: inline;
          }

          ${WidgetCategoriesListShowMoreArrow} {
            transform: rotate(180deg);
          }
        `}
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`;
