// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
  useShopFilters,
  useShopFilterValues,
  useShopResetFiltersThunk,
} from '~/store/shop/shopHooks';
import { IShopPageOffCanvasSidebar } from '~/interfaces/pages';
import Filter from '~/components/filters/Filter';
import {
  WidgetFilter,
  WidgetFilterHeader,
  WidgetFilterList,
  WidgetFilterAction,
} from '~/styled-components/widgets/WidgetFilter';
interface Props {
  offcanvasSidebar: IShopPageOffCanvasSidebar;
}

function WidgetFilters(props: Props) {
  const { offcanvasSidebar } = props;
  const filters = useShopFilters();
  const values = useShopFilterValues();
  const shopResetFilters = useShopResetFiltersThunk();

  
  return (
    <WidgetFilter>
      <WidgetFilterHeader>
        <h4>
          <FormattedMessage id="HEADER_FILTERS" />
        </h4>
      </WidgetFilterHeader>

      <WidgetFilterList>
        {filters.map((filter) => (
          <Filter
            key={filter.slug}
            filter={filter}
            value={values[filter.slug]}
          />
        ))}
      </WidgetFilterList>

      <WidgetFilterAction className="d-flex">
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={shopResetFilters}
        >
          <FormattedMessage id="BUTTON_RESET" />
        </button>
      </WidgetFilterAction>
    </WidgetFilter>
  );
}

export default React.memo(WidgetFilters);
