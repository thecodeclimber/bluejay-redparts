// react
import React, { useState, useEffect } from 'react';
// third-party
import { useRouter } from 'next/router';
// application
import { useShopProductsList } from '~/store/shop/shopHooks';
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import axios from '~/axios';

export default function Page() {
  const router = useRouter();
  const allProducts = useShopProductsList();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (!!router.query?.slug) {
      if (allProducts?.length) {
        let products = [...allProducts];
        let product = products.find((item) => item.slug === router.query.name);
        setProduct(product);
      } else {
        fetchData();
      }
    }
  }, []);

  const fetchData = async () => {
    const product: any = await axios.get<any>(`/product/${router.query.name}`);
    await setProduct(product.data[0]);
  };

  return (
    <div>{product && <ShopPageProduct product={product} layout="full" />}</div>
  );
}
