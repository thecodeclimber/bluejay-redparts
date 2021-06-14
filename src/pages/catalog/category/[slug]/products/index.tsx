// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ShopPageShop from '~/components/shop/ShopPageShop';
import axios from '~/axios';
// application
import { shopFetchProductsListThunk } from '~/store/shop/shopActions';
import { useRouter } from 'next/router';
import { useShopOptions } from '~/store/shop/shopHooks';

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
  const options = useShopOptions()

  let diameter: any = [];
  if (router.query?.diameter) {
    diameter = Object.values(router.query.diameter);
  }

  useEffect(() => {
    if (diameter.length === 0) {
      const fetchData = async () => {
        const productsList: any = await axios.get<any>(
          `/category/${router.query.slug}/products/?page=${options?.page ?? 1}&limit=${options?.limit??8}&sort=${options.sort??'default'}`
        );
        dispatch(shopFetchProductsListThunk(productsList));
      };
      fetchData();
    }
  }, [diameter?.length,options, options.page, options.limit, options.sort ]);

  useEffect(() => {
    if (router.query?.diameter) {
      const fetchData = async () => {
        const productsList: any = await axios.get<any>(
          `/category/${router.query.slug}/products?diameter=${router.query.diameter}&page=${options?.page ?? 1}&limit=${options?.limit??8}&sort=${options.sort??'default'}`
        );
        dispatch(shopFetchProductsListThunk(productsList));
      };
      fetchData();
    }
  }, [diameter.length, options.page, options.limit, options.sort ]);

  return (
    <ShopPageShop
      layout="grid"
      gridLayout="grid-4-sidebar"
      sidebarPosition="start"
    />
  );
}

export default Page;
