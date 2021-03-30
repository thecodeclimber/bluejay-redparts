// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CompatibilityStatusBadge from '~/components/shared/CompatibilityStatusBadge';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import { useCartAddItem } from '~/store/cart/cartHooks';
import { useCompareAddItem } from '~/store/compare/compareHooks';
import { useQuickviewOpen } from '~/store/quickview/quickviewHooks';
import { useWishlistAddItem } from '~/store/wishlist/wishlistHooks';
import {
  ProductCardLayout,
  ProductCardActionsList,
  ProductCardActionQuickView,
  ProductCardActionWishList,
  ProductCardActionCompare,
  ProductCardMeta,
  ProductCardbadges,
  TagBadge,
  ProductCardRatingLabel,
  ProductCardRatingStars,
  ProductCardFeatures,
  ProductCardPriceOld,
  ProductCardPriceNew,
  CurrentCardProductPrice,
  ImageTag,
  ImageBody,
  ImageTypeProduct,
  ProductCardAddToCartIcon,
  ProductCardAddToCartFull,
  ProductCardWishList,
  ProductCardCompare,
} from '~/styled-components/mixin/ProductCard';
import { Cart20Svg, Compare16Svg, Quickview16Svg, Wishlist16Svg } from '~/svg';

export type IProductCardElement =
  | 'actions'
  | 'status-badge'
  | 'meta'
  | 'features'
  | 'buttons'
  | 'list-buttons';

export type IProductCardLayout = 'grid' | 'list' | 'table' | 'horizontal';

interface Props extends React.HTMLAttributes<HTMLElement> {
  product: IProduct;
  layout?: IProductCardLayout;
  exclude?: IProductCardElement[];
}

