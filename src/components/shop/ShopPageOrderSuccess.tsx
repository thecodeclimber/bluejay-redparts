// react
import React from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { IOrder } from '~/interfaces/order';
import {
  OrderOrderSuccess,
  OrderSuccessBody,
  OrderSuceesheader,
  OrderSuccessIcon,
  OrderSuccessTitle,
  OrderSuceesSubTitle,
  OrderSuccessActions,
  OrderSuccessMeta,
  OrderSuceesMetaList,
  OrderSuccessMetaItem,
  OrderSuceesMetaTitle,
  OrderSuccessMetaValue,
  OrderList,
  OrderListHeader,
  OrderListColumnLabel,
  OrderListColumnTotal,
  OrderListColumnQuantity,
  OrderListProduct,
  OrderListColumnImage,
  ImageBody,
  ImageTag,
  ImageTypeProduct,
  OrderListColumnProduct,
  OrderListOptions,
  OrderListOptionsList,
  OrderListOptionsItem,
  OrderListOptionsLabel,
  OrderListOptionsValue,
  OrderListColumnQunatity,
  OrderListColumnTotals,
  OrderListSubtotals,
  OrderListColumnFooterLabel,
  OrderListColumnFooterTotal,
  OrderListFooter,
  OrderSuccessAddresses,
  OrderSuccessAddress,
} from '~/styled-components/shop/ShopPageOrderSuccess';
interface Props {
  order: IOrder;
}

