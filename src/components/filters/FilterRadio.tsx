// react
import React from 'react';
// application
import { IRadioFilter, IRadioFilterValue } from '~/interfaces/filter';
import {
  FilterList,
  FIlterListList,
  FilterListItem,
  FilterListInput,
  FilterListTitle,
  FilterListCounter,
} from '~/styled-components/filter/FilterRadio';
interface Props {
  options: IRadioFilter;
  value: IRadioFilterValue;
  onChangeValue?: (event: {
    filter: IRadioFilter;
    value: IRadioFilterValue;
  }) => void;
}

function FilterRadio(props: Props) {
  const { options, value, onChangeValue } = props;

  const updateValue = (newValue: IRadioFilterValue) => {
    if (onChangeValue) {
      onChangeValue({ filter: options, value: newValue });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && event.target.value !== value) {
      updateValue(event.target.value);
    }
  };

  return (
    <FilterList>
      <FIlterListList>
        {options.items.map((item) => (
          <FilterListItem key={item.slug} item={item.count === 0}>
            <FilterListInput
              name={options.slug}
              value={item.slug}
              checked={value === item.slug}
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

export default FilterRadio;
