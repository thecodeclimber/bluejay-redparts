// react
import React, { useContext, useMemo, useState, useEffect } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
// application
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Pagination from '~/components/shared/Pagination';
import ProductCard from '~/components/shared/ProductCard';
import { SidebarContext } from '~/services/sidebar';
import {
  Cross9LightSvg,
  Filters16Svg,
  LayoutGrid16Svg,
  LayoutGridWithDetails16Svg,
  LayoutList16Svg,
  LayoutTable16Svg,
} from '~/svg';
import {
  useSetOption,
  useShop,
  useShopOptions,
  useShopProductsList,
  useShopProductsListIsLoading,
  useShopResetFiltersThunk,
  useShopResetFilterThunk,
} from '~/store/shop/shopHooks';
import {
  IShopPageGridLayout,
  IShopPageLayout,
  IShopPageOffCanvasSidebar,
} from '~/interfaces/pages';
import {
  ProductsProductsView,
  ProductViewBody,
  ProductsViewLoader,
  ProductViewEmpty,
  ProductViewEmptyTitle,
  ProductViewEmptySubTitle,
  ProductsViewEmptyAction,
  ProductViewOption,
  ViewOptionsBody,
  ViewOptionsFiltersButton,
  FilterButtonIcon,
  FilterButtonTitle,
  FilterButtonCounter,
  ViewOptionsLayout,
  LayoutSwitcherList,
  LayoutSwitcherButton,
  ViewOptionsLegend,
  ViewOptionsSpring,
  ViewOptionsSelect,
  ViewOptionsBodyFilter,
  ViewOptionsLabel,
  ViewOptionsAppliedFilter,
  AppliedFiltersList,
  AppliedFilterItem,
  AppliedFilterButtonFilter,
  AppliedFilterButtonClear,
  ProductListHead,
  ProductListContent,
  ProductsViewPagination,
  ProductViewPaginationLegend,
} from '~/styled-components/shop/ProductsView';

interface LayoutButton {
  layout: IShopPageLayout;
  icon: React.ReactNode;
}

interface Props {
  layout: IShopPageLayout;
  gridLayout: IShopPageGridLayout;
  offCanvasSidebar: IShopPageOffCanvasSidebar;
}

