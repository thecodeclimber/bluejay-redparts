// react
import React, { useEffect, useState } from 'react';

import ShopPageProduct from '~/components/shop/ShopPageProduct';
import axios from '~/axios';
// third-party
import { useRouter } from 'next/router';
// application
import { useShopProductsList } from '~/store/shop/shopHooks';

function Page() {
  const router: any = useRouter();
  const allProducts = useShopProductsList();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (allProducts?.length && !!router.query?.name) {
      let products = [...allProducts];
      let product = products.find(
        (item) => item.slug === decodeURIComponent(router.query.name)
      );
      setProduct(product);
    } else {
      fetchData();
    }
  }, [!!router.query?.name]);

  const fetchData = async () => {
    let {data} = await axios.get<any>(`/product/${router.query.name}`);
    await setProduct(data);
  };

  return (
    <div>{product && <ShopPageProduct product={product} layout="full" />}</div>
  );
}

export default Page;
