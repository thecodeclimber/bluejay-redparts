// third-party
import queryString from 'query-string';
// application
import { AppDispatch } from '~/store/types';
import { GetServerSidePropsContext } from '~/store/store';
import { IFilterValues, IListOptions } from '~/interfaces/list';
import { shopInitThunk } from '~/store/shop/shopActions';
import { IProductAttribute } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { makeIdGenerator, nameToSlug } from '~/fake-server/utils';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import { IProductAttributesDef } from '~/fake-server/interfaces/product-def';
import { shopCategoriesList } from '~/fake-server/database/categories';

const getNextId = makeIdGenerator();

export function parseQueryOptions(query: string) {
  const queryObject = queryString.parse(query);
  const optionValues: IListOptions = {};

  if (typeof queryObject.page === 'string') {
    optionValues.page = parseFloat(queryObject.page);
  }
  if (typeof queryObject.limit === 'string') {
    optionValues.limit = parseFloat(queryObject.limit);
  }
  if (typeof queryObject.sort === 'string') {
    optionValues.sort = queryObject.sort;
  }

  return optionValues;
}

export function parseQueryFilters(query: string) {
  const queryObject = queryString.parse(query);
  const filterValues: IFilterValues = {};

  Object.keys(queryObject).forEach((param) => {
    const value = queryObject[param];
    const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

    if (!mr || typeof value !== 'string') {
      return;
    }

    const filterSlug = mr[1];

    filterValues[filterSlug] = value;
  });

  return filterValues;
}

export function buildQuery(options: IListOptions, filters: IFilterValues) {
  const params: { [key: string]: any } = {};

  if (options.page !== 1) {
    params.page = options.page;
  }

  if (options.limit !== 12) {
    params.limit = options.limit;
  }

  if (options.sort !== 'default') {
    params.sort = options.sort;
  }

  Object.keys(filters)
    .filter((x) => x !== 'category' && !!filters[x])
    .forEach((filterSlug) => {
      params[`filter_${filterSlug}`] = filters[filterSlug];
    });

  return queryString.stringify(params, { encode: false });
}

const fetchImages = (images: any) => {
  images.map((image: any) => {
    return [`${image}.png`];
  });
};

const createProductName = (def: any) => {
  return `${def.charAt(0).toUpperCase() + def.slice(1)}`;
};

const createProductSlug = (def: any) => {
  return `${def.toLowerCase().replace(/ /g, '_')}`;
};

export const makeProduct = (products: any) => {
  return products.products.map((def: any) => {
    return {
      id: getNextId(),
      name: createProductName(def),
      slug: createProductSlug(def),
      excerpt: `
                      Many philosophical debates that began in ancient times are still debated today. In one general sense,
                      philosophy is associated with wisdom, intellectual culture and a search for knowledge.
                  `,
      description: def,
      sku: 'HJ55263',
      partNumber: 'BDX-750Z370-S',
      stock: 'in-stock',
      price: 25,
      images: fetchImages(products.images),
      type: {
        slug: 'default',
        name: 'Default',
        attributeGroups: [
          {
            name: 'General',
            slug: 'general',
            attributes: [
              'length',
              'diameter',
              'head_type',
              'drive',
              'grade',
              'material',
              'finish',
              'qty_per_box',
            ],
          },
          {
            name: 'Dimensions',
            slug: 'dimensions',
            attributes: ['length', 'diameter'],
          },
        ],
      },

      options: [
        {
          type: 'default',
          slug: 'material',
          name: 'Material',
          values: [
            { slug: 'steel', name: 'Steel' },
            { slug: 'aluminium', name: 'Aluminium' },
            { slug: 'thorium', name: 'Thorium' },
          ],
        },
      ],
      subCategory: def.Category,
    };
  });
};

export default async function getShopPageData(
  context: GetServerSidePropsContext,
  slug?: string
): Promise<void> {
  const categorySlug =
    slug ||
    (typeof context.params?.slug === 'string' ? context.params.slug : null);

  if (typeof context.req.url === 'string') {
    const query = queryString.stringify(
      queryString.parseUrl(context.req.url).query
    );
    const options = parseQueryOptions(query);
    const filters = parseQueryFilters(query);
    const dispatch = context.store.dispatch as AppDispatch;

    await dispatch(shopInitThunk(categorySlug, options, filters));
  }
}