function ProductCard(props: Props) {
  const { product, layout, exclude = [], className, ...rootProps } = props;
  const intl = useIntl();
  const featuredAttributes = product.attributes.filter((x) => x.featured);
  const cartAddItem = useCartAddItem();
  const quickviewOpen = useQuickviewOpen();
  const compareAddItem = useCompareAddItem();
  const wishlistAddItem = useWishlistAddItem();

  const showQuickview = () => quickviewOpen(product.slug);
  const addToWishlist = () => wishlistAddItem(product);
  const addToCompare = () => compareAddItem(product);

  const rootClasses = classNames('product-card', className, {
    [`product-card--layout--${layout}`]: layout,
  });

  return (
    <ProductCardLayout className={rootClasses} {...rootProps}>
      <ProductCardActionsList>
        <AsyncAction
          action={() => showQuickview()}
          render={({ run, loading }) => (
            <ProductCardActionQuickView
              loading={loading ? 1 : 0}
              type="button"
              aria-label={intl.formatMessage({ id: 'BUTTON_QUICKVIEW' })}
              onClick={run}
            >
              <Quickview16Svg />
            </ProductCardActionQuickView>
          )}
        />

        {!exclude.includes('actions') && (
          <React.Fragment>
            <AsyncAction
              action={() => addToWishlist()}
              render={({ run, loading }) => (
                <ProductCardActionWishList
                  loading={loading ? 1 : 0}
                  type="button"
                  aria-label={intl.formatMessage({
                    id: 'BUTTON_ADD_TO_WISHLIST',
                  })}
                  onClick={run}
                >
                  <Wishlist16Svg />
                </ProductCardActionWishList>
              )}
            />
            <AsyncAction
              action={() => addToCompare()}
              render={({ run, loading }) => (
                <ProductCardActionCompare
                  loading={loading ? 1 : 0}
                  type="button"
                  aria-label={intl.formatMessage({
                    id: 'BUTTON_ADD_TO_COMPARE',
                  })}
                  onClick={run}
                >
                  <Compare16Svg />
                </ProductCardActionCompare>
              )}
            />
          </React.Fragment>
        )}
      </ProductCardActionsList>

      <div className="product-card__image">
        <ImageTypeProduct>
          <ImageBody href={url.product(product)}>
            {product.images && <ImageTag src={product.images[0]} />}
          </ImageBody>
        </ImageTypeProduct>

        {!exclude.includes('status-badge') && (
          <CompatibilityStatusBadge
            className="product-card__fit"
            product={product}
          />
        )}
      </div>

      <div className="product-card__info">
        {!exclude.includes('meta') && (
          <ProductCardMeta>
            <span>
              <FormattedMessage id="TEXT_SKU" />
              {': '}
            </span>
            {product.sku}
          </ProductCardMeta>
        )}

        <div className="product-card__name">
          {product.badges && product.badges.length > 0 && (
            <ProductCardbadges>
              {product.badges.map((badge) => (
                <TagBadge badge={badge} key={badge}>
                  {badge}
                </TagBadge>
              ))}
            </ProductCardbadges>
          )}
          <AppLink href={url.product(product)}>{product.name}</AppLink>
        </div>

        <div className="product-card__rating">
          <ProductCardRatingStars value={product.rating || 0} />
          <ProductCardRatingLabel>
            <FormattedMessage
              id="TEXT_RATING_LABEL"
              values={{
                rating: product.rating,
                reviews: product.reviews,
              }}
            />
          </ProductCardRatingLabel>
        </div>

        {!exclude.includes('features') && featuredAttributes.length > 0 && (
          <ProductCardFeatures>
            <ul>
              {featuredAttributes.map((attribute, index) => (
                <li key={index}>
                  {attribute.name}
                  {': '}
                  {attribute.values.map((x) => x.name).join(', ')}
                </li>
              ))}
            </ul>
          </ProductCardFeatures>
        )}
      </div>

      <div className="product-card__footer">
        <div className="product-card__prices">
          {product.compareAtPrice !== null && (
            <React.Fragment>
              <ProductCardPriceNew>
                <CurrencyFormat value={product.price} />
              </ProductCardPriceNew>
              <ProductCardPriceOld>
                <CurrencyFormat value={product.compareAtPrice} />
              </ProductCardPriceOld>
            </React.Fragment>
          )}
          {product.compareAtPrice === null && (
            <CurrentCardProductPrice>
              <CurrencyFormat value={product.price} />
            </CurrentCardProductPrice>
          )}
        </div>
        {!exclude.includes('buttons') && (
          <React.Fragment>
            <AsyncAction
              action={() => cartAddItem(product)}
              render={({ run, loading }) => (
                <ProductCardAddToCartIcon
                  loading={loading ? 1 : 0}
                  type="button"
                  aria-label={intl.formatMessage({ id: 'BUTTON_ADD_TO_CART' })}
                  onClick={run}
                >
                  <Cart20Svg />
                </ProductCardAddToCartIcon>
              )}
            />
            {!exclude.includes('list-buttons') && (
              <React.Fragment>
                <AsyncAction
                  action={() => cartAddItem(product)}
                  render={({ run, loading }) => (
                    <ProductCardAddToCartFull
                      loading={loading ? 1 : 0}
                      type="button"
                      onClick={run}
                    >
                      <FormattedMessage id="BUTTON_ADD_TO_CART" />
                    </ProductCardAddToCartFull>
                  )}
                />
                <AsyncAction
                  action={() => addToWishlist()}
                  render={({ run, loading }) => (
                    <ProductCardWishList
                      loading={loading ? 1 : 0}
                      type="button"
                      onClick={run}
                    >
                      <Wishlist16Svg />
                      <span>
                        <FormattedMessage id="BUTTON_ADD_TO_WISHLIST" />
                      </span>
                    </ProductCardWishList>
                  )}
                />
                <AsyncAction
                  action={() => addToCompare()}
                  render={({ run, loading }) => (
                    <ProductCardCompare
                      loading={loading ? 1 : 0}
                      type="button"
                      onClick={run}
                    >
                      <Compare16Svg />
                      <span>
                        <FormattedMessage id="BUTTON_ADD_TO_COMPARE" />
                      </span>
                    </ProductCardCompare>
                  )}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </ProductCardLayout>
  );
}

export default React.memo(ProductCard);
