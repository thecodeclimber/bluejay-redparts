// react
import React, { useState, useMemo, useEffect } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import Dropdown, { IDropdownItem } from '~/components/header/Dropdown';
import { ICurrency } from '~/interfaces/currency';
import { useCurrency, useCurrencyChange } from '~/store/currency/currencyHooks';
import { useUser } from '~/store/user/userHooks';
import { accountApi } from '~/api';
import { IOrder } from '~/interfaces/order';
// data
import dataShopCurrencies from '~/data/shopCurrencies';

interface Item extends IDropdownItem {
  currency: ICurrency;
}

function DropdownCurrency() {
  const user = useUser();
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    if (user) {
      accountApi.getOrdersList({ limit: 3 }).then((list) => {
        setOrders(list.items);
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  const currency = useCurrency();
  const currencyChange = useCurrencyChange();

  const handleItemClick = (item: Item) => {
    currencyChange(item.currency);
  };

  const items: Item[] = useMemo(
    () =>
      dataShopCurrencies.map((eachCurrency) => ({
        title: `${eachCurrency.symbol} ${eachCurrency.name}`,
        currency: eachCurrency,
      })),
    []
  );

  const label = (
    <React.Fragment>
      <FormattedMessage id="TEXT_TOPBAR_CURRENCY" />:
    </React.Fragment>
  );

  return (
    <Dropdown
      label={label}
      title={currency.code}
      onItemClick={handleItemClick}
    />
  );
}

export default DropdownCurrency;
