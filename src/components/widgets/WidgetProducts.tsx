// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import AppImage from '~/components/shared/AppImage';
import {
  WidgetWidgetProducts,
  WidgetHeader,
  WidgetProductList,
  WidgetProductItem,
  WidgetProductImage,
  WidgetProductsInfo,
  WidgetProductsName,
  WidgetProductsPrice,
  WidgetProductsCurrentPrice,
  WidgetProductsNewPrice,
  WidgetProductsOldPrice,
} from '~/styled-components/widget/WidgetProducts';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  widgetTitle: React.ReactNode;
  products?: IProduct[];
}

function WidgetProducts(props: Props) {
  const { widgetTitle, className, products = [], ...rootProps } = props;

  const hasTitle = !!widgetTitle;

  return (
    <WidgetWidgetProducts>
      {hasTitle && (
        <WidgetHeader>
          <h4>{widgetTitle}</h4>
        </WidgetHeader>
      )}
      <WidgetProductList>
        {products.map((product) => (
          <WidgetProductItem key={product.id}>
            <WidgetProductImage>
              <AppLink href={url.product(product)}>
                <AppImage src={product.images && product.images[0]} />
              </AppLink>
            </WidgetProductImage>
            <WidgetProductsInfo>
              <WidgetProductsName>
                <AppLink href={url.product(product)}>{product.name}</AppLink>
              </WidgetProductsName>
              <WidgetProductsPrice>
                {product.compareAtPrice && (
                  <React.Fragment>
                    <WidgetProductsNewPrice>
                      <CurrencyFormat value={product.price} />
                    </WidgetProductsNewPrice>
                    <WidgetProductsOldPrice>
                      <CurrencyFormat value={product.compareAtPrice} />
                    </WidgetProductsOldPrice>
                  </React.Fragment>
                )}
                {!product.compareAtPrice && (
                  <WidgetProductsCurrentPrice>
                    <CurrencyFormat value={product.price} />
                  </WidgetProductsCurrentPrice>
                )}
              </WidgetProductsPrice>
            </WidgetProductsInfo>
          </WidgetProductItem>
        ))}
      </WidgetProductList>
    </WidgetWidgetProducts>
  );
}

export default React.memo(WidgetProducts);
