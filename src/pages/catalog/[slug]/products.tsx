// react
import React, { useEffect } from 'react';
// application
import { shopInitThunk } from '~/store/shop/shopActions';
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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let id: any = localStorage.getItem('subCategoryId');
      const productsList: any = await axios.get<any>(
        `/sub_categories/${id}/products`
      );
      const categorySlug = productsList.data.name;
      dispatch(shopInitThunk(categorySlug, productsList));
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
