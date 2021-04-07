// react
import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  BlockEmpty,
  BlockEmptyBody,
  BlockEmptyTitle,
  BlockEmptyAction,
} from '~/styled-components/blocks/BlockEmpty';
import {
  CardBodyPadding2,
  CardTitle,
} from '~/styled-components/components/Card';
import {
  ImageTypeProduct,
  ImageBody,
  ImageTag,
} from '~/styled-components/components/Image';
import {
  CartTableTable,
  CartTableHead,
  CartTableBody,
  CartTableRow,
  CartTableColumn,
  CartTableProductName,
  CartTableFoot,
  CartTableAction,
  CartTableCouponForm,
  CartTableUpdateButton,
  CartTotals,
  CartTable,
  CartTotalsTable,
  CartTableRemove,
  CartTableQuantity,
  CartTableOptions,
} from '~/styled-components/shop/CartTable';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import InputNumber from '~/components/shared/InputNumber';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { Cross12Svg } from '~/svg';
import { ICartItem } from '~/store/cart/cartTypes';
import {
  useCart,
  useCartRemoveItem,
  useCartUpdateQuantities,
} from '~/store/cart/cartHooks';

interface Quantity {
  itemId: number;
  value: string | number;
}

function Page() {
  const intl = useIntl();
  const cart = useCart();
  const cartRemoveItem = useCartRemoveItem();
  const cartUpdateQuantities = useCartUpdateQuantities();
  const [quantities, setQuantities] = useState<Quantity[]>([]);
  const { items } = cart;

  const updateQuantities = () =>
    cartUpdateQuantities(
      quantities.map((x) => ({
        ...x,
        value: typeof x.value === 'string' ? parseFloat(x.value) : x.value,
      }))
    );

  const cartNeedUpdate = () =>
    quantities.filter((x) => {
      const item = cart.items.find((item) => item.id === x.itemId);

      return item && item.quantity !== x.value && x.value !== '';
    }).length > 0;

  const getItemQuantity = (item: ICartItem) => {
    const quantity = quantities.find((x) => x.itemId === item.id);

    return quantity ? quantity.value : item.quantity;
  };

  const handleChangeQuantity = (item: ICartItem, quantity: string | number) => {
    setQuantities((prevState) => {
      const index = prevState.findIndex((x) => x.itemId === item.id);

      if (index === -1) {
        return [
          ...prevState,
          {
            itemId: item.id,
            value: quantity,
          },
        ];
      }

      return [
        ...prevState.slice(0, index),
        {
          ...prevState[index],
          value: quantity,
        },
        ...prevState.slice(index + 1),
      ];
    });
  };

  if (items.length === 0) {
    return (
      <React.Fragment>
        <PageTitle>
          {intl.formatMessage({ id: 'HEADER_SHOPPING_CART' })}
        </PageTitle>

        <BlockHeader
          breadcrumb={[
            { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
            { title: intl.formatMessage({ id: 'LINK_CART' }), url: url.cart() },
          ]}
        />

        <BlockEmpty>
          <div className="container">
            <BlockEmptyBody>
              <BlockEmptyTitle as="h1">
                <FormattedMessage id="HEADER_SHOPPING_CART_EMPTY_TITLE" />
              </BlockEmptyTitle>
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: 'HEADER_SHOPPING_CART_EMPTY_SUBTITLE',
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

  const table = (
    <CartTableTable as="table">
      <CartTableHead as="thead">
        <CartTableRow as="tr">
          <CartTableColumn as="th" columnimage>
            <FormattedMessage id="TABLE_IMAGE" />
          </CartTableColumn>
          <CartTableColumn as="th" columnproduct>
            <FormattedMessage id="TABLE_PRODUCT" />
          </CartTableColumn>
          <CartTableColumn as="th" columnprice>
            <FormattedMessage id="TABLE_PRICE" />
          </CartTableColumn>
          <CartTableColumn as="th" columnquantity>
            <FormattedMessage id="TABLE_QUANTITY" />
          </CartTableColumn>
          <CartTableColumn as="th" columntotal>
            <FormattedMessage id="TABLE_TOTAL" />
          </CartTableColumn>
          <CartTableColumn as="th" columnremove>
            <span className="sr-only">
              <FormattedMessage id="TABLE_REMOVE" />
            </span>
          </CartTableColumn>
        </CartTableRow>
      </CartTableHead>
      <CartTableBody as="tbody">
        {items.map((item) => (
          <CartTableRow as="tr" key={item.id}>
            <CartTableColumn as="td" columnimage>
              <ImageTypeProduct className="image">
                <ImageBody as={AppLink} href={url.product(item.product)}>
                  <ImageTag
                    as={AppImage}
                    src={item.product.images && item.product.images[0]}
                  />
                </ImageBody>
              </ImageTypeProduct>
            </CartTableColumn>
            <CartTableColumn as="td" columnproduct>
              <CartTableProductName
                as={AppLink}
                href={url.product(item.product)}
              >
                {item.product.name}
              </CartTableProductName>
              {item.options.length > 0 && (
                <CartTableOptions as="ul">
                  {item.options.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                    >{`${option.name}: ${option.value}`}</li>
                  ))}
                </CartTableOptions>
              )}
            </CartTableColumn>
            <CartTableColumn
              as="td"
              columnprice
              data-title={intl.formatMessage({ id: 'TABLE_PRICE' })}
            >
              <CurrencyFormat value={item.price} />
            </CartTableColumn>
            <CartTableColumn
              as="td"
              columnquantity
              data-title={intl.formatMessage({ id: 'TABLE_QUANTITY' })}
            >
              <CartTableQuantity
                as={InputNumber}
                min={1}
                value={getItemQuantity(item)}
                onChange={(quantity: any) =>
                  handleChangeQuantity(item, quantity)
                }
              />
            </CartTableColumn>
            <CartTableColumn
              as="td"
              columntotal
              data-title={intl.formatMessage({ id: 'TABLE_TOTAL' })}
            >
              <CurrencyFormat value={item.total} />
            </CartTableColumn>
            <CartTableColumn as="td" columnremove>
              <AsyncAction
                action={() => cartRemoveItem(item.id)}
                render={({ run, loading }) => (
                  <CartTableRemove
                    as="button"
                    type="button"
                    className={classNames(
                      'btn',
                      'btn-sm',
                      'btn-icon',
                      'btn-muted',
                      {
                        'btn-loading': loading,
                      }
                    )}
                    onClick={run}
                  >
                    <Cross12Svg />
                  </CartTableRemove>
                )}
              />
            </CartTableColumn>
          </CartTableRow>
        ))}
      </CartTableBody>
      <CartTableFoot as="tfoot">
        <tr>
          <td colSpan={6}>
            <CartTableAction>
              <CartTableCouponForm as="form" className="form-row">
                <div className="form-group mb-0 col flex-grow-1">
                  <label htmlFor="coupon-code" className="sr-only">
                    <FormattedMessage id="INPUT_COUPON_CODE_LABEL" />
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="coupon-code"
                    placeholder={intl.formatMessage({
                      id: 'INPUT_COUPON_CODE_PLACEHOLDER',
                    })}
                  />
                </div>
                <div className="form-group mb-0 col-auto">
                  <button type="button" className="btn btn-sm btn-primary">
                    <FormattedMessage id="BUTTON_APPLY_COUPON" />
                  </button>
                </div>
              </CartTableCouponForm>
              <CartTableUpdateButton>
                <AsyncAction
                  action={updateQuantities}
                  render={({ run, loading }) => (
                    <button
                      type="button"
                      className={classNames('btn', 'btn-sm', 'btn-primary', {
                        'btn-loading': loading,
                      })}
                      disabled={!cartNeedUpdate()}
                      onClick={run}
                    >
                      <FormattedMessage id="BUTTON_UPDATE_CART" />
                    </button>
                  )}
                />
              </CartTableUpdateButton>
            </CartTableAction>
          </td>
        </tr>
      </CartTableFoot>
    </CartTableTable>
  );

  const totals = (
    <div className="card">
      <CardBodyPadding2 className="card-body">
        <CardTitle as="h3">
          <FormattedMessage id="HEADER_CART_TOTALS" />
        </CardTitle>

        <CartTotalsTable as="table">
          {cart.totals.length > 0 && (
            <React.Fragment>
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="TABLE_SUBTOTAL" />
                  </th>
                  <td>
                    <CurrencyFormat value={cart.subtotal} />
                  </td>
                </tr>
              </thead>
              <tbody>
                {cart.totals.map((total, index) => (
                  <tr key={index}>
                    <th>
                      <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                    </th>
                    <td>
                      <CurrencyFormat value={total.price} />

                      {total.type === 'shipping' && (
                        <div>
                          <AppLink
                            anchor
                            onClick={(event) => event.preventDefault()}
                          >
                            <FormattedMessage id="LINK_CALCULATE_SHIPPING" />
                          </AppLink>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </React.Fragment>
          )}
          <tfoot>
            <tr>
              <th>
                <FormattedMessage id="TABLE_TOTAL" />
              </th>
              <td>
                <CurrencyFormat value={cart.total} />
              </td>
            </tr>
          </tfoot>
        </CartTotalsTable>

        <AppLink
          href={url.checkout()}
          className="btn btn-primary btn-xl btn-block"
        >
          <FormattedMessage id="BUTTON_PROCEED_TO_CHECKOUT" />
        </AppLink>
      </CardBodyPadding2>
    </div>
  );

  return (
    <React.Fragment>
      <PageTitle>
        {intl.formatMessage({ id: 'HEADER_SHOPPING_CART' })}
      </PageTitle>

      <BlockHeader
        pageTitle={<FormattedMessage id="HEADER_SHOPPING_CART" />}
        breadcrumb={[
          { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
          { title: intl.formatMessage({ id: 'LINK_CART' }), url: url.cart() },
        ]}
      />

      <div className="block">
        <div className="container">
          <div className="cart">
            <CartTable>{table}</CartTable>
            <CartTotals>{totals}</CartTotals>
          </div>
        </div>
      </div>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
