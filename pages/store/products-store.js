/* 
export interface Product {
  id?: any;
  details?: string;
  createdBy?: any;
  title?: string;
  product: ProductDetail;
}

interface ProductDetail {
  name: string;
  color?: string;
  item?: string;
  price?: any;
  qty?: any;
  url?: string;
} */
export const ProductsState = () => {
  let state = {
    products: [],
    selectedProducts: [],
  };

  console.log({state})

}

