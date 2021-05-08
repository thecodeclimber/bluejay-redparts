// react
import React from 'react';
// application
import ProductCard from '~/components/shared/ProductCard';
import { IProduct } from '~/interfaces/product';
import {
  BlockBlockProduct,
  BlockProductsColumnsTitle,
  BlockProductColumnList,
  BlockProductsColumnsListItem,
} from '~/styled-components/blocks/BlockProductsColumns';
export interface IBlockProductsColumnsItem {
  title: string;
  products: IProduct[];
}

interface Props {
  columns: IBlockProductsColumnsItem[];
}

function BlockProductsColumns(props: Props) {
  const { columns } = props;

  return (
    <BlockBlockProduct>
      <div className="container">
        <div className="row">
          {columns.map((column, columnIdx) => (
            <div key={columnIdx} className="col-4">
              <BlockProductsColumnsTitle>
                {column.title}
              </BlockProductsColumnsTitle>
              <BlockProductColumnList>
                {column.products.map((product) => (
                  <BlockProductsColumnsListItem key={product.id}>
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
                  </BlockProductsColumnsListItem>
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
