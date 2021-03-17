// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
// application
import {
  FilterCategoryList,
  FilterCategoryItem,
  FilterCategoryArrow,
  FilterAppLink
} from '~/styled-components/filter/FilterCategory';
import url from '~/services/url';
import { ArrowRoundedLeft6x9Svg } from '~/svg';
import { getCategoryParents } from '~/services/utils';
import { ICategoryFilter } from '~/interfaces/filter';

interface Props {
  options: ICategoryFilter;
}

function FilterCategory(props: Props) {
  const { options } = props;

  return (
    <div>
      <FilterCategoryList>
        {options.value && (
          <FilterCategoryItem parent={true}>
            <FilterCategoryArrow>
              <ArrowRoundedLeft6x9Svg />
            </FilterCategoryArrow>
            <FilterAppLink href={url.products()}>
              <FormattedMessage id="LINK_ALL_PRODUCTS" />
            </FilterAppLink>
          </FilterCategoryItem>
        )}
        {options.items.map((item) => (
          <React.Fragment key={item.id}>
            {getCategoryParents(item).map((parent) => 
            {
              
            return (
              <FilterCategoryItem key={parent.id} parent={true}>
                <FilterCategoryArrow>
                  <ArrowRoundedLeft6x9Svg />
                </FilterCategoryArrow>
                <FilterAppLink href={url.category(parent)}>{parent.name}</FilterAppLink>
              </FilterCategoryItem>
            )})}
            <FilterCategoryItem
              current={options.value}
            >
              <FilterAppLink href={url.category(item)}>{item.name}</FilterAppLink>
            </FilterCategoryItem>
            {item.children?.map((child) => (
              <FilterCategoryItem
                key={child.id}
                child={true}
              >
                <FilterAppLink href={url.category(child)}>{child.name}</FilterAppLink>
              </FilterCategoryItem>
            ))}
          </React.Fragment>
        ))}
      </FilterCategoryList>
    </div>
  );
}

export default FilterCategory;
