export type AddProductState = {
    loading: boolean;
    error: string;
  };


  export type CategoriesState = {
    categories: [];
    loading: boolean;
    error: string;
  };


  export type ProductState = {
    products: any;
    selectedProduct: any;
    loading: boolean;
    error: string;
  };