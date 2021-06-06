// react
import React, { useState, useEffect } from 'react';
// third-party
import { useRouter } from 'next/router';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import axios from '~/axios';

function Page() {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (!!router.query?.slug) {
      const fetchData = async () => {
        const product: any = await axios.get<any>(
          `/product/${router.query.slug}`
        );
        setProduct(product?.data[0]);
      };
      fetchData();
    }
  }, []);

  return (
    <div>{product && <ShopPageProduct product={product} layout="full" />}</div>
  );
}

export default Page;
