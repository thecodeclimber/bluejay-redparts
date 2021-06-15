// react
import React, { useEffect } from 'react';

import ShopPageShop from '~/components/shop/ShopPageShop';
import axios from '~/axios';
import getShopPageData from '~/store/shop/shopHelpers';
// application
import { shopFetchProductsListThunk } from '~/store/shop/shopActions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useShopOptions } from '~/store/shop/shopHooks';
import { wrapper } from '~/store/store';

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await getShopPageData(context);
  }
);

function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const options = useShopOptions()

  useEffect(() => {
    if (!router.query?.diameter) {
      const fetchData = async () => {
        const productsList: any = await axios.get<any>(
          `/subcategories/${router.query.slug}/products/?page=${options?.page ?? 1}&limit=${options?.limit??8}&sort=${options.sort??'default'}`
        );
        dispatch(shopFetchProductsListThunk(productsList));
      };
      fetchData();
    }
  }, [!router.query?.diameter, options, options.limit, options.page, options.sort]);

  useEffect(() => {
    if (router.query?.diameter) {
      const fetchData = async () => {
        const productsList: any = await axios.get<any>(
          `/subcategories/${router.query.slug}/products?diameter=${router.query.diameter}${router.query.length ? '&length='+router.query.length :''}&page=${options?.page ?? 1}&limit=${options?.limit??8}&sort=${options.sort??'default'}`
        );
        dispatch(shopFetchProductsListThunk(productsList));
      };
      fetchData();
    }
  }, [router.query?.diameter, options, options.limit, options.page, options.sort]);

  return (
    <ShopPageShop
      layout="grid"
      gridLayout="grid-4-sidebar"
      sidebarPosition="start"
    />
  );
}

export default Page;
