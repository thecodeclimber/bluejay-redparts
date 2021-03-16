// react
import React from 'react';
// application
import {
  BlockBrandsList,
  BlockBrandsItem,
  BlockBrandsItemLink,
  BlockBrandsItemName,
  BlockBrandsDivider
} from '~/styled-components/block/BlockBrands';
import AppImage from '~/components/shared/AppImage';
import { IBrand } from '~/interfaces/brand';

export type IBlockBrandsLayout = 'columns-8-full' | 'columns-7-sidebar';

interface Props {
  layout: IBlockBrandsLayout;
  brands: IBrand[];
}

function BlockBrands(props: Props) {
  const { layout, brands } = props;

  return (
    <div >
      <div className="container">
        <BlockBrandsList>
          {brands.map((brand, brandIdx) => (
            <React.Fragment key={brandIdx}>
              <BlockBrandsItem>
                <BlockBrandsItemLink href="/">
                  <AppImage src={brand.image} />
                  <BlockBrandsItemName>{brand.name}</BlockBrandsItemName>
                </BlockBrandsItemLink>
              </BlockBrandsItem>
              <BlockBrandsDivider role="presentation" />
            </React.Fragment>
          ))}
        </BlockBrandsList>
      </div>
    </div>
  );
}

export default React.memo(BlockBrands);
