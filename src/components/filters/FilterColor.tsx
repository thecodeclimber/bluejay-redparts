// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  FilterColorList,
  FilterColorItem,
  FilterColorCheck
} from '~/styled-components/filter/FilterColor';
import { Check12x9Svg } from '~/svg';
import { colorType } from '~/services/color';
import { IColorFilter, IColorFilterValue } from '~/interfaces/filter';

interface Props {
  options: IColorFilter;
  value: IColorFilterValue;
  onChangeValue?: (event: {
    filter: IColorFilter;
    value: IColorFilterValue;
  }) => void;
}

function FilterColor(props: Props) {
  const { options, value, onChangeValue } = props;

  const updateValue = (newValue: IColorFilterValue) => {
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
    <>
      <FilterColorList>
        {options.items.map((item) => (
          <FilterColorItem key={item.slug}>
            <FilterColorCheck
              className={classNames(
                'input-check-color',
                {
                  'input-check-color--white': colorType(item.color) === 'white',
                  'input-check-color--light': colorType(item.color) === 'light',
                }
              )}
              style={{ color: item.color }}
            >
              <label className="input-check-color__body">
                <input
                  className="input-check-color__input"
                  type="checkbox"
                  value={item.slug}
                  checked={value.includes(item.slug)}
                  disabled={item.count === 0}
                  onChange={handleChange}
                />
                <span className="input-check-color__box" />
                <span className="input-check-color__icon">
                  <Check12x9Svg />
                </span>
                <span className="input-check-color__stick" />
              </label>
            </FilterColorCheck>
          </FilterColorItem>
        ))}
      </FilterColorList>
    </>
  );
}

export default FilterColor;
