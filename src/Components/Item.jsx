import { Link } from "react-router-dom";
import { AddToCartApi } from "../APIS/CartApis";
import useMutationCart from "../Hooks/useMutationCart";
import { toast } from "react-toastify";
import { useState } from "react";

function Item({ ele }) {

    let [flag,setFalg] = useState(false)

    let { mutate: addMutate, status,data } = useMutationCart(AddToCartApi)
    if (status === 'success')
    {toast.success(data?.data?.message);}

    return (
        <div className="md:w-1/6 sm:w-1/2">
            <div className="product p-2 cursor-pointer">
                <i onClick={()=>setFalg(!flag)} className={`text-green-600  fa-solid ${flag? 'fa-heart':'fa-heart-broken'}`}></i>
                <Link to={`/productsdetails/${ele?._id}/${ele?.category?._id}`}>
                <img src={ele?.imageCover} className="w-full" alt="" />
                <p className="text-green-600 ">{ele?.category?.name}</p>
                <p className="line-clamp-1">{ele?.title}</p>
                <div className="flex justify-between my-3 items-center">
                    <p>{ele?.price} EGP</p>
                    <p className="fas fa-star text-yellow-400">{ele?.ratingsAverage}</p>
                    </div>
                </Link>
                <button onClick={() => { addMutate(ele?._id)}} className="btn bg-green-600 text-white p-2 rounded">Add to Cart</button>
            </div></div>

    );
}

export default Item;