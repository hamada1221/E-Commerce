import { useEffect, useState } from "react";
import { getProducts } from "../APIS/GetProducts";
import Loading from "./Loading";
import Item from "./Item";

function FeaturedProducts({arr}) {
    
    let [productsArr, setProductsArr] = useState([]);
    let [loading, setLoading] = useState(false);
    let [msg, setMsg] = useState('');

    async function getProductsApi() {
        setLoading(true);
        let data = await getProducts();
        if (data?.data) {
            setProductsArr(data?.data);
            setMsg('');
            setLoading(false);
        } else {
            setMsg(data);
            setLoading(false);
        }
}

    useEffect(() => {getProductsApi()}, [])

    if (loading)
        return <Loading></Loading>
    
    if (msg)
        return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>
 
    return (
        <div className="row">
            {arr?.length? arr.map(prod => <Item key={prod?._id} ele={prod}></Item>): productsArr.map(prod => <Item key={prod?._id} ele={prod}></Item>)}
        </div>
    );
}

export default FeaturedProducts;