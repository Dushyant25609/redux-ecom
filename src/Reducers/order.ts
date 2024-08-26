import { produce } from "immer";
import { Action } from "../actions/main";
import { LOAD_ORDER, LOADING_ORDER } from "../actions/order";
import Order from "../models/Order";
import { normalize, schema } from "normalizr";

export type OrderState = {
    loading: boolean,
    order: {[id: number]: Order},
};

const initialState: OrderState = {
    loading: true,
    order: []
};

function orderReducer(state = initialState, action: Action): OrderState {
  switch (action.type) {
    case LOAD_ORDER:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case LOADING_ORDER:
        return produce(state, (draft) =>{
            draft.loading = false;
            const OrderArr = action.payload;

            const productEntity = new schema.Entity("products");
            const orderEntity = new schema.Entity("orders", {products: [productEntity],});


            const data = normalize(OrderArr, [orderEntity]);

            draft.order = data.entities.orders!;
        })
    default:
      return state;
  }
}

export default orderReducer;