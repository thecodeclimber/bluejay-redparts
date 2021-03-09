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
  value: ICheckFilterValue;
  onChangeValue?: (event: {
    filter: ICheckFilter;
    value: ICheckFilterValue;
  }) => void;
}

function FilterCheck(props: Props) {
  const { options, value, onChangeValue } = props;

  const updateValue = (newValue: ICheckFilterValue) => {
    if (onChangeValue) {
      onChangeValue({ filter: options, value: newValue });
    }
  };

  // noinspection DuplicatedCode
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && !value.includes(event.target.value)) {
      updateValue([...value, event.target.value]);
    }
    if (!event.target.checked && value.includes(event.target.value)) {
      updateValue(value.filter((x) => x !== event.target.value));
    }
  };

  return (
    <FilterList>
      <FIlterListList>
        {options.items.map((item) => (
          <FilterListItem item={item.count === 0} key={item.slug}>
            <FilterListInput
              value={item.slug}
              checked={value.includes(item.slug)}
              disabled={item.count === 0}
              onChange={handleChange}
            />

            <FilterListTitle item={item.count === 0}>
              {item.name}
            </FilterListTitle>
            {item.count !== 0 && (
              <FilterListCounter>{item.count}</FilterListCounter>
            )}
          </FilterListItem>
        ))}
      </FIlterListList>
    </FilterList>
  );
}

export default FilterCheck;
