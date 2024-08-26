import { connect } from "react-redux";
import { loadingOrdersAction } from "../actions/order";
import { orderListSelector, orderloadingSelector } from "../selectors/order";
import { State } from "../store";
import OrderList from "../Components/OrderList";


const mapToProps = (state: State) => {
    return {
        order: orderListSelector(state),
        loading: orderloadingSelector(state)
    }
}

const mapDispatchToProps = {
    orderLoading : loadingOrdersAction
}

export default connect(mapToProps,mapDispatchToProps)(OrderList);