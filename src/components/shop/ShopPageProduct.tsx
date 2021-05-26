// react
import React, { useEffect, useState } from 'react';
// third-party
import classNames from 'classnames';
import { Controller, FormProvider } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockSpace from '~/components/blocks/BlockSpace';
import CompatibilityStatusBadge from '~/components/shared/CompatibilityStatusBadge';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import InputNumber from '~/components/shared/InputNumber';
import PageTitle from '~/components/shared/PageTitle';
import ProductForm from '~/components/shop/ProductForm';
import ProductGallery, {
  IProductGalleryLayout,
} from '~/components/shop/ProductGallery';
import ProductSidebar from '~/components/shop/ProductSidebar';
import ProductTabs from '~/components/shop/ProductTabs';
import Rating from '~/components/shared/Rating';
import ShareLinks from '~/components/shared/ShareLinks';
import StockStatusBadge from '~/components/shared/StockStatusBadge';
import url from '~/services/url';
import { getCategoryPath } from '~/services/utils';
import { IProduct } from '~/interfaces/product';
import {
  IProductPageLayout,
  IProductPageSidebarPosition,
} from '~/interfaces/pages';
import { shopApi } from '~/api';
import { useCompareAddItem } from '~/store/compare/compareHooks';
import { useProductForm } from '~/services/forms/product';
import { useWishlistAddItem } from '~/store/wishlist/wishlistHooks';
import {
  Compare16Svg,
  Fi24Hours48Svg,
  FiFreeDelivery48Svg,
  FiPaymentSecurity48Svg,
  FiTag48Svg,
  Wishlist16Svg,
} from '~/svg';
import {
  ProductCardOne,
  ProductCardTwo,
  ProductsGallery,
  ProductHeader,
  ProductTitle,
  ProductSubTitle,
  ProductMain,
  ProductExcert,
  ProductFeatures,
  ProductFeaturesTitle,
  ProductFeaturesLink,
  ProductActions,
  ProductFormForm,
  ProdcutInfoCard,
  ProductInfo,
  ProductTabsTabs,
  ProductBody,
} from '~/styled-components/shop/ProductLayoutFull';
import {
  ProductRating,
  ProductRatingStars,
  ProductRatingLabel,
  ProductFit,
  TagBadgeSale,
  ProductPricesStock,
  ProductPrices,
  ProdcutPriceOld,
  ProductNewPrice,
  ProductPriceCurrent,
  ProductMeta,
  ProductInfoBody,
  ProductActionsitemQuantity,
  ProductItemAdditemAddCart,
  ProductActionsDivider,
  ProductActionsItemWishlist,
  ProductActionsItemCompare,
  ProductTagsAndShareLinks,
} from '~/styled-components/shop/Product';
import {
  Tags,
  TagList,
  ProductShareLinks,
} from '~/styled-components/components/Tag';
import {
  ShopFeatures,
  ShopFeaturesList,
  ShopFeaturesItem,
  ShopFeaturesInfo,
  ShopFeaturesItemIcon,
  ShopFeaturesItemTitle,
  ShopFeaturesItemSubTitle,
  ShopFeaturesDivider,
} from '~/styled-components/components/ShopFeatures';
import {
  BlockSplitItem,
  BlockSplitItemSidebar,
  BlockSplitRow,
  BlockSplit,
} from '~/styled-components/blocks/BlockSplit';
interface Props {
  product: IProduct;
  layout: IProductPageLayout;
  sidebarPosition?: IProductPageSidebarPosition;
}

