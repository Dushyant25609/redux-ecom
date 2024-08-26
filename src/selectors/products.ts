import { createSelector } from 'reselect';
import { State } from "../store";

export const productsMapSelector = (state: State) => {
    return state.product.products;
}

export const productListSelector = createSelector(
    productsMapSelector,
    (normalised) => {
        return Object.keys(normalised).map(productId => normalised[+productId]);
    }
);