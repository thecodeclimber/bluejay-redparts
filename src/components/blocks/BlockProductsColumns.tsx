// react
import React, { useMemo } from 'react';
// application
import ProductCard from '~/components/shared/ProductCard';
import { IProduct } from '~/interfaces/product';
import {
  BlockBlockProduct,
  BlockProductsColumnsTitle,
  BlockProductColumnList,
} from '~/styled-components/blocks/BlockProductsColumns';
export interface IBlockProductsColumnsItem {
  title: string;
  products: IProduct[];
}

interface Props {
  columns: IBlockProductsColumnsItem[];
}

function BlockProductsColumns(props: any) {
  const { products } = props;

  const columns = useMemo(
    () => [
      {
        title: 'Top Rated Products',
        products: products,
      },
      {
        title: 'Special Offers',
        products: products,
      },
      {
        title: 'Bestsellers',
        products: products,
      },
    ],
    []
  );

  return (
    <BlockBlockProduct>
      <div className="container">
        <div className="row">
          {columns.map((column: any, index: any) => (
            <div key={index} className="col-4">
              <BlockProductsColumnsTitle>
                {column.title}
              </BlockProductsColumnsTitle>
              <BlockProductColumnList>
                {column.products.slice(0, 3).map((product: any) => (
                  <div
                    key={product._id}
                    className="block-products-columns__list-item"
                  >
                    <ProductCard
                      product={product}
                      exclude={[
                        'actions',
                        'status-badge',
                        'features',
                        'buttons',
                        'meta',
                      ]}
                    />
                  </div>
                ))}
              </BlockProductColumnList>
            </div>
          ))}
        </div>
      </div>
    </BlockBlockProduct>
  );
}

export default React.memo(BlockProductsColumns);
