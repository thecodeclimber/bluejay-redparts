// react
import React, { useEffect, useMemo } from 'react';
// third-party
import queryString from 'query-string';
import { useIntl } from 'react-intl';
// application
import {
  NoGutters,
  BlockSplitItem,
  BlockSplitItemSidebar,
} from '~/styled-components/shop/ShopPageShop';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import ProductsView from '~/components/shop/ProductsView';
import ShopSidebar from '~/components/shop/ShopSidebar';
import url from '~/services/url';
import { baseUrl, getCategoryParents } from '~/services/utils';
import { buildQuery } from '~/store/shop/shopHelpers';
import { CurrentVehicleScopeProvider } from '~/services/current-vehicle';
import { ILink } from '~/interfaces/link';
import { removePrefix } from '~/services/i18n/utils';
import { SidebarProvider } from '~/services/sidebar';
import { useAppRouter } from '~/services/router';
import { useShop } from '~/store/shop/shopHooks';
import {
  IShopPageGridLayout,
  IShopPageLayout,
  IShopPageOffCanvasSidebar,
  IShopPageSidebarPosition,
} from '~/interfaces/pages';
interface Props {
  layout: IShopPageLayout;
  gridLayout: IShopPageGridLayout;
  sidebarPosition?: IShopPageSidebarPosition;
}
function ShopPageShop(props: Props) {
  const { layout, gridLayout, sidebarPosition = 'start' } = props;
  const intl = useIntl();
  const router = useAppRouter();
  const shopState = useShop();
  // Replace current url.
  useEffect(() => {
    const query = buildQuery(shopState.options, shopState.filters);
    const href = queryString.stringifyUrl(
      {
        ...queryString.parseUrl(router.asPath),
        query: queryString.parse(query),
      },
      { encode: false }
    );
    router
      .replace(
        {
          pathname: router.pathname,
          query: {
            slug: router.query.slug,
          },
        },
        removePrefix(href),
        {
          shallow: true,
        }
      )
      .then(() => {
        // This is necessary for the "History API" to work.
        window.history.replaceState(
          {
            ...window.history.state,
            options: {
              ...window.history.state.options,
              shallow: false,
            },
          },
          '',
          baseUrl(href)
        );
      });
  }, [shopState.options, shopState.filters]);
  const hasSidebar = ['grid-3-sidebar', 'grid-4-sidebar'].includes(gridLayout);
  const offCanvasSidebar: IShopPageOffCanvasSidebar = [
    'grid-4-full',
    'grid-5-full',
    'grid-6-full',
  ].includes(gridLayout)
    ? 'always'
    : 'mobile';
  const pageHeader = useMemo(() => {
    let pageTitle = intl.formatMessage({ id: 'HEADER_SHOP' });
    const breadcrumb: ILink[] = [
      { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
      { title: intl.formatMessage({ id: 'LINK_SHOP' }), url: url.shop() },
    ];
    if (shopState.category) {
      getCategoryParents(shopState.category).forEach((parent) => {
        breadcrumb.push({ title: parent.name, url: url.category(parent) });
      });
      breadcrumb.push({
        title: shopState.category.name,
        url: url.category(shopState.category),
      });
      pageTitle = shopState.category.name;
    }
    return <BlockHeader pageTitle={pageTitle} breadcrumb={breadcrumb} />;
  }, [intl, shopState.category]);
  if (
    shopState.categoryIsLoading ||
    (shopState.productsListIsLoading && !shopState.productsList)
  ) {
    return null;
  }
  const sidebar = <ShopSidebar offcanvas={offCanvasSidebar} />;

  return (
    <React.Fragment>
      <SidebarProvider>
        <CurrentVehicleScopeProvider>
          {pageHeader}
          <div>
            {offCanvasSidebar === 'always' && sidebar}
            <div className="container">
              <NoGutters className="row no-gutters">
                {sidebarPosition === 'start' && hasSidebar && (
                  <BlockSplitItemSidebar className="col-auto">
                    {sidebar}
                  </BlockSplitItemSidebar>
                )}
                <BlockSplitItem
                  itemContent={true}
                  className="col-auto flex-grow-1"
                >
                  <div className="block">
                    <ProductsView
                      layout={layout}
                      gridLayout={gridLayout}
                      offCanvasSidebar={offCanvasSidebar}
                    />
                  </div>
                </BlockSplitItem>
                {sidebarPosition === 'end' && hasSidebar && (
                  <BlockSplitItemSidebar className="col-auto">
                    {sidebar}
                  </BlockSplitItemSidebar>
                )}
              </NoGutters>
            </div>
          </div>
          <BlockSpace layout="before-footer" />
        </CurrentVehicleScopeProvider>
      </SidebarProvider>
    </React.Fragment>
  );
}
export default ShopPageShop;
