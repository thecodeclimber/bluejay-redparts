// react
import React, { useEffect } from 'react';
// application
import { shopFetchProductsListThunk } from '~/store/shop/shopActions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import ShopPageShop from '~/components/shop/ShopPageShop';
import axios from '~/axios';

export async function getServerSideProps(content: any) {
  const { urlParam } = content.query;
  if (urlParam) {
    return { props: { urlParam } };
  }
  return { props: {} };
}

function Page(props: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const query = Object.keys(router.query);
  let value: any = Object.values(router.query);
  value === '' ? (value = null) : value;
  let searchedValues: any = !!value?.length ? value[0]?.split(',') : null;

  useEffect(() => {
    const fetchData = async () => {
      let id: any = localStorage.getItem('subCategoryId');
      const productsList: any = await axios.get<any>(
        `/categories/${id}/products`
      );
      dispatch(shopFetchProductsListThunk(productsList));
    };
    fetchData();
  }, [!searchedValues?.length]);

  useEffect(() => {
    const fetchData = async () => {
      let id: any = localStorage.getItem('subCategoryId');
      const productsList: any = await axios.get<any>(
        `/categories/${id}/products?${query}=${value}`
      );
      dispatch(shopFetchProductsListThunk(productsList));
    };
    fetchData();
  }, [searchedValues?.length]);

  return (
    <ShopPageShop
      layout="grid"
      gridLayout="grid-4-sidebar"
      sidebarPosition="start"
    />
  );
}

export default Page;