function ProductsView(props: Props) {
  const { layout: layoutProps, gridLayout, offCanvasSidebar } = props;
  const intl = useIntl();
  const isLoading = useShopProductsListIsLoading();
  const shop = useShop();
  const productsList = useShopProductsList();
  const options = useShopOptions();
  const shopResetFilters = useShopResetFiltersThunk();
  const shopResetFilter = useShopResetFilterThunk();
  const [, setSidebarIsOpen] = useContext(SidebarContext);
  const [layout, setLayout] = useState(layoutProps);

  const handlePageChange = useSetOption('page', parseFloat);
  const handleSortChange = useSetOption('sort', (event) => event.target.value);
  const handleLimitChange = useSetOption('limit', (event) =>
    parseFloat(event.target.value)
  );

  const isEmptyList = productsList?.total === 0;
  const hasActiveFilters = shop.activeFilters.length > 0;
  const currentFiltersCount = shop.currentFilters.length;

  const { currentFilters } = shop;

  const handleFiltersClick = () => {
    setSidebarIsOpen(true);
  };

  const layoutButtons: LayoutButton[] = useMemo(
    () => [
      { layout: 'grid', icon: <LayoutGrid16Svg /> },
      { layout: 'grid-with-features', icon: <LayoutGridWithDetails16Svg /> },
      { layout: 'list', icon: <LayoutList16Svg /> },
      { layout: 'table', icon: <LayoutTable16Svg /> },
    ],
    []
  );

  const rootClasses = classNames('products-view', {
    'products-view--loading': isLoading,
  });

  const viewOptionsClasses = classNames(
    'products-view__options',
    'view-options',
    `view-options--offcanvas--${offCanvasSidebar}`
  );

  const productListClasses = classNames(
    'products-view__list',
    'products-list',
    {
      'products-list--grid--6': gridLayout === 'grid-6-full',
      'products-list--grid--5': gridLayout === 'grid-5-full',
      'products-list--grid--4': ['grid-4-full', 'grid-4-sidebar'].includes(
        gridLayout
      ),
      'products-list--grid--3': gridLayout === 'grid-3-sidebar',
    }
  );

  if (!productsList) {
    return null;
  }

  return (
    <ProductsProductsView>
      <ProductViewBody>
        <ProductsViewLoader isloading={isLoading} />

        {isEmptyList && hasActiveFilters && (
          <ProductViewEmpty>
            <ProductViewEmptyTitle>
              <FormattedMessage id="TEXT_NO_MATCHING_ITEMS_TITLE" />
            </ProductViewEmptyTitle>
            <ProductViewEmptySubTitle>
              <FormattedMessage id="TEXT_NO_MATCHING_ITEMS_SUBTITLE" />
            </ProductViewEmptySubTitle>
            <ProductsViewEmptyAction>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={shopResetFilters}
              >
                <FormattedMessage id="BUTTON_RESET_FILTERS" />
              </button>
            </ProductsViewEmptyAction>
          </ProductViewEmpty>
        )}

        {isEmptyList && !hasActiveFilters && (
          <ProductViewEmpty>
            <ProductViewEmptyTitle>
              <FormattedMessage id="TEXT_CATEGORY_IS_EMPTY_TITLE" />
            </ProductViewEmptyTitle>
            <ProductViewEmptySubTitle>
              <FormattedMessage id="TEXT_CATEGORY_IS_EMPTY_SUBTITLE" />
            </ProductViewEmptySubTitle>
          </ProductViewEmpty>
        )}

        {!isEmptyList && (
          <React.Fragment>
            <ProductViewOption className={viewOptionsClasses}>
              <ViewOptionsBody>
                <ViewOptionsFiltersButton
                  type="button"
                  onClick={handleFiltersClick}
                >
                  <FilterButtonIcon>
                    <Filters16Svg />
                  </FilterButtonIcon>
                  <FilterButtonTitle>
                    <FormattedMessage id="BUTTON_FILTERS" />
                  </FilterButtonTitle>
                  <FilterButtonCounter>
                    {currentFiltersCount}
                  </FilterButtonCounter>
                </ViewOptionsFiltersButton>

                <ViewOptionsLayout>
                  <LayoutSwitcherList>
                    {layoutButtons.map((button) => {
                      const buttonClasses = classNames(
                        'layout-switcher__button',
                        {
                          'layout-switcher__button--active':
                            button.layout === layout,
                        }
                      );

                      return (
                        <LayoutSwitcherButton
                          active={button.layout === layout}
                          key={button.layout}
                          type="button"
                          onClick={() => setLayout(button.layout)}
                        >
                          {button.icon}
                        </LayoutSwitcherButton>
                      );
                    })}
                  </LayoutSwitcherList>
                </ViewOptionsLayout>

                <ViewOptionsLegend>
                  <FormattedMessage
                    id="TEXT_SHOWING_PRODUCTS"
                    values={{
                      from: productsList.from,
                      to: productsList.to,
                      total: productsList.total,
                    }}
                  />
                </ViewOptionsLegend>

                <ViewOptionsSpring />

                <ViewOptionsSelect>
                  <label htmlFor="view-option-sort">
                    <FormattedMessage id="INPUT_SORT_LABEL" />:
                  </label>
                  <select
                    id="view-option-sort"
                    className="form-control form-control-sm"
                    value={options.sort || productsList.sort}
                    onChange={handleSortChange}
                  >
                    <option value="default">
                      {intl.formatMessage({ id: 'INPUT_SORT_OPTION_DEFAULT' })}
                    </option>
                    <option value="name_asc">
                      {intl.formatMessage({ id: 'INPUT_SORT_OPTION_NAME_ASC' })}
                    </option>
                    <option value="name_desc">
                      {intl.formatMessage({
                        id: 'INPUT_SORT_OPTION_NAME_DESC',
                      })}
                    </option>
                  </select>
                </ViewOptionsSelect>

                <ViewOptionsSelect>
                  <label htmlFor="view-option-limit">
                    <FormattedMessage id="INPUT_LIMIT_LABEL" />:
                  </label>
                  <select
                    id="view-option-limit"
                    className="form-control form-control-sm"
                    value={options.limit || productsList.limit}
                    onChange={handleLimitChange}
                  >
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                  </select>
                </ViewOptionsSelect>
              </ViewOptionsBody>

              {hasActiveFilters && (
                <ViewOptionsBodyFilter>
                  <ViewOptionsLabel>
                    <FormattedMessage id="TEXT_ACTIVE_FILTERS" />
                  </ViewOptionsLabel>
                  <ViewOptionsAppliedFilter>
                    <AppliedFiltersList>
                      {currentFilters.map((filter, index) => (
                        <AppliedFilterItem key={index}>
                          <AppliedFilterButtonFilter
                            type="button"
                            onClick={() => shopResetFilter(filter)}
                          >
                            {filter.type === 'vehicle' &&
                              filter.original.vehicle && (
                                <React.Fragment>
                                  {filter.original.vehicle.year}{' '}
                                  {filter.original.vehicle.make}{' '}
                                  {filter.original.vehicle.model}
                                </React.Fragment>
                              )}
                            {filter.type === 'range' && (
                              <React.Fragment>
                                <CurrencyFormat
                                  value={filter.original.value[0]}
                                />
                                {' – '}
                                <CurrencyFormat
                                  value={filter.original.value[1]}
                                />
                              </React.Fragment>
                            )}
                            {filter.type === 'check' && filter.item.name}
                            {filter.type === 'radio' && (
                              <React.Fragment>
                                {filter.original.name}
                                {': '}
                                {filter.item.name}
                              </React.Fragment>
                            )}
                            {filter.type === 'rating' && (
                              <FormattedMessage
                                id="TEXT_STARS"
                                values={{
                                  stars: filter.item.rating,
                                }}
                              />
                            )}
                            {filter.type === 'color' && filter.item.name}

                            <Cross9LightSvg />
                          </AppliedFilterButtonFilter>
                        </AppliedFilterItem>
                      ))}
                      <AppliedFilterItem>
                        <AppliedFilterButtonClear
                          type="button"
                          onClick={shopResetFilters}
                        >
                          <FormattedMessage id="BUTTON_CLEAR_ALL" />
                        </AppliedFilterButtonClear>
                      </AppliedFilterItem>
                    </AppliedFiltersList>
                  </ViewOptionsAppliedFilter>
                </ViewOptionsBodyFilter>
              )}
            </ProductViewOption>

            <div
              className={productListClasses}
              data-layout={layout === 'grid-with-features' ? 'grid' : layout}
              data-with-features={
                layout === 'grid-with-features' ? 'true' : 'false'
              }
            >
              <ProductListHead>
                <div className="products-list__column products-list__column--image">
                  <FormattedMessage id="TABLE_IMAGE" />
                </div>
                <div className="products-list__column products-list__column--meta">
                  <FormattedMessage id="TABLE_SKU" />
                </div>
                <div className="products-list__column products-list__column--product">
                  <FormattedMessage id="TABLE_PRODUCT" />
                </div>
                <div className="products-list__column products-list__column--rating">
                  <FormattedMessage id="TABLE_RATING" />
                </div>
                <div className="products-list__column products-list__column--price">
                  <FormattedMessage id="TABLE_PRICE" />
                </div>
              </ProductListHead>
              <ProductListContent>
                {productsList.map((product: any) => {
                  return (
                    <div key={product.id} className="products-list__item">
                      <ProductCard product={product} />
                    </div>
                  );
                })}
              </ProductListContent>
            </div>

            <ProductsViewPagination>
              <nav aria-label="Page navigation example">
                <Pagination
                  current={options.page || productsList.page}
                  total={productsList.pages}
                  siblings={2}
                  onPageChange={handlePageChange}
                />
              </nav>
              <ProductViewPaginationLegend>
                <FormattedMessage
                  id="TEXT_SHOWING_PRODUCTS"
                  values={{
                    from: productsList.from,
                    to: productsList.to,
                    total: productsList.total,
                  }}
                />
              </ProductViewPaginationLegend>
            </ProductsViewPagination>
          </React.Fragment>
        )}
      </ProductViewBody>
    </ProductsProductsView>
  );
}

export default React.memo(ProductsView);
