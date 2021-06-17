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
    const {data} = await axios.get<any>(`/product/${router.query.name}`);
    await setProduct(data);
  };

  return (
    <div>{product && <ShopPageProduct product={product} setQueryParams={(data : object )=>console.log(data)} layout="full" />}</div>
  );
}

export default Page;
