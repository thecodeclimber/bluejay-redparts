import React, { useCallback, useState } from 'react';
import { ArrowRoundedDown12x7Svg } from '~/svg';
import FilterCategory from '~/components/filters/FilterCategory';
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
import { createProductName } from '../../../utils/productKeys';
import FilterRange from '~/components/filters/FilterRange';
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

function Filter(props: any) {
  const { filter } = props;
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
          {createProductName(filter.name)}
          <FilterArrow isOpen={isOpen}>
            <ArrowRoundedDown12x7Svg />
          </FilterArrow>
        </FilterTitle>
        <FilterBody isOpen={isOpen}>
          <FilterContainer>
            {/* {filter.type === 'category' && <FilterCategory options={filter} />} */}

            {/* {filter.type === 'range' && (
              <FilterRange
                options={filter}
                value={getFilterValue(filter, value)}
                onChangeValue={handleValueChange}
              />
            )} */}

            {filter.name === 'length' && <FilterLength options={filter} />}

            {filter.name === 'diameter' && <FilterDiameter options={filter} />}

            {filter.name === 'threadLength' && (
              <FilterThreadLength options={filter} />
            )}
            {filter.name === 'threadSize' && (
              <FilterThreadSize options={filter} />
            )}
            {filter.name === 'thread coverage' && (
              <FilterThreadCoverage options={filter} />
            )}
            {filter.name === 'screw size' && (
              <FilterScrewSize options={filter} />
            )}
          </FilterContainer>
        </FilterBody>
      </div>
    </div>
  );
}

export default React.memo(Filter);
