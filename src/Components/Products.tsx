import { FC } from "react";

type ProductsProps = {
    title: string,
    price: number,
    thumbnail: string,
};

const Products: FC<ProductsProps> = ({title,price,thumbnail}) => {
    return (
        <div className="flex flex-col shadow-lg p-3 justify-between">
            <img src={thumbnail} className="self-center" alt="" />
            <div>
            <h1><span className="font-semibold">Title:</span>  {title}</h1>
            <p>price {price} </p>
            </div>
        </div>
    )
}

export default Products;