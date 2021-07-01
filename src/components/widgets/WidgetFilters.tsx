// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
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
  // const filters = useShopFilters();
  const values = useShopFilterValues();
  const shopResetFilters = useShopResetFiltersThunk();
  const filters = useSelector((state: any) => state.attributes);

  return (
    <WidgetFilter>
      <WidgetFilterHeader>
        <h4>
          <FormattedMessage id="HEADER_FILTERS" />
        </h4>
      </WidgetFilterHeader>

      <WidgetFilterList>
        {filters.attributes.map((filter: any, index: any) => (
          <Filter key={index} filter={filter} />
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
