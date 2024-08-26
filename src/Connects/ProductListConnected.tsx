import { connect } from "react-redux";
import { State } from "../store";
import { productsMapSelector } from "../selectors/products";
import { loadProductsAction } from "../actions/products";
import OrderProductsList from "../Components/OrderProductsList";
import { orderloadingSelector, orderMapSelector } from "../selectors/order";
import { loadingOrdersAction } from "../actions/order";


const mapToProps = (state: State) => {
    return {
        products: productsMapSelector(state),
        order: orderMapSelector(state),
        loading : orderloadingSelector(state),
    }
}

const mapDispatchToProps = {
    orderLoading: loadingOrdersAction
}

export default connect(mapToProps,mapDispatchToProps)(OrderProductsList);