function ShopPageOrderSuccess(props: Props) {
  const intl = useIntl();
  const { order } = props;

  return (
    <React.Fragment>
      <PageTitle>
        {intl.formatMessage(
          { id: 'HEADER_ORDER' },
          {
            number: intl.formatMessage(
              { id: 'FORMAT_ORDER_NUMBER' },
              { number: order.number }
            ),
          }
        )}
      </PageTitle>

      <BlockSpace layout="spaceship-ledge-height" />

      <OrderOrderSuccess>
        <div className="container">
          <OrderSuccessBody>
            <OrderSuceesheader>
              <OrderSuccessIcon />
              <OrderSuccessTitle>
                <FormattedMessage id="HEADER_ORDER_SUCCESS_TITLE" />
              </OrderSuccessTitle>
              <OrderSuceesSubTitle>
                <FormattedMessage id="HEADER_ORDER_SUCCESS_SUBTITLE" />
              </OrderSuceesSubTitle>
              <OrderSuccessActions>
                <AppLink href={url.home()} className="btn btn-sm btn-secondary">
                  <FormattedMessage id="BUTTON_GO_TO_HOMEPAGE" />
                </AppLink>
              </OrderSuccessActions>
            </OrderSuceesheader>

            <OrderSuccessMeta className="card">
              <OrderSuceesMetaList>
                <OrderSuccessMetaItem>
                  <OrderSuceesMetaTitle>
                    <FormattedMessage id="TEXT_ORDER_NUMBER" />:
                  </OrderSuceesMetaTitle>
                  <OrderSuccessMetaValue>
                    <FormattedMessage
                      id="FORMAT_ORDER_NUMBER"
                      values={{ number: order.number }}
                    />
                  </OrderSuccessMetaValue>
                </OrderSuccessMetaItem>
                <OrderSuccessMetaItem>
                  <OrderSuceesMetaTitle>
                    <FormattedMessage id="TEXT_CREATED_AT" />:
                  </OrderSuceesMetaTitle>
                  <OrderSuccessMetaValue>
                    <FormattedMessage
                      id="FORMAT_DATE_MEDIUM"
                      values={{ date: Date.parse(order.createdAt) }}
                    />
                  </OrderSuccessMetaValue>
                </OrderSuccessMetaItem>
                <OrderSuccessMetaItem>
                  <OrderSuceesMetaTitle>
                    <FormattedMessage id="TEXT_TOTAL" />:
                  </OrderSuceesMetaTitle>
                  <OrderSuccessMetaValue>
                    <CurrencyFormat value={order.total} />
                  </OrderSuccessMetaValue>
                </OrderSuccessMetaItem>
                <OrderSuccessMetaItem>
                  <OrderSuceesMetaTitle>
                    <FormattedMessage id="TEXT_PAYMENT_METHOD" />:
                  </OrderSuceesMetaTitle>
                  <OrderSuccessMetaValue>{order.payment}</OrderSuccessMetaValue>
                </OrderSuccessMetaItem>
              </OrderSuceesMetaList>
            </OrderSuccessMeta>

            <div className="card">
              <OrderList>
                <table>
                  <OrderListHeader>
                    <tr>
                      <OrderListColumnLabel colSpan={2}>
                        <FormattedMessage id="TABLE_PRODUCT" />
                      </OrderListColumnLabel>
                      <OrderListColumnQuantity>
                        <FormattedMessage id="TABLE_QUANTITY" />
                      </OrderListColumnQuantity>
                      <OrderListColumnTotal>
                        <FormattedMessage id="TABLE_TOTAL" />
                      </OrderListColumnTotal>
                    </tr>
                  </OrderListHeader>
                  <OrderListProduct>
                    {order.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
                        <OrderListColumnImage>
                          <ImageTypeProduct>
                            <ImageBody href={url.product(item.product)}>
                              <ImageTag
                                src={
                                  item.product.images && item.product.images[0]
                                }
                              />
                            </ImageBody>
                          </ImageTypeProduct>
                        </OrderListColumnImage>
                        <OrderListColumnProduct>
                          <AppLink href={url.product(item.product)}>
                            {item.product.name}
                          </AppLink>
                          {item.options.length > 0 && (
                            <OrderListOptions>
                              <OrderListOptionsList>
                                {item.options.map((option, optionIndex) => (
                                  <OrderListOptionsItem key={optionIndex}>
                                    <OrderListOptionsLabel>
                                      {option.name}
                                      {': '}
                                    </OrderListOptionsLabel>
                                    <OrderListOptionsValue>
                                      {option.value}
                                    </OrderListOptionsValue>
                                  </OrderListOptionsItem>
                                ))}
                              </OrderListOptionsList>
                            </OrderListOptions>
                          )}
                        </OrderListColumnProduct>
                        <OrderListColumnQunatity
                          data-title={`${intl.formatMessage({
                            id: 'TABLE_QUANTITY',
                          })}:`}
                        >
                          {item.quantity}
                        </OrderListColumnQunatity>
                        <OrderListColumnTotals>
                          <CurrencyFormat value={item.total} />
                        </OrderListColumnTotals>
                      </tr>
                    ))}
                  </OrderListProduct>
                  {order.totals.length > 0 && (
                    <OrderListSubtotals>
                      <tr>
                        <OrderListColumnFooterLabel colSpan={3}>
                          <FormattedMessage id="TABLE_SUBTOTAL" />
                        </OrderListColumnFooterLabel>
                        <OrderListColumnFooterTotal>
                          <CurrencyFormat value={order.subtotal} />
                        </OrderListColumnFooterTotal>
                      </tr>
                      {order.totals.map((total, totalIndex) => (
                        <tr key={totalIndex}>
                          <OrderListColumnFooterLabel colSpan={3}>
                            <FormattedMessage
                              id={`TABLE_TOTAL_${total.title}`}
                            />
                          </OrderListColumnFooterLabel>
                          <OrderListColumnFooterTotal>
                            <CurrencyFormat value={total.price} />
                          </OrderListColumnFooterTotal>
                        </tr>
                      ))}
                    </OrderListSubtotals>
                  )}
                  <OrderListFooter>
                    <tr>
                      <OrderListColumnFooterLabel colSpan={3}>
                        <FormattedMessage id="TABLE_TOTAL" />
                      </OrderListColumnFooterLabel>
                      <OrderListColumnFooterTotal>
                        <CurrencyFormat value={order.total} />
                      </OrderListColumnFooterTotal>
                    </tr>
                  </OrderListFooter>
                </table>
              </OrderList>
            </div>

            <OrderSuccessAddresses>
              <OrderSuccessAddress
                address={order.shippingAddress}
                label={intl.formatMessage({ id: 'TEXT_SHIPPING_ADDRESS' })}
              />
              <OrderSuccessAddress
                address={order.billingAddress}
                label={intl.formatMessage({ id: 'TEXT_BILLING_ADDRESS' })}
              />
            </OrderSuccessAddresses>
          </OrderSuccessBody>
        </div>
      </OrderOrderSuccess>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default ShopPageOrderSuccess;
