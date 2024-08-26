import { FC, useEffect } from "react";
import Order from "./Order";
import orderType from "../models/Order";
import axios from "axios";


type OrderListProps = {
    order: orderType[],
    orderLoading: (order: orderType[]) => void,
    loading: boolean,
};

const OrderList: FC<OrderListProps> = ({order,orderLoading,loading}) => {
    useEffect(()=>{
        if(loading){
            axios.get("https://dummyjson.com/carts").then((response)=> {
                orderLoading(response.data.carts);
            })
        }
    }, []);
    console.log(order)
    return (
        <>
        <div className="w-full bg-white flex flex-col shadow-xl"><h1 className="self-center px-2 py-4 text-4xl font-bold" >Cart List</h1></div>
        <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 px-4 py-4 gap-2">
            {order && order.map( (p) => { return <Order key={p.id} id={p.id} totalProducts={p.totalProducts} Amount={p.total}/>})}
        </div>
        </>
    )
}

export default OrderList;