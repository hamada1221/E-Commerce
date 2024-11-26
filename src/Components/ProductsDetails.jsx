import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetSpecificProduct } from "../APIS/GetSpecificProduct";
import { motion } from "framer-motion";
import { getProductswithCategories } from "../APIS/GetProducts";
import Item from "./Item";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { AddToCartApi } from "../APIS/CartApis";
import useMutationCart from "../Hooks/useMutationCart";

function ProductsDetails() {

    let { mutate: addMutate, status, data } = useMutationCart(AddToCartApi)
    if (status === 'success')
    { toast.success(data?.data?.message); }

    let { id, catedoryId } = useParams()
    let [imgSrc, setImgSrc] = useState('')
    let [product, setProduct] = useState([]);
    let [relatedProduct, setRelatedProduct] = useState([])
    let [loading, setLoading] = useState(false);
    let [msg, setMsg] = useState('');

    async function GetSpecificProductApi() {

        setLoading(true);
        let data = await GetSpecificProduct(id)

        if (data?.data) {
            setProduct(data?.data);
            setMsg('');
            setLoading(false);
        } else {
            setMsg(data);
            setLoading(false);
        }
    }

    //////// related products
    async function getProductswithCategoriesApi() {

        setLoading(true);
        let data = await getProductswithCategories(catedoryId)

        if (data?.data) {
            setRelatedProduct(data?.data);
            setMsg('');
            setLoading(false);
        } else {
            setMsg(data);
            setLoading(false);
        }
    }


    function changeSrc(e) {
        setImgSrc(e.target.src)
    }

    useEffect(() => {
        getProductswithCategoriesApi()
    }, [])

    useEffect(() => {
        GetSpecificProductApi()
    }, [id])


    if (loading)
        return <Loading></Loading>

    if (msg)
        return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>



    return (

        <div className="row items-center py-5">
            <div className="md:w-1/3">
                <img src={imgSrc ? imgSrc : product?.imageCover} className="w-full" alt="" />
                <ul className="flex justify-center my-3 gap-2">
                    {product?.images?.map(img => <li key={img}><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={img} onClick={changeSrc} alt="" className='md:w-[80px] cursor-pointer' /></li>)}
                </ul>
            </div>

            <div className="md:w-2/3 px-5">
                <p className="text-green-600 ">{product?.category?.name}</p>
                <p className="line-clamp-1">{product?.title}</p>
                <p className="font-thin">{product?.description}</p>
                <div className="flex justify-between my-3 items-center">
                    <p>{product?.price} EGP</p>
                    <p className="fas fa-star text-yellow-400">{product?.ratingsAverage}</p>
                </div>
                <button onClick={() => {addMutate(product?._id)}} className="btn bg-green-600 text-white p-2 rounded w-full hover:bg-green-700">Add to Cart</button>
            </div>
            {relatedProduct?.map(prod=><Item ele={prod} key={prod._id}></Item>)}
        </div>
    );
}

export default ProductsDetails;