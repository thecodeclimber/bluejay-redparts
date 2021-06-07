// react
import React, { useEffect } from 'react';
// application
import { shopFetchProductsListThunk } from '~/store/shop/shopActions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import getShopPageData from '~/store/shop/shopHelpers';
import { wrapper } from '~/store/store';
import ShopPageShop from '~/components/shop/ShopPageShop';
import axios from '~/axios';

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await getShopPageData(context);
  }
);

function Page() {
  const router = useRouter();
  const dispatch = useDispatch();

  let diameter: any = [];
  if (router.query?.diameter) {
    diameter = Object.values(router.query.diameter);
  }

  useEffect(() => {
    if (diameter.length === 0) {
      const fetchData = async () => {
        const productsList: any = await axios.get<any>(
          `/sub_categories/${router.query.slug}/products`
        );
        dispatch(shopFetchProductsListThunk(productsList));
      };
      fetchData();
    }
  }, [diameter]);

  useEffect(() => {
    if (router.query?.diameter) {
      const fetchData = async () => {
        const productsList: any = await axios.get<any>(
          `/sub_categories/${router.query.slug}/products?diameter=${router.query.diameter}`
        );
        dispatch(shopFetchProductsListThunk(productsList));
      };
      fetchData();
    }
  }, [diameter.length]);

  return (
    <ShopPageShop
      layout="grid"
      gridLayout="grid-4-sidebar"
      sidebarPosition="start"
    />
  );
}

export default Page;
