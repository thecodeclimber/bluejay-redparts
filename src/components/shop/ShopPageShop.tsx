// application
import {
  BlockSplitHasSidebar,
  BlockSplitItem,
  BlockSplitItemContent,
  BlockSplitItemSidebar,
} from '~/styled-components/shop/ShopPageShop';
import {
  IShopPageGridLayout,
  IShopPageLayout,
  IShopPageOffCanvasSidebar,
  IShopPageSidebarPosition,
} from '~/interfaces/pages';
// react
import React, { useEffect, useMemo } from 'react';
import { baseUrl, getCategoryParents } from '~/services/utils';
import { useShop, useShopProductsList } from '~/store/shop/shopHooks';

import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import { CurrentVehicleScopeProvider } from '~/services/current-vehicle';
import { ILink } from '~/interfaces/link';
import ProductsView from '~/components/shop/ProductsView';
import ShopSidebar from '~/components/shop/ShopSidebar';
import { SidebarProvider } from '~/services/sidebar';
import { buildQuery } from '~/store/shop/shopHelpers';
import { createProductName } from '~/store/shop/shopHelpers';
// third-party
import queryString from 'query-string';
import { removePrefix } from '~/services/i18n/utils';
import url from '~/services/url';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

interface Props {
  layout: IShopPageLayout;
  gridLayout: IShopPageGridLayout;
  sidebarPosition?: IShopPageSidebarPosition;
}

function ShopPageShop(props: Props) {
  const { layout, gridLayout, sidebarPosition = 'start' } = props;
  const intl = useIntl();
  const router: any = useRouter();
  const shopState: any = useShop();
  const productsList = useShopProductsList();
  const categories: any = useSelector((state: any) => state.categories);

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

    // router
    //   .replace(
    //     {
    //       pathname: router.pathname,
    //       query: {
    //         slug: router.query.slug,
    //       },
    //     },
    //     removePrefix(href),
    //     {
    //       shallow: true,
    //     }
    //   )
    //   .then(() => {
    //     // This is necessary for the "History API" to work.
    //     window.history.replaceState(
    //       {
    //         ...window.history.state,
    //         options: {
    //           ...window.history.state.options,
    //           shallow: false,
    //         },
    //       },
    //       '',
    //       baseUrl(href)
    //     );
    //   });
  }, [shopState.options, shopState.filters]);

  // useEffect(() => {
  //   console.log('router shop page', router);
  //   if (shopState.options?.page && shopState.options?.limit) {
  //     router.replace(
  //       {
  //         pathname: `${router.asPath}`,
  //         query: {
  //           page: shopState.options?.page,
  //           limit: shopState.options?.limit,
  //         },
  //       },
  //       undefined,
  //       {
  //         shallow: true,
  //       }
  //     );
  //   }
  // }, [shopState.options]);

  const hasSidebar = ['grid-3-sidebar', 'grid-4-sidebar'].includes(gridLayout);
  const offCanvasSidebar: IShopPageOffCanvasSidebar = [
    'grid-4-full',
    'grid-5-full',
    'grid-6-full',
  ].includes(gridLayout)
    ? 'always'
    : 'mobile';

  const pageHeader = useMemo(() => {
    let pageTitle = router.query?.slug
      ? createProductName(router.query.slug.replace(/_/g, ' '))
      : 'Shop';
    const breadcrumb: ILink[] = [
      { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
      { title: pageTitle, url: url.shop() },
    ];

    // if (shopState.category) {
    //   getCategoryParents(shopState.category).forEach((parent) => {
    //     breadcrumb.push({ title: parent.name, url: url.category(parent) });
    //   });

    //   breadcrumb.push({
    //     title: shopState.category.name,
    //     url: url.category(shopState.category),
    //   });

    //   pageTitle = shopState.category.name;
    // }

    return <BlockHeader pageTitle={pageTitle} breadcrumb={breadcrumb} />;
  }, [intl, shopState.category]);

  // if (
  //   shopState.categoryIsLoading ||
  //   (shopState.productsListIsLoading && !shopState.productsList)
  // ) {
  //   return null;
  // }

  const sidebar = <ShopSidebar offcanvas={offCanvasSidebar} />;

  return (
    <React.Fragment>
      <SidebarProvider>
        <CurrentVehicleScopeProvider>
          {pageHeader}

          <BlockSplitHasSidebar hassidebar={hasSidebar}>
            {offCanvasSidebar === 'always' && sidebar}

            <div className="container">
              <div className="row no-gutters">
                {sidebarPosition === 'start' && hasSidebar && (
                  <BlockSplitItemSidebar className="col-auto">
                    {sidebar}
                  </BlockSplitItemSidebar>
                )}

                <BlockSplitItemContent className="col-auto flex-grow-1">
                  <div className="block">
                    <ProductsView
                      layout={layout}
                      gridLayout={gridLayout}
                      offCanvasSidebar={offCanvasSidebar}
                      productsList={productsList}
                    />
                  </div>
                </BlockSplitItemContent>

                {sidebarPosition === 'end' && hasSidebar && (
                  <BlockSplitItemSidebar className="col-auto">
                    {sidebar}
                  </BlockSplitItemSidebar>
                )}
              </div>
            </div>
          </BlockSplitHasSidebar>

          <BlockSpace layout="before-footer" />
        </CurrentVehicleScopeProvider>
      </SidebarProvider>
    </React.Fragment>
  );
}

export default ShopPageShop;
