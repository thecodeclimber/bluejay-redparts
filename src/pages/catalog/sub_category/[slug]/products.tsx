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
  const query = Object.keys(router.query);
  let value: any = Object.values(router.query);
  value === '' ? (value = null) : value;
  let searchedValues: any = !!value?.length ? value[0]?.split(',') : null;

  useEffect(() => {
    if (!!router.query?.slug) {
      const fetchData = async () => {
        const productsList: any = await axios.get<any>(
          `/sub_categories/${router.query.slug}/products`
        );
        dispatch(shopFetchProductsListThunk(productsList));
      };
      fetchData();
    }
  }, [router.asPath]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let id: any = localStorage.getItem('subCategoryId');
  //     const productsList: any = await axios.get<any>(
  //       `/sub_categories/${id}/products?${query}=${value}`
  //     );
  //     dispatch(shopFetchProductsListThunk(productsList));
  //   };
  //   fetchData();
  // }, [searchedValues?.length]);

  return (
    <ShopPageShop
      layout="grid"
      gridLayout="grid-4-sidebar"
      sidebarPosition="start"
    />
  );
}

export default Page;
