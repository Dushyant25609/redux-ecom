import { createSelector } from 'reselect';
import { State } from "../store";

export const orderMapSelector = (state: State) => {
    return state.order.order;
}

export const orderloadingSelector = (state: State) => {
    return state.order.loading;
}

export const orderListSelector = createSelector(
    orderMapSelector,
    (normalisedOrder) => {
        return Object.keys(normalisedOrder).map(orderId => normalisedOrder[+orderId]);
    }
);