// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import Checkbox from '~/components/shared/Checkbox';
import { ICheckFilter, ICheckFilterValue } from '~/interfaces/filter';
import {
  FilterList,
  FIlterListList,
  FilterListItem,
  FilterListInput,
  FilterListTitle,
  FilterListCounter,
} from '~/styled-components/filter/FilterCheck';
interface Props {
  options: ICheckFilter;
}

function FilterThreadCoverage(props: Props) {
  const { options } = props;

  return (
    <FilterList>
      <FIlterListList>
        {options.items.map((item, index) => (
          <FilterListItem key={index}>
            <FilterListInput />
            <FilterListTitle>{item}</FilterListTitle>
          </FilterListItem>
        ))}
      </FIlterListList>
    </FilterList>
  );
}

export default FilterThreadCoverage;
