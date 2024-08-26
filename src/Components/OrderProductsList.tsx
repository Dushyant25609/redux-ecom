import { FC, useEffect } from "react";
import Product from "../models/Product";
import { useParams } from "react-router-dom";
import Products from "./Products";
import axios from "axios";
import Order from "../models/Order";

type OrderProductsListProps = {
    products : {[id: number]: Product},
    order: {[id: number]: Order},
    orderLoading: (action: Order[]) => void,
    loading: boolean
};

const OrderProductsList: FC<OrderProductsListProps> = ({products,order,loading,orderLoading}) => {
    const params = useParams();
    const cartNo = params.cartNo;
    if(loading){
        axios.get("https://dummyjson.com/carts").then((response)=> {
            console.log(response.data)
            orderLoading(response.data.carts);
        })
    }
    if(loading){
        return <div>Loading</div>
    }
    const productArr = order[+cartNo!].products.map( (pid) => { return (products[pid])})
    return (
        <>
        <div className="w-full bg-white flex flex-col shadow-xl"><h1 className="self-center px-2 py-4 text-4xl font-bold" >Product List</h1></div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 p-4 bg-white m-8 rounded-md">
        {productArr && productArr.map( (p) => { 
            return(
            <Products key={p.id} thumbnail={p.thumbnail} title={p.title} price={p.price} />)  })}
        </div>
        </>
    )
}

export default OrderProductsList;