function ShopPageProduct(props: Props) {
  const { product, layout, sidebarPosition = 'start' } = props;
  const intl = useIntl();
  const wishlistAddItem = useWishlistAddItem();
  const compareAddItem = useCompareAddItem();
  const galleryLayout = `product-${layout}` as IProductGalleryLayout;
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const productForm = useProductForm(product);

  useEffect(() => {
    let canceled = false;

    shopApi.getRelatedProducts(product.id, 8).then((result) => {
      if (canceled) {
        return;
      }

      setRelatedProducts(result);
    });

    return () => {
      canceled = true;
    };
  }, [product]);

  if (!product) {
    return null;
  }

  const breadcrumb = [
    { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
    { title: intl.formatMessage({ id: 'LINK_SHOP' }), url: url.shop() },
    ...getCategoryPath(product.categories && product.categories[0]).map(
      (x) => ({
        title: x.name,
        url: url.category(x),
      })
    ),
    { title: product.name, url: url.product(product) },
  ];

  // const featuredAttributes = product.attributes.filter((x) => x.featured);

  const shopFeatures = (
    <ShopFeatures>
      <ShopFeaturesList>
        <ShopFeaturesItem>
          <ShopFeaturesItemIcon>
            <FiFreeDelivery48Svg />
          </ShopFeaturesItemIcon>
          <ShopFeaturesInfo>
            <ShopFeaturesItemTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_TITLE" />
            </ShopFeaturesItemTitle>
            <ShopFeaturesItemSubTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_SUBTITLE" />
            </ShopFeaturesItemSubTitle>
          </ShopFeaturesInfo>
        </ShopFeaturesItem>
        <ShopFeaturesDivider role="presentation" />
        <ShopFeaturesItem>
          <ShopFeaturesItemIcon>
            <Fi24Hours48Svg />
          </ShopFeaturesItemIcon>
          <ShopFeaturesInfo>
            <ShopFeaturesItemTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_TITLE" />
            </ShopFeaturesItemTitle>
            <ShopFeaturesItemSubTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_SUBTITLE" />
            </ShopFeaturesItemSubTitle>
          </ShopFeaturesInfo>
        </ShopFeaturesItem>
        <ShopFeaturesDivider role="presentation" />
        <ShopFeaturesItem>
          <ShopFeaturesItemIcon>
            <FiPaymentSecurity48Svg />
          </ShopFeaturesItemIcon>
          <ShopFeaturesInfo>
            <ShopFeaturesItemTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_TITLE" />
            </ShopFeaturesItemTitle>
            <ShopFeaturesItemSubTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_SUBTITLE" />
            </ShopFeaturesItemSubTitle>
          </ShopFeaturesInfo>
        </ShopFeaturesItem>
        <ShopFeaturesDivider role="presentation" />
        <ShopFeaturesItem>
          <ShopFeaturesItemIcon>
            <FiTag48Svg />
          </ShopFeaturesItemIcon>
          <ShopFeaturesInfo>
            <ShopFeaturesItemTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_TITLE" />
            </ShopFeaturesItemTitle>
            <ShopFeaturesItemSubTitle>
              <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_SUBTITLE" />
            </ShopFeaturesItemSubTitle>
          </ShopFeaturesInfo>
        </ShopFeaturesItem>
        <ShopFeaturesDivider role="presentation" />
      </ShopFeaturesList>
    </ShopFeatures>
  );

  const productInfoBody = (
    <ProductInfoBody>
      {product.compareAtPrice && (
        <TagBadgeSale>
          <FormattedMessage id="TEXT_BADGE_SALE" />
        </TagBadgeSale>
      )}

      <ProductPricesStock>
        <ProductPrices>
          {product.compareAtPrice && (
            <React.Fragment>
              <ProdcutPriceOld>
                <CurrencyFormat value={product.compareAtPrice} />
              </ProdcutPriceOld>
              <ProductNewPrice>
                <CurrencyFormat value={product.price} />
              </ProductNewPrice>
            </React.Fragment>
          )}
          {!product.compareAtPrice && (
            <ProductPriceCurrent>
              <CurrencyFormat value={product.price} />
            </ProductPriceCurrent>
          )}
        </ProductPrices>
        <StockStatusBadge stock={product.stock} />
      </ProductPricesStock>

      <ProductMeta>
        <table>
          <tbody>
            <tr>
              <th>
                <FormattedMessage id="TABLE_SKU" />
              </th>
              <td>{product.sku}</td>
            </tr>
            {product.brand && (
              <React.Fragment>
                <tr>
                  <th>
                    <FormattedMessage id="TABLE_BRAND" />
                  </th>
                  <td>
                    <AppLink href={url.brand(product.brand)}>
                      {product.brand.name}
                    </AppLink>
                  </td>
                </tr>
                <tr>
                  <th>
                    <FormattedMessage id="TABLE_COUNTRY" />
                  </th>
                  <td>
                    <FormattedMessage
                      id={`COUNTRY_NAME_${product.brand.country}`}
                    />
                  </td>
                </tr>
              </React.Fragment>
            )}
            <tr>
              <th>
                <FormattedMessage id="TABLE_PART_NUMBER" />
              </th>
              <td>{product.partNumber}</td>
            </tr>
          </tbody>
        </table>
      </ProductMeta>
    </ProductInfoBody>
  );

  const productActions = (
    <ProductActions>
      {product.stock !== 'out-of-stock' && (
        <React.Fragment>
          <ProductActionsitemQuantity>
            <Controller
              name="quantity"
              rules={{
                required: true,
              }}
              render={({ value, onChange, onBlur }) => (
                <InputNumber
                  size="lg"
                  min={1}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </ProductActionsitemQuantity>
          <ProductItemAdditemAddCart>
            <button
              type="submit"
              className={classNames(
                'btn',
                'btn-primary',
                'btn-lg',
                'btn-block',
                {
                  'btn-loading': productForm.submitInProgress,
                }
              )}
            >
              <FormattedMessage id="BUTTON_ADD_TO_CART" />
            </button>
          </ProductItemAdditemAddCart>
          <ProductActionsDivider />
        </React.Fragment>
      )}
      <AsyncAction
        action={() => wishlistAddItem(product)}
        render={({ run, loading }) => (
          <ProductActionsItemWishlist
            loading={loading ? 1 : 0}
            type="button"
            onClick={run}
          >
            <Wishlist16Svg />
            <span>
              <FormattedMessage id="BUTTON_ADD_TO_WISHLIST" />
            </span>
          </ProductActionsItemWishlist>
        )}
      />
      <AsyncAction
        action={() => compareAddItem(product)}
        render={({ run, loading }) => (
          <ProductActionsItemCompare
            loading={loading ? 1 : 0}
            type="button"
            onClick={run}
          >
            <Compare16Svg />
            <span>
              <FormattedMessage id="BUTTON_ADD_TO_COMPARE" />
            </span>
          </ProductActionsItemCompare>
        )}
      />
    </ProductActions>
  );

  const productTagsAndShareLinks = (
    <ProductTagsAndShareLinks>
      {product.tags && product.tags.length > 0 && (
        <Tags>
          <TagList>
            {product.tags.map((tag, index) => (
              <AppLink href="/" key={index}>
                {tag}
              </AppLink>
            ))}
          </TagList>
        </Tags>
      )}
      <ProductShareLinks />
    </ProductTagsAndShareLinks>
  );

  return (
    <React.Fragment>
      <PageTitle>{product.name}</PageTitle>

      <BlockHeader breadcrumb={breadcrumb} />

      <BlockSplit>
        <div className="container">
          <BlockSplitRow className="row no-gutters">
            {layout === 'sidebar' && sidebarPosition === 'start' && (
              <BlockSplitItemSidebar className="block-split__item  col-auto">
                <ProductSidebar />
              </BlockSplitItemSidebar>
            )}

            <BlockSplitItem className=" block-split__item col-auto">
              <div>
                <ProductBody>
                  <ProductCardOne />
                  <ProductCardTwo />

                  <ProductsGallery
                    images={product.images || []}
                    layout={galleryLayout}
                  />

                  <ProductHeader>
                    <ProductTitle>{product.name}</ProductTitle>

                    <ProductSubTitle>
                      <ProductRating>
                        <ProductRatingStars>
                          <Rating value={product.rating || 0} />
                        </ProductRatingStars>
                        <ProductRatingLabel>
                          <AppLink
                            href={{ href: { hash: 'product-tab-reviews' } }}
                          >
                            <FormattedMessage
                              id="TEXT_RATING_LABEL"
                              values={{
                                rating: product.rating,
                                reviews: product.reviews,
                              }}
                            />
                          </AppLink>
                        </ProductRatingLabel>
                      </ProductRating>

                      <ProductFit product={product} />
                    </ProductSubTitle>
                  </ProductHeader>

                  {layout === 'full' && (
                    <ProductMain>
                      {product.excerpt && (
                        <ProductExcert>{product.excerpt}</ProductExcert>
                      )}

                      {/* {featuredAttributes.length > 0 && (
                        <ProductFeatures>
                          <ProductFeaturesTitle>
                            <FormattedMessage id="TEXT_KEY_FEATURES" />:
                          </ProductFeaturesTitle>
                          <ul>
                            {featuredAttributes.map((attribute, index) => (
                              <li key={index}>
                                {attribute.name}
                                {': '}
                                <span>
                                  {attribute.values
                                    .map((value) => value.name)
                                    .join(', ')}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <ProductFeaturesLink>
                            <AppLink
                              href={{
                                href: { hash: 'product-tab-specification' },
                              }}
                            >
                              <FormattedMessage id="LINK_SEE_FULL_SPECIFICATION" />
                            </AppLink>
                          </ProductFeaturesLink>
                        </ProductFeatures>
                      )} */}
                    </ProductMain>
                  )}

                  <ProductInfo>
                    <FormProvider {...productForm.methods}>
                      <ProdcutInfoCard onSubmit={productForm.submit}>
                        {productInfoBody}

                        {product.options.length > 0 && (
                          <ProductFormForm
                            options={product.options}
                            namespace="options"
                          />
                        )}

                        {productActions}

                        {productTagsAndShareLinks}
                      </ProdcutInfoCard>
                    </FormProvider>

                    {shopFeatures}
                  </ProductInfo>

                  {/* <ProductTabsTabs product={product} layout={layout} /> */}
                </ProductBody>
              </div>

              {relatedProducts.length > 0 && (
                <React.Fragment>
                  <BlockSpace layout="divider-nl" />

                  <BlockProductsCarousel
                    blockTitle={intl.formatMessage({
                      id: 'HEADER_RELATED_PRODUCTS',
                    })}
                    products={relatedProducts}
                    layout={layout === 'sidebar' ? 'grid-4-sidebar' : 'grid-5'}
                  />
                </React.Fragment>
              )}
            </BlockSplitItem>

            {layout === 'sidebar' && sidebarPosition === 'end' && (
              <BlockSplitItemSidebar className="block-split__item  col-auto">
                <ProductSidebar />
              </BlockSplitItemSidebar>
            )}
          </BlockSplitRow>
        </div>
      </BlockSplit>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default React.memo(ShopPageProduct);
