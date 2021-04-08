// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { CategoryFilterBuilder } from '~/fake-server/filters/category-filter-builder';
import { CheckFilterBuilder } from '~/fake-server/filters/check-filter-builder';
import { clone, delayResponse, error } from '~/fake-server/utils';
import { ColorFilterBuilder } from '~/fake-server/filters/color-filter-builder';
import { getNextReviewId, reviews } from '~/fake-server/database/reviews';
import { IFilterValues, IListOptions, IReviewsList } from '~/interfaces/list';
import { IProductsList, IProduct } from '~/interfaces/product';
import { IReview } from '~/interfaces/review';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import { products as dbProducts } from '~/fake-server/database/products';
import { RadioFilterBuilder } from '~/fake-server/filters/radio-filter-builder';
import { RangeFilterBuilder } from '~/fake-server/filters/range-filter-builder';
import { RatingFilterBuilder } from '~/fake-server/filters/rating-filter-builder';
import { shopCategoriesList } from '~/fake-server/database/categories';
import { LenghtFilterBuilder } from '~/fake-server/filters/length-filter-builder';
import { VehicleFilterBuilder } from '~/fake-server/filters/vehicle-filter-builder';

import {
  IAddProductReviewData,
  IGetSearchSuggestionsOptions,
  IGetSearchSuggestionsResult,
} from '~/api/base';

function getProducts(
  shift: number,
  categorySlug: string | null = null
): IProduct[] {
  let shiftValue = shift;

  switch (categorySlug) {
    case 'tires-wheels':
    case 'power-tools':
      shiftValue += 5;
      break;
    case 'interior-parts':
    case 'hand-tools':
      shiftValue += 10;
      break;
    case 'engine-drivetrain':
    case 'plumbing':
      shiftValue += 15;
      break;
    default:
  }

  return [...dbProducts.slice(shiftValue), ...dbProducts.slice(0, shiftValue)];
}

export function getProductsList(
  options: IListOptions = {},
  filterValues: IFilterValues = {}
): Promise<IProductsList> {
  const filters: AbstractFilterBuilder[] = [
    new CategoryFilterBuilder('category', 'Categories'),
    new VehicleFilterBuilder('vehicle', 'Vehicle'),
    new RangeFilterBuilder('price', 'Price'),
    new CheckFilterBuilder('brand', 'Brand'),
    new RadioFilterBuilder('discount', 'With Discount'),
    new RatingFilterBuilder('rating', 'Rating'),
    new LenghtFilterBuilder('length', 'length'),
    new ColorFilterBuilder('color', 'Color'),
  ];

  let products = dbProducts.slice(0);

  filters.forEach((filter) =>
    filter.makeItems(products, filterValues[filter.slug])
  );

  // Calculate items count for filter values.
  filters.forEach((filter) => filter.calc(filters));

  // Apply filters to products list.

  products = products.filter((product) => {
    return filters.reduce<boolean>(
      (mr, filter) => mr && filter.test(product),
      true
    );
  });

  const page = options?.page || 1;
  const limit = options?.limit || 16;
  const sort = options?.sort || 'default';
  const total = products.length;
  const pages = Math.ceil(products.length / limit);
  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);

  // Sort items array.
  products = products.sort((a, b) => {
    if (['name_asc', 'name_desc'].includes(sort)) {
      if (a.name === b.name) {
        return 0;
      }

      return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
    }

    return 0;
  });

  const items = (products.slice(from - 1, to) as unknown) as Array<IProduct>;

  return delayResponse(
    Promise.resolve({
      items,
      page,
      limit,
      sort,
      total,
      pages,
      from,
      to,
      filters: filters.map((x) => x.build()),
    }),
    350
  );
}

export function getProductBySlug(slug: string): Promise<IProduct> {
  slug = 'test';
  const product = dbProducts.find((x) => {
    return x.slug === slug;
  });

  if (!product) {
    return error('Page Not Found');
  }

  return Promise.resolve(clone(product));
}

export function getProductReviews(
  productId: number,
  options?: IListOptions
): Promise<IReviewsList> {
  let items = reviews.slice(0);

  items.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }

    return 0;
  });

  const page = options?.page || 1;
  const limit = options?.limit || 8;
  const sort = options?.sort || 'default';
  const total = items.length;
  const pages = Math.ceil(items.length / limit);
  const from = (page - 1) * limit + 1;
  const to = page * limit;

  items = (items.slice(from - 1, to) as unknown) as Array<IReview>;

  return Promise.resolve({
    items,
    page,
    limit,
    sort,
    total,
    pages,
    from,
    to,
  });
}

export function addProductReview(
  productId: number,
  data: IAddProductReviewData
): Promise<IReview> {
  const review: IReview = {
    id: getNextReviewId(),
    date: new Date().toISOString().substr(0, 10),
    author: data.author,
    avatar: '/images/avatars/avatar-2.jpg',
    rating: data.rating,
    content: data.content,
  };

  reviews.push(review);

  return delayResponse(Promise.resolve(review));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getProductAnalogs(productId: number): Promise<IProduct[]> {
  const slugs: string[] = [
    'sunset-brake-kit',
    'specter-brake-kit',
    'brake-kit',
  ];
  const analogs: IProduct[] = dbProducts.filter((x) => slugs.includes(x.slug));

  return Promise.resolve(clone(analogs));
}

export function getRelatedProducts(
  productId: number,
  limit: number
): Promise<IProduct[]> {
  return Promise.resolve(clone(dbProducts.slice(0, limit)));
}

export function getFeaturedProducts(
  categorySlug: string | null,
  limit: number
): Promise<IProduct[]> {
  return delayResponse(
    Promise.resolve(clone(getProducts(0, categorySlug).slice(0, limit))),
    1000
  );
}

export function getPopularProducts(
  categorySlug: string | null,
  limit: number
): Promise<IProduct[]> {
  return delayResponse(
    Promise.resolve(clone(getProducts(6, categorySlug).slice(0, limit))),
    1000
  );
}

export function getTopRatedProducts(
  categorySlug: string | null,
  limit: number
): Promise<IProduct[]> {
  return delayResponse(
    Promise.resolve(clone(getProducts(12, categorySlug).slice(0, limit))),
    1000
  );
}

export function getSpecialOffers(limit: number): Promise<IProduct[]> {
  return delayResponse(
    Promise.resolve(clone(getProducts(8).slice(0, limit))),
    1000
  );
}

export function getLatestProducts(limit: number): Promise<IProduct[]> {
  return Promise.resolve(clone(dbProducts.slice(0, limit)));
}

export function getSearchSuggestions(
  query: string,
  options?: IGetSearchSuggestionsOptions
): Promise<IGetSearchSuggestionsResult> {
  const queryVal = query.toLowerCase();
  const optionsVal = {
    limitProducts: 4,
    limitCategories: 4,
    ...options,
  };

  const resultProducts = dbProducts.filter((x) =>
    x.name.toLowerCase().includes(queryVal)
  );
  const resultCategories = shopCategoriesList.filter((x) =>
    x.name.toLowerCase().includes(queryVal)
  );

  return Promise.resolve({
    products: resultProducts.slice(0, optionsVal.limitProducts),
    categories: resultCategories
      .slice(0, optionsVal.limitCategories)
      .map((x) => prepareCategory(x)),
  });
}
