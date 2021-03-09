// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
  FilterRatingList,
  FilteRatingItemLabel,
  FilterRatingItemStars,
  FilterRatingItemCounter,
  FilterRatingCheckbox,
} from '~/styled-components/filter/FilterRating';
import Rating from '~/components/shared/Rating';
import { IRatingFilter, IRatingFilterValue } from '~/interfaces/filter';

interface Props {
  options: IRatingFilter;
  value: IRatingFilterValue;
  onChangeValue?: (event: {
    filter: IRatingFilter;
    value: IRatingFilterValue;
  }) => void;
}

function FilterRating(props: Props) {
  const { options, value, onChangeValue } = props;

  const updateValue = (newValue: IRatingFilterValue) => {
    if (onChangeValue) {
      onChangeValue({ filter: options, value: newValue });
    }
  };

  // noinspection DuplicatedCode
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = parseFloat(event.target.value);

    if (event.target.checked && !value.includes(currentValue)) {
      updateValue([...value, currentValue]);
    }
    if (!event.target.checked && value.includes(currentValue)) {
      updateValue(value.filter((x) => x !== currentValue));
    }
  };

  return (
    <>
      <FilterRatingList>
        {options.items.map((item) => (
          <li key={item.rating}>
            <FilteRatingItemLabel>
              <FilterRatingCheckbox
                value={item.rating}
                checked={value.includes(item.rating)}
                disabled={item.count === 0}
                onChange={handleChange}
              />
              <FilterRatingItemStars>
                <Rating value={item.rating} />
              </FilterRatingItemStars>
              <span className="sr-only">
                <FormattedMessage
                  id="TEXT_STARS"
                  values={{ stars: item.rating }}
                />
              </span>
              {item.count !== 0 && (
                <FilterRatingItemCounter>{item.count}</FilterRatingItemCounter>
              )}
            </FilteRatingItemLabel>
          </li>
        ))}
      </FilterRatingList>
    </>
  );
}

export default FilterRating;
