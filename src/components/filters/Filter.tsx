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
import FilterRange from '~/components/filters/FilterRange';
import { ICollapseRenderFn } from '~/components/shared/Collapse';
import { IFilter } from '~/interfaces/filter';
import { useShopSetFilterValueThunk } from '~/store/shop/shopHooks';
interface ChangeValueEvent {
  filter: IFilter;
  value: IFilter['value'];
}

interface Props {
  filter: IFilter;
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

            {filter.type === 'range' && (
              <FilterRange
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
