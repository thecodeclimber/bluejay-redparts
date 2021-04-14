import React, { useCallback, useState } from 'react';
import { ArrowRoundedDown12x7Svg } from '~/svg';
import FilterCategory from '~/components/filters/FilterCategory';
import FilterVehicle from '~/components/filters/FilterVehicle';
import {
  FilterTitle,
  FilterBody,
  FilterArrow,
  FilterContainer,
} from '~/styled-components/filter/Filter';
import {
  getFilterValue,
  isDefaultFilterValue,
  serializeFilterValue,
} from '~/services/filters';
import FilterRange from '~/components/filters/FilterRange';
import FilterCheck from '~/components/filters/FilterCheck';
import FilterRadio from '~/components/filters/FilterRadio';
import FilterRating from '~/components/filters/FilterRating';
import FilterColor from '~/components/filters/FilterColor';
import FilterLength from '~/components/filters/FilterLength';
import FilterDiameter from '~/components/filters/FilterDiameter';
import FilterThreadCoverage from '~/components/filters/FilterThreadCoverage';
import FilterScrewSize from '~/components/filters/FilterScrewSize';
import FilterThreadLength from '~/components/filters/FilterThreadLength';
import FilterThreadSize from '~/components/filters/FilterThreadSize';
import { ICollapseRenderFn } from '~/components/shared/Collapse';
import { IFilter } from '~/interfaces/filter';
import { useShopSetFilterValueThunk } from '~/store/shop/shopHooks';
interface ChangeValueEvent {
  filter: any;
  value: IFilter['value'];
}

interface Props {
  filter: any;
  value: string;
}

function Filter(props: Props) {
  const { filter, value } = props;
  const [isOpen, setIsOpen] = useState(true);
  const shopSetFilterValue = useShopSetFilterValueThunk();

  const handleValueChange = useCallback(
    ({ filter, value }: ChangeValueEvent) => {
      shopSetFilterValue(
        filter.slug,
        isDefaultFilterValue(filter, value)
          ? null
          : serializeFilterValue(filter, value)
      ).then();
    },
    [shopSetFilterValue]
  );

  const handleToggle = () => {
    setIsOpen((prevCheck) => !prevCheck);
  };

  return (
    <div className="widget-filters__item">
      <div>
        <FilterTitle as="button" type="button" onClick={handleToggle}>
          {filter.name}
          <FilterArrow isOpen={isOpen}>
            <ArrowRoundedDown12x7Svg />
          </FilterArrow>
        </FilterTitle>
        <FilterBody isOpen={isOpen}>
          <FilterContainer>
            {filter.type === 'category' && <FilterCategory options={filter} />}

            {filter.type === 'vehicle' && (
              <FilterVehicle
                options={filter}
                value={getFilterValue(filter, value)}
                onChangeValue={handleValueChange}
              />
            )}

            {filter.type === 'range' && (
              <FilterRange
                options={filter}
                value={getFilterValue(filter, value)}
                onChangeValue={handleValueChange}
              />
            )}

            {filter.type === 'check' && (
              <FilterCheck
                options={filter}
                value={getFilterValue(filter, value)}
                onChangeValue={handleValueChange}
              />
            )}
            {filter.type === 'length' && <FilterLength options={filter} />}
            {filter.type === 'diameter' && <FilterDiameter options={filter} />}
            {filter.type === 'thread_size' && (
              <FilterRadio
                options={filter}
                value={getFilterValue(filter, value)}
                onChangeValue={handleValueChange}
              />
            )}
            {filter.type === 'threadLength' && (
              <FilterThreadLength options={filter} />
            )}
            {filter.type === 'threadSize' && (
              <FilterThreadSize options={filter} />
            )}
            {filter.type === 'threadCoverage' && (
              <FilterThreadCoverage options={filter} />
            )}
            {filter.type === 'screwSize' && (
              <FilterScrewSize options={filter} />
            )}
            {filter.type === 'rating' && (
              <FilterRating
                options={filter}
                value={getFilterValue(filter, value)}
                onChangeValue={handleValueChange}
              />
            )}

            {filter.type === 'color' && (
              <FilterColor
                options={filter}
                value={getFilterValue(filter, value)}
                onChangeValue={handleValueChange}
              />
            )}
          </FilterContainer>
        </FilterBody>
      </div>
    </div>
  );
}

export default React.memo(Filter);
