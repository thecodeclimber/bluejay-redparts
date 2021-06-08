// react
import React, { useState, useEffect } from 'react';
// third-party
import { useRouter } from 'next/router';
// application
import { useShopProductsList } from '~/store/shop/shopHooks';
import ShopPageProduct from '~/components/shop/ShopPageProduct';

function Page() {
  const router = useRouter();
  const allProducts = useShopProductsList();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (!!router.query?.slug) {
      let products = [...allProducts];
      let product = products.find((item) => item.slug === router.query.name);
      setProduct(product);
    }
  }, []);

  return (
    <div>{product && <ShopPageProduct product={product} layout="full" />}</div>
  );
}

export default Page;
