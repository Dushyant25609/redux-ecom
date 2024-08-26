import { FC } from "react";
import { Link } from "react-router-dom";

type OrderProps = {
    id: number,
    totalProducts: number,
    Amount: number
};

const Order: FC<OrderProps> = ({id,totalProducts,Amount}) => {
    return (
        <Link to={"/Order/Products/" + id} className="shadow-xl p-4 border bg-white rounded-lg hover:bg-black hover:text-white transition-colors ">
            <h3>Cart No.: {id}</h3>
            <p>Total products: {totalProducts}</p>
            <p>Total Amount: {Amount}</p>
        </Link>
    )
}

export default Order;