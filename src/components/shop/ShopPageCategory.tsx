// react
import React, { useEffect, useMemo, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import BlockBrands from '~/components/blocks/BlockBrands';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import WidgetCategoriesList from '~/components/widgets/WidgetCategoriesList';
import WidgetProducts from '~/components/widgets/WidgetProducts';
import { getCategoryPath } from '~/services/utils';
import { IBrand } from '~/interfaces/brand';
import { IShopCategoryPageLayout, IShopCategoryPageSidebarPosition } from '~/interfaces/pages';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';
import { useDeferredData } from '~/services/hooks';
import {
    BlockBlockSplit ,
    BlockSplitRow ,
    BlockSplitItemSideBar ,
    BlockSplitItemContent,
    Block ,
    CategoriesListLayout ,
    CategoriesListBody ,
    CategoriesListItem ,
    ImageTypeCategory ,
    ImageBody ,
    ImageTag ,
    CategoriesListItemName ,
    CategoriesListItemProducts ,
    CategoriesListDivider ,
} from '~/styled-components/shop/ShopPageCategory';
interface Props {
    layout: IShopCategoryPageLayout;
    sidebarPosition?: IShopCategoryPageSidebarPosition;
    category?: IShopCategory | null;
    subcategories?: IShopCategory[];
}

function ShopPageCategory(props: Props) {
    const intl = useIntl();
    const { layout, sidebarPosition = 'start', category } = props;
    let { subcategories } = props;
    const hasSidebar = layout.endsWith('-sidebar');
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);

    if (category && subcategories === undefined) {
        subcategories = category.children || [];
    }

    subcategories = subcategories || [];

    const bestsellers = useDeferredData(() => (
        shopApi.getPopularProducts(null, 8)
    ), []);

    const featured = useDeferredData(() => (
        shopApi.getFeaturedProducts(null, 8)
    ), []);

    useEffect(() => {
        let canceled = false;

        shopApi.getBrands({ limit: (hasSidebar ? 7 : 8) * 2 }).then((result) => {
            if (canceled) {
                return;
            }

            setBrands(result);
        });

        if (hasSidebar) {
            shopApi.getLatestProducts(5).then((result) => {
                if (canceled) {
                    return;
                }

                setLatestProducts(result);
            });
        } else {
            setLatestProducts([]);
        }

        return () => {
            canceled = true;
        };
    }, [hasSidebar]);

    const pageTitle = useMemo(() => (
        category ? category.name : intl.formatMessage({ id: 'HEADER_SHOP' })
    ), [category, intl]);

    const breadcrumb = useMemo(() => [
        { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
        { title: intl.formatMessage({ id: 'LINK_SHOP' }), url: url.shop() },
        ...getCategoryPath(category).map((x) => ({ title: x.name, url: url.category(x) })),
    ], [category, intl]);

    let sidebar = null;

    if (hasSidebar) {
        sidebar = (
            <BlockSplitItemSideBar className="col-auto">
                {subcategories.length > 0 && (
                    <WidgetCategoriesList
                        categories={subcategories}
                    />
                )}

                <WidgetProducts
                    widgetTitle={intl.formatMessage({ id: 'HEADER_LATEST_PRODUCTS' })}
                    products={latestProducts}
                />
            </BlockSplitItemSideBar>
        );
    }

    const subcategoriesTemplate = subcategories.length === 0 ? null : (
        <React.Fragment>
            <Block >
                <CategoriesListLayout >
                    <CategoriesListBody >
                        {subcategories.map((subcategory) => (
                            <React.Fragment key={subcategory.id}>
                                <CategoriesListItem>
                                    <AppLink href={url.category(subcategory)}>
                                        {subcategory.image && (
                                            <ImageTypeCategory >
                                                <ImageBody >
                                                    <ImageTag
                                                        
                                                        src={subcategory.image}
                                                        alt={subcategory.name}
                                                    />
                                                </ImageBody>
                                            </ImageTypeCategory>
                                        )}
                                        <CategoriesListItemName >
                                            {subcategory.name}
                                        </CategoriesListItemName>
                                    </AppLink>
                                    {typeof subcategory.items === 'number' && (
                                        <CategoriesListItemProducts >
                                            <FormattedMessage
                                                id="TEXT_PRODUCTS_COUNT"
                                                values={{ count: subcategory.items }}
                                            />
                                        </CategoriesListItemProducts>
                                    )}
                                </CategoriesListItem>
                                <CategoriesListDivider />
                            </React.Fragment>
                        ))}
                    </CategoriesListBody>
                </CategoriesListLayout>
            </Block>

            <BlockSpace layout="divider-nl" />
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <PageTitle>{pageTitle}</PageTitle>

            <BlockHeader
                pageTitle={pageTitle}
                breadcrumb={breadcrumb}
            />

            <BlockBlockSplit>
                <div className="container">
                    <BlockSplitRow className="row no-gutters">
                        {hasSidebar && sidebarPosition === 'start' && sidebar}

                        <BlockSplitItemContent className="col-auto flex-grow-1">
                            {subcategoriesTemplate}

                            <BlockProductsCarousel
                                blockTitle={intl.formatMessage({ id: 'HEADER_BESTSELLERS' })}
                                layout={hasSidebar ? 'grid-4-sidebar' : 'grid-5'}
                                products={bestsellers.data}
                                loading={bestsellers.isLoading}
                            />

                            <BlockSpace layout="divider-nl" />

                            <BlockProductsCarousel
                                blockTitle={intl.formatMessage({ id: 'HEADER_FEATURED_PRODUCTS' })}
                                layout={hasSidebar ? 'horizontal-sidebar' : 'horizontal'}
                                products={featured.data}
                                loading={featured.isLoading}
                                rows={2}
                            />

                            <BlockSpace layout="divider-nl" />

                            <BlockBrands
                                layout={hasSidebar ? 'columns-7-sidebar' : 'columns-8-full'}
                                brands={brands}
                            />
                        </BlockSplitItemContent>

                        {hasSidebar && sidebarPosition === 'end' && sidebar}
                    </BlockSplitRow>
                </div>
            </BlockBlockSplit>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default ShopPageCategory;
