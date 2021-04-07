// react
import React, { useMemo, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  CompareTableColumnHeader,
  CompareTableColumnProduct,
  CompareTableColumnFake,
  CompareTableProductImage,
  CompareTableProduct,
  CompareTableProductName,
  CompareTableRatingStars,
  CompareTableRatingTitle,
  CompareTable,
} from '~/styled-components/shop/CompareTable';
import {
  BlockEmpty,
  BlockEmptyBody,
  BlockEmptyTitle,
  BlockEmptyMessage,
  BlockEmptyAction,
} from '~/styled-components/blocks/BlockEmpty';
import {
  CompareOptionsList,
  CompareOption,
  CompareOptionLabel,
} from '~/styled-components/shop/Compare';
import { ImageBody, ImageTag } from '~/styled-components/components/Image';
import {
  ButtonToggleList,
  ButtonToggleItem,
  ButtonToggleInput,
  ButtonToggleButton,
} from '~/styled-components/components/ButtonToggle';
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
import { IProductAttributeValue } from '~/interfaces/product';
import { useCartAddItem } from '~/store/cart/cartHooks';
import {
  useCompare,
  useCompareClear,
  useCompareRemoveItem,
} from '~/store/compare/compareHooks';

interface Attribute {
  slug: string;
  name: string;
  sameValues: boolean;
  values: { [productId: number]: IProductAttributeValue[] };
}

