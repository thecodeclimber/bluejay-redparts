// react
import React, { useEffect } from 'react';
// application
import { shopInitThunk } from '~/store/shop/shopActions';
import { useDispatch } from 'react-redux';
import getShopPageData from '~/store/shop/shopHelpers';
import { wrapper } from '~/store/store';
import ShopPageShop from '~/components/shop/ShopPageShop';
import { useRouter } from 'next/router';

import axios from '~/axios';

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await getShopPageData(context);
  }
);

function Page() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let id: any = localStorage.getItem('subCategoryId');
      const productsList: any = await axios.get<any>(
        `/categories/products/${id}`
      );
      const categorySlug = productsList.data.name;
      let options: any = {};
      let filters: any = {};
      dispatch(shopInitThunk(categorySlug, productsList, options, filters));
    };
    fetchData();
  }, []);

  return (
    <ShopPageShop
      layout="grid"
      gridLayout="grid-4-sidebar"
      sidebarPosition="start"
    />
  );
}

export default Page;
