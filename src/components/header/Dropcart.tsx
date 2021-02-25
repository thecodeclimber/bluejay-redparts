// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import {
  DropcartStyledComponent,
  DropcartEmpty,
  DropcartList,
  DropcartItem,
  DropcartItemImage,
  ImageBody,
  ImageTag,
  DropcartItemInfo,
  DropcartItemName,
  DropcartItemNameLink,
  DropcartItemMeta,
  DropcartItemQuantity,
  DropcartItemPrice,
  DropcartItemRemoveButton,
  DropcartDivider,
  DropcartTotal
} from '~/styled-components/header/Dropcart';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import url from '~/services/url';
import { Cross10Svg } from '~/svg';
import { useCart, useCartRemoveItem } from '~/store/cart/cartHooks';

interface Props {
  onCloseMenu: () => void;
}

function Dropcart(props: Props) {
  const { onCloseMenu } = props;
  const cart = useCart();
  const cartRemoveItem = useCartRemoveItem();

  return (
    <DropcartStyledComponent>
      {cart.items.length === 0 && (
        <DropcartEmpty>
          <FormattedMessage id="TEXT_YOUR_SHOPPING_CART_IS_EMPTY" />
        </DropcartEmpty>
      )}
      {cart.items.length > 0 && (
        <React.Fragment>
          <DropcartList>
            {cart.items.map((item, index) => (
              <React.Fragment key={index}>
                <DropcartItem>
                  <DropcartItemImage className="image image--type--product">
                    <ImageBody
                      as="a"
                      href={url.product(item.product)}
                      onClick={onCloseMenu}
                    >
                      <ImageTag
                        src={item.product.images && item.product.images[0]}
                      />
                    </ImageBody>
                  </DropcartItemImage>
                  <DropcartItemInfo>
                    <DropcartItemName>
                      <DropcartItemNameLink
                        as="a"
                        href={url.product(item.product)}
                        onClick={onCloseMenu}
                      >
                        {item.product.name}
                      </DropcartItemNameLink>
                    </DropcartItemName>
                    {item.options.length > 0 && (
                      <ul className="dropcart__item-features">
                        {item.options.map((option, optionIndex) => (
                          <li key={optionIndex}>
                            {option.name}
                            {': '}
                            {option.value}
                          </li>
                        ))}
                      </ul>
                    )}
                    <DropcartItemMeta>
                      <DropcartItemQuantity>
                        {item.quantity}
                      </DropcartItemQuantity>
                      <DropcartItemPrice>
                        <CurrencyFormat value={item.price} />
                      </DropcartItemPrice>
                    </DropcartItemMeta>
                  </DropcartItemInfo>
                  <AsyncAction
                    action={() => cartRemoveItem(item.id)}
                    render={({ run, loading }) => (
                      <DropcartItemRemoveButton
                        as="button"
                        type="button"
                        className={classNames('', {
                          'dropcart__item-remove--loading': loading,
                        })}
                        onClick={run}
                      >
                        <Cross10Svg />
                      </DropcartItemRemoveButton>
                    )}
                  />
                </DropcartItem>
                <DropcartDivider role="presentation" />
              </React.Fragment>
            ))}
          </DropcartList>
          <DropcartTotal className="dropcart__totals">
            <table>
              <tbody>
                {cart.totals.length > 0 && (
                  <tr>
                    <th>
                      <FormattedMessage id="TABLE_SUBTOTAL" />
                    </th>
                    <td>
                      <CurrencyFormat value={cart.subtotal} />
                    </td>
                  </tr>
                )}
                {cart.totals.map((total, index) => (
                  <tr key={index}>
                    <th>
                      <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                    </th>
                    <td>
                      <CurrencyFormat value={total.price} />
                    </td>
                  </tr>
                ))}
                <tr>
                  <th>
                    <FormattedMessage id="TABLE_TOTAL" />
                  </th>
                  <td>
                    <CurrencyFormat value={cart.total} />
                  </td>
                </tr>
              </tbody>
            </table>
          </DropcartTotal>
          <div className="dropcart__actions">
            <AppLink
              href={url.cart()}
              className="btn btn-secondary"
              onClick={onCloseMenu}
            >
              <FormattedMessage id="BUTTON_VIEW_CART" />
            </AppLink>
            <AppLink
              href={url.checkout()}
              className="btn btn-primary"
              onClick={onCloseMenu}
            >
              <FormattedMessage id="BUTTON_CHECKOUT" />
            </AppLink>
          </div>
        </React.Fragment>
      )}
    </DropcartStyledComponent>
  );
}

export default Dropcart;
