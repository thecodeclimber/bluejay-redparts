import { IActiveFilter } from '~/interfaces/filter';
import { IShopCategory } from '~/interfaces/category';
import { SHOP_NAMESPACE } from '~/store/shop/shopTypes';
import { makeProduct } from './shopHelpers';
import {
  SHOP_FETCH_CATEGORY_SUCCESS,
  SHOP_FETCH_PRODUCTS_LIST_START,
  SHOP_FETCH_PRODUCTS_LIST_SUCCESS,
  SHOP_INIT,
  SHOP_RESET_FILTER,
  SHOP_RESET_FILTERS,
  SHOP_SET_FILTER_VALUE,
  SHOP_SET_OPTION_VALUE,
  ShopFetchCategorySuccessAction,
  ShopFetchProductsListStartAction,
  ShopResetFilterAction,
  ShopResetFiltersAction,
  ShopSetFilterValueAction,
  ShopSetOptionValueAction,
  ShopThunkAction,
} from '~/store/shop/shopActionTypes';

let cancelPreviousCategoryRequest = () => {};
let cancelPreviousProductsListRequest = () => {};

export function shopInit(
  categorySlug: string | null,
  options: any,
  filters: any
): any {
  return {
    type: SHOP_INIT,
    categorySlug,
    options,
    filters,
  };
}

export function shopFetchCategorySuccess(
  category: IShopCategory | null
): ShopFetchCategorySuccessAction {
  return {
    type: SHOP_FETCH_CATEGORY_SUCCESS,
    category,
  };
}

export function shopFetchProductsListStart(): ShopFetchProductsListStartAction {
  return {
    type: SHOP_FETCH_PRODUCTS_LIST_START,
  };
}

export function shopFetchProductsListSuccess(productsList: any): any {
  return {
    type: SHOP_FETCH_PRODUCTS_LIST_SUCCESS,
    productsList,
  };
}

export function shopResetFilters(): ShopResetFiltersAction {
  return {
    type: SHOP_RESET_FILTERS,
  };
}

export function shopResetFilter(
  activeFilter: IActiveFilter
): ShopResetFilterAction {
  return {
    type: SHOP_RESET_FILTER,
    activeFilter,
  };
}

export function shopSetOptionValue(
  option: string,
  value: string
): ShopSetOptionValueAction {
  return {
    type: SHOP_SET_OPTION_VALUE,
    option,
    value,
  };
}

export function shopSetFilterValue(
  filter: string,
  value: string | null
): ShopSetFilterValueAction {
  return {
    type: SHOP_SET_FILTER_VALUE,
    filter,
    value,
  };
}

export function shopFetchCategoryThunk(
  categorySlug: string | null
): ShopThunkAction<Promise<void>> {
  return async (dispatch) => {
    // let canceled = false;
    // cancelPreviousCategoryRequest();
    // cancelPreviousCategoryRequest = () => {
    //   canceled = true;
    // };
    // let request: Promise<IShopCategory | null>;
    // if (categorySlug) {
    //   request = shopApi.getCategoryBySlug(categorySlug);
    // } else {
    //   request = Promise.resolve(null);
    // }
    // const category = await request;
    // if (canceled && process.browser) {
    //   return;
    // }
    // dispatch(shopFetchCategorySuccess(category));
  };
}

export function shopFetchProductsListThunk(
  products: any
): ShopThunkAction<Promise<void>> {
  return async (dispatch, getState) => {
    let canceled = false;

    cancelPreviousProductsListRequest();
    cancelPreviousProductsListRequest = () => {
      canceled = true;
    };

    dispatch(shopFetchProductsListStart());

    const shopState = getState()[SHOP_NAMESPACE];

    let { filters } = shopState;

    if (shopState.categorySlug !== null) {
      filters = { ...filters, category: shopState.categorySlug };
    }
    if (canceled && process.browser) {
      return;
    }
    let TotalProducts: any = [];
    if (products.data.length > 0) {
      let productList: any = [];
      products.data.map((product: any) => {
        return productList.push(makeProduct(product));
      });
      TotalProducts = productList.reduce((arr: any, item: any) => {
        return arr.concat(item);
      });
    } else {
      TotalProducts = makeProduct(products);
    }

    dispatch(shopFetchProductsListSuccess(TotalProducts));
  };
}

export function shopSetOptionValueThunk(
  option: string,
  value: string
): ShopThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch(shopSetOptionValue(option, value));
  };
}

export function shopSetFilterValueThunk(
  filter: string,
  value: string | null
): ShopThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch(shopSetFilterValue(filter, value));
  };
}

export function shopResetFiltersThunk(): ShopThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch(shopResetFilters());
  };
}

export function shopResetFilterThunk(
  activeFilter: IActiveFilter
): ShopThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch(shopResetFilter(activeFilter));
  };
}

export function shopInitThunk(
  categorySlug: string | null,
  productsList: any,
  options: any,
  filters: any
): ShopThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch(shopInit(categorySlug, options, filters));

    await Promise.all([
      dispatch(shopFetchCategoryThunk(categorySlug)),
      dispatch(shopFetchProductsListThunk(productsList)),
    ]);
  };
}
