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

function FilterThreadCoverage(props: any) {
  const { options } = props;

  return (
    <FilterList>
      <FIlterListList>
        {options.values.map((item: any, index: any) => (
          <FilterListItem key={index}>
            <FilterListInput />
            <FilterListTitle>{item.value}</FilterListTitle>
          </FilterListItem>
        ))}
      </FIlterListList>
    </FilterList>
  );
}

export default FilterThreadCoverage;
