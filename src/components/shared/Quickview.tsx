// react
import React, { useCallback, useMemo } from 'react';
// third-party
import classNames from 'classnames';
import { Controller, FormProvider } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import InputNumber from '~/components/shared/InputNumber';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import { Compare16Svg, Cross12Svg, Wishlist16Svg } from '~/svg';
import { useCompareAddItem } from '~/store/compare/compareHooks';
import { useProductForm } from '~/services/forms/product';
import {
  useQuickview,
  useQuickviewClose,
} from '~/store/quickview/quickviewHooks';
import { useWishlistAddItem } from '~/store/wishlist/wishlistHooks';
import {
  QuickView,
  QuickViewClose,
  QuickViewBody,
  QuickViewGallery,
  QuickViewSeeDetails,
  QuickViewProduct,
  QuickViewProductName,
  QuickViewProductRating,
  QuickViewProductRatingTitle,
  QuickViewProductMeta,
  QuickViewProductDescription,
  QuickViewProductPriceStock,
  QuickViewProductPrice,
  QuickViewProductOldPrice,
  QuickViewProductNewPrice,
  QuickViewProductPriceCurrent,
  QuickViewProductStock,
  QuickViewProductForm,
  QuickViewProductAction,
  QuickViewProductActionItemQuantity,
  QuickViewProductActionItemAddToCart,
  QuickViewProductActionItemWishList,
  QuickViewProductActionsItemCompare,
} from '~/styled-components/shop/QuickView';
function Quickview() {
  const quickview = useQuickview();
  const quickviewClose = useQuickviewClose();
  const wishlistAddItem = useWishlistAddItem();
  const compareAddItem = useCompareAddItem();
  const { product } = quickview;
  const image = useMemo(() => product?.images || [], [product]);
  const productForm = useProductForm(product);

  const toggle = useCallback(() => {
    if (quickview.open) {
      quickviewClose();
    }
  }, [quickview.open, quickviewClose]);

  if (!product) {
    return null;
  }

  const productTemplate = (
    <QuickViewProduct>
      <QuickViewProductName>{product.name}</QuickViewProductName>
      <QuickViewProductRating>
        <div>
          <Rating value={product.rating || 0} />
        </div>
        <QuickViewProductRatingTitle>
          <FormattedMessage
            id="TEXT_RATING_LABEL"
            values={{
              rating: product.rating,
              reviews: product.reviews,
            }}
          />
        </QuickViewProductRatingTitle>
      </QuickViewProductRating>
      <QuickViewProductMeta>
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
      </QuickViewProductMeta>
      {product.excerpt && (
        <QuickViewProductDescription>
          {product.excerpt}
        </QuickViewProductDescription>
      )}
      <QuickViewProductPriceStock>
        <QuickViewProductPrice>
          {product.compareAtPrice !== null && (
            <React.Fragment>
              <QuickViewProductOldPrice>
                <CurrencyFormat value={product.compareAtPrice} />
              </QuickViewProductOldPrice>
              <QuickViewProductNewPrice>
                <CurrencyFormat value={product.price} />
              </QuickViewProductNewPrice>
            </React.Fragment>
          )}
          {product.compareAtPrice === null && (
            <QuickViewProductPriceCurrent>
              <CurrencyFormat value={product.price} />
            </QuickViewProductPriceCurrent>
          )}
        </QuickViewProductPrice>
        <QuickViewProductStock stock={product.stock} />
      </QuickViewProductPriceStock>

      <QuickViewProductForm options={product.options} namespace="options" />

      <QuickViewProductAction>
        <QuickViewProductActionItemQuantity>
          <Controller
            name="quantity"
            rules={{ required: true }}
            render={({ value, onChange, onBlur }) => (
              <InputNumber
                min={1}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </QuickViewProductActionItemQuantity>
        <QuickViewProductActionItemAddToCart>
          <button
            type="submit"
            className={classNames('btn', 'btn-primary', 'btn-block', {
              'btn-loading': productForm.submitInProgress,
            })}
          >
            <FormattedMessage id="BUTTON_ADD_TO_CART" />
          </button>
        </QuickViewProductActionItemAddToCart>

        <AsyncAction
          action={() => wishlistAddItem(product)}
          render={({ run, loading }) => (
            <QuickViewProductActionItemWishList>
              <button
                type="button"
                className={classNames('btn btn-muted btn-icon', {
                  'btn-loading': loading,
                })}
                onClick={run}
              >
                <Wishlist16Svg />
              </button>
            </QuickViewProductActionItemWishList>
          )}
        />

        <AsyncAction
          action={() => compareAddItem(product)}
          render={({ run, loading }) => (
            <QuickViewProductActionsItemCompare>
              <button
                type="button"
                className={classNames('btn btn-muted btn-icon', {
                  'btn-loading': loading,
                })}
                onClick={run}
              >
                <Compare16Svg />
              </button>
            </QuickViewProductActionsItemCompare>
          )}
        />
      </QuickViewProductAction>
    </QuickViewProduct>
  );

  return (
    <QuickView isOpen={quickview.open} toggle={toggle} centered>
      <QuickViewClose type="button" onClick={quickviewClose}>
        <Cross12Svg />
      </QuickViewClose>

      <FormProvider {...productForm.methods}>
        <QuickViewBody onSubmit={productForm.submit}>
          <QuickViewGallery layout="quickview" images={image} />

          {productTemplate}
        </QuickViewBody>
      </FormProvider>

      <QuickViewSeeDetails href={url.product(product)}>
        <FormattedMessage id="BUTTON_SEE_FULL_DETAILS" />
      </QuickViewSeeDetails>
    </QuickView>
  );
}

export default Quickview;
