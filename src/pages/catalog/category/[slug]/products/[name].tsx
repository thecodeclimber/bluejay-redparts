// react
import React, { useState, useEffect } from 'react';
// third-party
import { useRouter } from 'next/router';
// application
import { useShopProductsList } from '~/store/shop/shopHooks';
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import axios from '~/axios';

function Page() {
  const router: any = useRouter();
  const allProducts = useShopProductsList();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (allProducts?.length && !!router.query?.name) {
      let products: any = [...allProducts];
      let product: any = products.find(
        (item: any) => item.slug === decodeURIComponent(router.query.name)
      );
      setProduct(product);
    } else {
      fetchData();
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

export default Page;
