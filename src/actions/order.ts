import Order from "../models/Order";
import { ActionCreator } from "./main";

export const LOAD_ORDER = "Load_Order";

export const loadOrdersAction: ActionCreator = () => ({
  type: LOAD_ORDER,
});

export const LOADING_ORDER = "Loading_Order";

export const loadingOrdersAction: ActionCreator<Order[]> = (orders: Order[]) => ({
  type: LOADING_ORDER,
  payload: orders,
});