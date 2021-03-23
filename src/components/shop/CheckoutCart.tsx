// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import { useCart } from '~/store/cart/cartHooks';
import {
    CheckoutTotals,
  CheckoutTotalsHeader,
  CheckoutTotalsProducts,
  CheckoutTotalsSubTotals,
  CheckoutTotalsFooter,
} from '~/styled-components/shop/CheckoutCart';
function CheckoutCart() {
  const cart = useCart();
  return (
    <CheckoutTotals>
      <CheckoutTotalsHeader>
        <tr>
          <th>
            <FormattedMessage id="TABLE_PRODUCT" />
          </th>
          <th>
            <FormattedMessage id="TABLE_TOTAL" />
          </th>
        </tr>
      </CheckoutTotalsHeader>
      <CheckoutTotalsProducts>
        {cart.items.map((item) => (
          <tr key={item.id}>
            <td>{`${item.product.name} × ${item.quantity}`}</td>
            <td>
              <CurrencyFormat value={item.total} />
            </td>
          </tr>
        ))}
      </CheckoutTotalsProducts>
      {cart.totals.length > 0 && (
        <CheckoutTotalsSubTotals>
          <tr>
            <th>
              <FormattedMessage id="TABLE_SUBTOTAL" />
            </th>
            <td>
              <CurrencyFormat value={cart.subtotal} />
            </td>
          </tr>
          {cart.totals.map((total, totalIndex) => (
            <tr key={totalIndex}>
              <th>
                <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
              </th>
              <td>
                <CurrencyFormat value={total.price} />
              </td>
            </tr>
          ))}
        </CheckoutTotalsSubTotals>
      )}
      <CheckoutTotalsFooter>
        <tr>
          <th>
            <FormattedMessage id="TABLE_TOTAL" />
          </th>
          <td>
            <CurrencyFormat value={cart.total} />
          </td>
        </tr>
      </CheckoutTotalsFooter>
    </CheckoutTotals>
  );
}

export default CheckoutCart;
