export enum ProductActionsTypes {
  GET_ALL_PRODUCTS = '[Product] GET All products',
  GET_SELECTED_PRODUCTS = '[Product] GET Selected products',
  GET_AVAILABLE_PRODUCTS = '[Product] GET Available products',
  SEARCH_PRODUCTS = '[Product] Search products',
  NEW_PRODUCTS = '[Product] New product',
  SELECT_PRODUCT = '[Product] Select product',
  EDIT_PRODUCT = '[Product] Edit product',
  DELETE_PRODUCT = '[Product] Delete product',
  PRODUCT_ADDED = '[Product] product added',
  PRODUCT_UPDATED = '[Product] product updated',
}

export interface ActionEvent {
  type: ProductActionsTypes;
  payload?: any;
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR,
}

export interface AppDataState<T> {
  dataState?: DataStateEnum;
  data?: T;
  errorMessage?: string;
}
