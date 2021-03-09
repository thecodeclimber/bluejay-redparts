// react
import React from 'react';
// application
import {
  FilterColorDiv,
  FilterColorList,
  FilterColorItem,
  FilterColorCheck,
  InputCheckColorBody,
  InputCheckColorInput,
  InputCheckColorBox,
  InputCheckColorIcon,
  InputCheckColorStick,
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
      <FilterColorDiv>
        <FilterColorList>
          {options.items.map((item) => (
            <FilterColorItem key={item.slug}>
              <FilterColorCheck
                colorWhite={colorType(item.color) === 'white'}
                colorLight={colorType(item.color) === 'light'}
                style={{ color: item.color }}
              >
                <InputCheckColorBody>
                  <InputCheckColorInput
                    count={item.count === 0}
                    type="checkbox"
                    value={item.slug}
                    checked={value.includes(item.slug)}
                    disabled={item.count === 0}
                    onChange={handleChange}
                  />
                  <InputCheckColorBox count={item.count === 0} />
                  <InputCheckColorIcon count={item.count === 0}>
                    <Check12x9Svg />
                  </InputCheckColorIcon>
                  <InputCheckColorStick count={item.count === 0} />
                </InputCheckColorBody>
              </FilterColorCheck>
            </FilterColorItem>
          ))}
        </FilterColorList>
      </FilterColorDiv>
    </>
  );
}

export default FilterColor;
