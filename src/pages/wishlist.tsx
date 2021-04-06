// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  BlockEmptyTitle,
  BlockEmptyMessage,
  BlockEmptyAction,
  Wishlist,
  WishlistTable,
  WishlistHead,
  WishlistRow,
  WishlistColumnHead,
  WishListBody,
  WishlistColumnBody,
  WishlistProductName,
  WishlistProductRating,
  WishlistProductRatingTitle,
  WishlistRemove,
  BlockEmptyBody,
} from '~/styled-components/common/Wishlist';
import {
  ImageTag,
  ImageBody,
  ImageTypeProduct,
} from '~/styled-components/components/Image';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import Rating from '~/components/shared/Rating';
import StockStatusBadge from '~/components/shared/StockStatusBadge';
import url from '~/services/url';
import { Cross12Svg } from '~/svg';
import { useCartAddItem } from '~/store/cart/cartHooks';
import {
  useWishlist,
  useWishlistRemoveItem,
} from '~/store/wishlist/wishlistHooks';

function Page() {
  const intl = useIntl();
  const wishlist = useWishlist();
  const cartAddItem = useCartAddItem();
  const wishlistRemoveItem = useWishlistRemoveItem();
  const { items } = wishlist;

  if (items.length === 0) {
    return (
      <React.Fragment>
        <PageTitle>{intl.formatMessage({ id: 'HEADER_WISHLIST' })}</PageTitle>

        <BlockHeader
          breadcrumb={[
            { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
            { title: intl.formatMessage({ id: 'LINK_WISHLIST' }), url: '/' },
          ]}
        />

        <div className="block-empty">
          <div className="container">
            <BlockEmptyBody>
              <BlockEmptyTitle as="h1">
                <FormattedMessage id="HEADER_WISHLIST_EMPTY_TITLE" />
              </BlockEmptyTitle>
              <BlockEmptyMessage
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: 'HEADER_WISHLIST_EMPTY_SUBTITLE',
                  }),
                }}
              />
              <BlockEmptyAction>
                <AppLink href={url.home()} className="btn btn-primary btn-sm">
                  <FormattedMessage id="BUTTON_GO_TO_HOMEPAGE" />
                </AppLink>
              </BlockEmptyAction>
            </BlockEmptyBody>
          </div>
        </div>

        <BlockSpace layout="before-footer" />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <PageTitle>{intl.formatMessage({ id: 'HEADER_WISHLIST' })}</PageTitle>

      <BlockHeader
        pageTitle={<FormattedMessage id="HEADER_WISHLIST" />}
        breadcrumb={[
          { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
          { title: intl.formatMessage({ id: 'LINK_WISHLIST' }), url: '/' },
        ]}
      />

      <div className="block">
        <div className="container container--max--xl">
          <Wishlist>
            <WishlistTable>
              <WishlistHead>
                <WishlistRow as="tr">
                  <WishlistColumnHead columnimage>
                    <FormattedMessage id="TABLE_IMAGE" />
                  </WishlistColumnHead>
                  <WishlistColumnHead columnproduct>
                    <FormattedMessage id="TABLE_PRODUCT" />
                  </WishlistColumnHead>
                  <WishlistColumnHead columnstock>
                    <FormattedMessage id="TABLE_STOCK_STATUS" />
                  </WishlistColumnHead>
                  <WishlistColumnHead columnprice>
                    <FormattedMessage id="TABLE_PRICE" />
                  </WishlistColumnHead>
                  <WishlistColumnHead columnbutton>
                    <span className="sr-only">
                      <FormattedMessage id="TABLE_ADD_TO_CART" />
                    </span>
                  </WishlistColumnHead>
                  <WishlistColumnHead columnremove>
                    <span className="sr-only">
                      <FormattedMessage id="TABLE_REMOVE" />
                    </span>
                  </WishlistColumnHead>
                </WishlistRow>
              </WishlistHead>
              <WishListBody>
                {items.map((product, index) => (
                  <WishlistRow as="tr" key={index}>
                    <WishlistColumnBody columnimage>
                      <ImageTypeProduct>
                        <ImageBody as={AppLink} href={url.product(product)}>
                          <ImageTag
                            as={AppImage}
                            src={product.images && product.images[0]}
                          />
                        </ImageBody>
                      </ImageTypeProduct>
                    </WishlistColumnBody>
                    <WishlistColumnBody columnproduct>
                      <WishlistProductName>
                        <AppLink href={url.product(product)}>
                          {product.name}
                        </AppLink>
                      </WishlistProductName>
                      <WishlistProductRating>
                        <div>
                          <Rating value={product.rating || 0} />
                        </div>
                        <WishlistProductRatingTitle>
                          <FormattedMessage
                            id="TEXT_RATING_LABEL"
                            values={{
                              rating: product.rating,
                              reviews: product.reviews,
                            }}
                          />
                        </WishlistProductRatingTitle>
                      </WishlistProductRating>
                    </WishlistColumnBody>
                    <WishlistColumnBody columnstock>
                      <StockStatusBadge stock={product.stock} />
                    </WishlistColumnBody>
                    <WishlistColumnBody columnprice>
                      <CurrencyFormat value={product.price} />
                    </WishlistColumnBody>
                    <WishlistColumnBody columnbutton>
                      <AsyncAction
                        action={() => cartAddItem(product)}
                        render={({ run, loading }) => (
                          <button
                            type="button"
                            className={classNames(
                              'btn',
                              'btn-sm',
                              'btn-primary',
                              {
                                'btn-loading': loading,
                              }
                            )}
                            onClick={run}
                          >
                            <FormattedMessage id="BUTTON_ADD_TO_CART" />
                          </button>
                        )}
                      />
                    </WishlistColumnBody>
                    <WishlistColumnBody columnremove>
                      <AsyncAction
                        action={() => wishlistRemoveItem(product.id)}
                        render={({ run, loading }) => (
                          <WishlistRemove
                            type="button"
                            className={classNames(
                              'btn',
                              'btn-sm',
                              'btn-muted',
                              'btn-icon',
                              {
                                'btn-loading': loading,
                              }
                            )}
                            onClick={run}
                          >
                            <Cross12Svg />
                          </WishlistRemove>
                        )}
                      />
                    </WishlistColumnBody>
                  </WishlistRow>
                ))}
              </WishListBody>
            </WishlistTable>
          </Wishlist>
        </div>
      </div>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
