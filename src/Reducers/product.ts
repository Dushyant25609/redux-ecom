import { produce } from "immer";
import { Action } from "../actions/main";
import { LOAD_PRODUCTS, LOADING_PRODUCTS } from "../actions/products";
import Product from "../models/Product"
import Order from "../models/Order";
import { LOADING_ORDER } from "../actions/order";


export type ProductState = {
    loading: boolean,
    products: {[id:number]: Product},
};

type normalisedProduct = {
    products: {[id:number]: Product},
}

export const initialState: ProductState = {
    loading: false,
    products: [],
};

function productReducer(state = initialState, action: Action): ProductState {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading = true;
      })
    case LOADING_PRODUCTS:
        return produce(state, (draft) => {
            draft.loading = false;
        });
    case LOADING_ORDER:
        return produce(state, (draft) => {
            const cart = action.payload;
            const products = cart.reduce( (previous: Product[], current: any) => { return [...previous, ...current.products]; },[])

            const normalisedProducts = products.reduce( ( previous: normalisedProduct, current: Product) => { 
                return {...previous,[current.id]: current}
            },{})
            draft.products = normalisedProducts;
            draft.loading = false;
        })
    default:
      return state;
  }
}

export default productReducer;