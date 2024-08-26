import { combineReducers, createStore } from "redux";
import orderReducer from "./Reducers/order";
import productReducer from "./Reducers/product";

const reducer = combineReducers({
    order : orderReducer,
    product : productReducer
})

export type State = ReturnType<typeof reducer>;

export const store = createStore(reducer);