// react
import React, { useEffect } from 'react';
// application
import { shopInitThunk } from '~/store/shop/shopActions';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let id: any = localStorage.getItem('subCategoryId');
      const productsList: any = await axios.get<any>(
        `/categories/${id}/products`
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
