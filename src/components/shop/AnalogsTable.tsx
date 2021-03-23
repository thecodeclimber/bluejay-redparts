// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  AnalogsTableStyledComponent,
  AnalogsTableColumnBrand,
  AnalogsTableColumnPrice,
  AnalogsTableColumnRating,
  AnalogsTableProductName,
  AnalogsTableSku,
  AnalogsTableRating,
  AnalogstableRatingStars,
  AnalogsTableRatingLabel,
  AnalogsTableCountry,
} from '~/styled-components/shop/AnalogsTable';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';

interface Props {
  productId: number;
}

function AnalogsTable(props: Props) {
  const intl = useIntl();
  const { productId } = props;
  const [analogs, setAnalogs] = useState<IProduct[]>([]);

  useEffect(() => {
    let canceled = false;

    shopApi.getProductAnalogs(productId).then((result) => {
      if (canceled) {
        return;
      }

      setAnalogs(result);
    });

    return () => {
      canceled = true;
    };
  }, [productId]);

  return (
    <AnalogsTableStyledComponent>
      <table>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="TABLE_NAME" />
            </th>
            <AnalogsTableColumnRating as="th">
              <FormattedMessage id="TABLE_RATING" />
            </AnalogsTableColumnRating>
            <AnalogsTableColumnBrand as="th">
              <FormattedMessage id="TABLE_BRAND" />
            </AnalogsTableColumnBrand>
            <AnalogsTableColumnPrice as="th">
              <FormattedMessage id="TABLE_PRICE" />
            </AnalogsTableColumnPrice>
          </tr>
        </thead>
        <tbody>
          {analogs.map((analog) => (
            <tr key={analog.id}>
              <td>
                <AnalogsTableProductName href={url.product(analog)}>
                  {analog.name}
                </AnalogsTableProductName>
                <br />
                <AnalogsTableSku
                  data-title={intl.formatMessage({ id: 'TABLE_SKU' })}
                >
                  {analog.sku}
                </AnalogsTableSku>
              </td>
              <AnalogsTableColumnRating as="td">
                <AnalogsTableRating>
                  <AnalogstableRatingStars>
                    <Rating value={analog.rating || 0} />
                  </AnalogstableRatingStars>
                  <AnalogsTableRatingLabel>
                    <FormattedMessage
                      id="TEXT_RATING_LABEL"
                      values={{
                        rating: analog.rating,
                        reviews: analog.reviews,
                      }}
                    />
                  </AnalogsTableRatingLabel>
                </AnalogsTableRating>
              </AnalogsTableColumnRating>
              <AnalogsTableColumnBrand
                as="td"
                data-title={intl.formatMessage({ id: 'TABLE_BRAND' })}
              >
                {analog.brand && (
                  <React.Fragment>
                    {analog.brand.name}
                    <AnalogsTableCountry>
                      (
                      <FormattedMessage
                        id={`COUNTRY_NAME_${analog.brand.country}`}
                      />
                      )
                    </AnalogsTableCountry>
                  </React.Fragment>
                )}
              </AnalogsTableColumnBrand>
              <AnalogsTableColumnPrice as="td">
                <CurrencyFormat value={analog.price} />
              </AnalogsTableColumnPrice>
            </tr>
          ))}
        </tbody>
      </table>
    </AnalogsTableStyledComponent>
  );
}

export default AnalogsTable;
