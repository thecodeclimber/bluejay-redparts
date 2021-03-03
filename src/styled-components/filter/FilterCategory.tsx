import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const FilterCategoryList = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
  line-height: 18px;
  
`;

const FilterCategoryItemCurrent = css`
  font-weight: 700;
`;

const FilterCategoryItemParent = css`
  direction: ltr;
  padding-left: 14px;
`;

const FilterCategoryItemChild = css`
  position: relative;
  font-size: 15px;
`;

const CategoryItem = (props: any) => {
  if (props.parent) {
    return FilterCategoryItemParent;
  }
  if (props.options) {
    return FilterCategoryItemCurrent;
  }
  if (props.child) {
    return FilterCategoryItemChild;
  }
};

export const FilterCategoryItem = styled.li`
  position: relative;
  padding: 5px 0;
  display: flex;
  ${(props: { parent?: any; current?: any; child?: any }) =>
    css`
      ${CategoryItem}
    `};

`;

export const FilterCategoryArrow = styled.span`
  position: absolute;
  direction: ltr;
  left: 0;
  transform: scaleX(1);
  fill: #ccc;
  top: 3px;
`;

export const FilterAppLink = styled(AppLink)`
  color: inherit;
  transition: 0.15s;
  &:hover {
    color: #007bff;
  }
`;