function Page() {
  const intl = useIntl();
  const compare = useCompare();
  const compareClear = useCompareClear();
  const cartAddItem = useCartAddItem();
  const compareRemoveItem = useCompareRemoveItem();
  const products = compare.items;
  const [show, setShow] = useState('all');

  const attributes: Attribute[] = useMemo(() => {
    const attributes: Attribute[] = [];

    products.forEach((product) =>
      product.attributes.forEach((pa) => {
        let attribute = attributes.find((x) => x.slug === pa.slug);

        if (!attribute) {
          attribute = {
            slug: pa.slug,
            name: pa.name,
            sameValues: false,
            values: {},
          };

          attributes.push(attribute);
        }

        attribute.values[product.id] = pa.values;
      })
    );

    for (let i = 0; i < attributes.length; i += 1) {
      const attribute = attributes[i];
      const values = products.map((product) =>
        (attribute.values[product.id] || []).map((x) => x.slug).sort()
      );

      attribute.sameValues = values.reduce<boolean>(
        (sameValues, curr) =>
          sameValues &&
          values[0].length === curr.length &&
          values[0].join() === curr.join(),
        true
      );
    }

    return attributes;
  }, [products]);
  const differentAttributes = useMemo(
    () => attributes.filter((x) => !x.sameValues),
    [attributes]
  );
  const currentAttributes = show === 'all' ? attributes : differentAttributes;

  if (compare.items.length === 0) {
    return (
      <React.Fragment>
        <PageTitle>{intl.formatMessage({ id: 'HEADER_COMPARE' })}</PageTitle>

        <BlockHeader
          breadcrumb={[
            { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
            { title: intl.formatMessage({ id: 'LINK_COMPARE' }), url: '' },
          ]}
        />

        <BlockEmpty>
          <div className="container">
            <BlockEmptyBody>
              <BlockEmptyTitle as="h1">
                <FormattedMessage id="HEADER_COMPARE_EMPTY_TITLE" />
              </BlockEmptyTitle>
              <BlockEmptyMessage
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: 'HEADER_COMPARE_EMPTY_SUBTITLE',
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
        </BlockEmpty>

        <BlockSpace layout="before-footer" />
      </React.Fragment>
    );
  }

  const tbody = (
    <tbody>
      <tr>
        <CompareTableColumnHeader as="th">
          <FormattedMessage id="TABLE_PRODUCT" />
        </CompareTableColumnHeader>
        {compare.items.map((product) => (
          <CompareTableColumnProduct as="td" key={product.id}>
            <CompareTableProduct as={AppLink} href={url.product(product)}>
              <CompareTableProductImage>
                <ImageBody>
                  <ImageTag
                    as={AppImage}
                    src={product.images && product.images[0]}
                  />
                </ImageBody>
              </CompareTableProductImage>
              <CompareTableProductName>{product.name}</CompareTableProductName>
            </CompareTableProduct>
          </CompareTableColumnProduct>
        ))}
        <CompareTableColumnFake as="td" />
      </tr>
      <tr>
        <CompareTableColumnHeader as="th">
          <FormattedMessage id="TABLE_RATING" />
        </CompareTableColumnHeader>
        {compare.items.map((product) => (
          <CompareTableColumnProduct as="td" key={product.id}>
            <div>
              <CompareTableRatingStars>
                <Rating value={product.rating || 0} />
              </CompareTableRatingStars>
              <CompareTableRatingTitle>
                <FormattedMessage
                  id="TEXT_RATING_LABEL"
                  values={{ rating: product.rating, reviews: product.reviews }}
                />
              </CompareTableRatingTitle>
            </div>
          </CompareTableColumnProduct>
        ))}
        <CompareTableColumnFake as="td" />
      </tr>
      <tr>
        <CompareTableColumnHeader as="th">
          <FormattedMessage id="TABLE_STOCK_STATUS" />
        </CompareTableColumnHeader>
        {compare.items.map((product) => (
          <CompareTableColumnProduct as="td" key={product.id}>
            <StockStatusBadge stock={product.stock} />
          </CompareTableColumnProduct>
        ))}
        <CompareTableColumnFake as="td" />
      </tr>
      <tr>
        <CompareTableColumnHeader as="th">
          <FormattedMessage id="TABLE_PRICE" />
        </CompareTableColumnHeader>
        {compare.items.map((product) => (
          <CompareTableColumnProduct as="td" key={product.id}>
            <CurrencyFormat value={product.price} />
          </CompareTableColumnProduct>
        ))}
        <CompareTableColumnProduct as="td" />
      </tr>
      <tr>
        <CompareTableColumnHeader as="th">
          <span className="sr-only">
            <FormattedMessage id="TABLE_ADD_TO_CART" />
          </span>
        </CompareTableColumnHeader>
        {compare.items.map((product) => (
          <CompareTableColumnProduct as="td" key={product.id}>
            <AsyncAction
              action={() => cartAddItem(product)}
              render={({ run, loading }) => (
                <button
                  type="button"
                  className={classNames('btn btn-sm btn-primary', {
                    'btn-loading': loading,
                  })}
                  onClick={run}
                >
                  <FormattedMessage id="BUTTON_ADD_TO_CART" />
                </button>
              )}
            />
          </CompareTableColumnProduct>
        ))}
        <CompareTableColumnProduct as="td" />
      </tr>
      <tr>
        <CompareTableColumnHeader as="th">
          <FormattedMessage id="TABLE_SKU" />
        </CompareTableColumnHeader>
        {compare.items.map((product) => (
          <CompareTableColumnProduct as="td" key={product.id}>
            {product.sku}
          </CompareTableColumnProduct>
        ))}
        <CompareTableColumnProduct as="td" />
      </tr>
      {currentAttributes.map((attribute, index) => (
        <tr key={index}>
          <CompareTableColumnHeader as="th">
            {attribute.name}
          </CompareTableColumnHeader>
          {compare.items.map((product) => (
            <CompareTableColumnProduct as="td" key={product.id}>
              {attribute.values[product.id]?.length > 0 &&
                attribute.values[product.id]
                  .map((value) => value.name)
                  .join(', ')}
              {attribute.values[product.id]?.length === 0 && '—'}
            </CompareTableColumnProduct>
          ))}
          <CompareTableColumnProduct as="td" />
        </tr>
      ))}
      <tr>
        <CompareTableColumnHeader as="th">
          <span className="sr-only">
            <FormattedMessage id="TABLE_REMOVE" />
          </span>
        </CompareTableColumnHeader>
        {compare.items.map((product) => (
          <CompareTableColumnProduct as="td" key={product.id}>
            <AsyncAction
              action={() => compareRemoveItem(product.id)}
              render={({ run, loading }) => (
                <button
                  type="button"
                  className={classNames('btn', 'btn-sm', 'btn-secondary', {
                    'btn-loading': loading,
                  })}
                  onClick={run}
                >
                  <FormattedMessage id="BUTTON_REMOVE" />
                </button>
              )}
            />
          </CompareTableColumnProduct>
        ))}
        <CompareTableColumnProduct as="td" />
      </tr>
    </tbody>
  );

  return (
    <React.Fragment>
      <PageTitle>{intl.formatMessage({ id: 'HEADER_COMPARE' })}</PageTitle>

      <BlockHeader
        pageTitle={<FormattedMessage id="HEADER_COMPARE" />}
        breadcrumb={[
          { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
          { title: intl.formatMessage({ id: 'LINK_COMPARE' }), url: '' },
        ]}
      />

      <div className="block">
        <div className="container">
          <div className="card">
            <CompareOptionsList>
              <CompareOption>
                <CompareOptionLabel>
                  <FormattedMessage id="INPUT_SHOW_LABEL" />:
                </CompareOptionLabel>
                <div>
                  <div>
                    <ButtonToggleList>
                      <ButtonToggleItem as="label">
                        <ButtonToggleInput
                          as="input"
                          type="radio"
                          name="compare-filter"
                          value="all"
                          checked={show === 'all'}
                          onChange={() => setShow('all')}
                        />
                        <ButtonToggleButton>
                          <FormattedMessage id="INPUT_SHOW_OPTION_ALL" />
                        </ButtonToggleButton>
                      </ButtonToggleItem>
                      <ButtonToggleItem as="label">
                        <ButtonToggleInput
                          as="input"
                          type="radio"
                          name="compare-filter"
                          value="different"
                          checked={show === 'different'}
                          onChange={() => setShow('different')}
                        />
                        <ButtonToggleButton>
                          <FormattedMessage id="INPUT_SHOW_OPTION_DIFFERENT" />
                        </ButtonToggleButton>
                      </ButtonToggleItem>
                    </ButtonToggleList>
                  </div>
                </div>
              </CompareOption>
              <CompareOption>
                <div>
                  <AsyncAction
                    action={compareClear}
                    render={({ run, loading }) => (
                      <button
                        type="button"
                        className={classNames(
                          'btn',
                          'btn-secondary',
                          'btn-xs',
                          {
                            'btn-loading': loading,
                          }
                        )}
                        onClick={run}
                      >
                        <FormattedMessage id="BUTTON_CLEAR_LIST" />
                      </button>
                    )}
                  />
                </div>
              </CompareOption>
            </CompareOptionsList>

            <div className="table-responsive">
              <CompareTable as="table">{tbody}</CompareTable>
            </div>
          </div>
        </div>
      </div>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
