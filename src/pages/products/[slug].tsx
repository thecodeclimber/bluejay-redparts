// react
import React from 'react';
// third-party
// import { GetServerSideProps } from 'next';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
// import { IProduct } from '~/interfaces/product';
// import { shopApi } from '~/api';
import { useShopProductsList } from '~/store/shop/shopHooks';
import SitePageNotFound from '~/components/site/SitePageNotFound';

function Page() {
  const productsList = useShopProductsList();
  const productId = localStorage.getItem('productId');
  const product = productsList.find((item: any) => {
    return item.id == productId;
  });
  if (productsList === null || productsList.lenght > 0) {
    return <SitePageNotFound />;
  }

  return <ShopPageProduct product={product} layout="full" />;
}

export default Page;
