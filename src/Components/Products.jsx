import { useEffect, useState } from "react";
import { getCategories } from "../APIS/GetCategories";
import FeaturedProducts from "./FeaturedProducts";
import { getProductswithCategories } from "../APIS/GetProducts";
import { Helmet } from "react-helmet";

function Products() {


    let [categoriesArr, setCategoriesArr] = useState([]);
    let [arr,setArr] = useState([])
    let [loading, setLoading] = useState(false);
    let [msg, setMsg] = useState('');

    async function getCategoriesApi() {
        setLoading(true);
        let data = await getCategories();
        if (data?.data) {
            setCategoriesArr(data?.data);
            setMsg('');
            setLoading(false);
        } else {
            setMsg(data);
            setLoading(false);
        }
    }


    useEffect(() => { getCategoriesApi() }, [])

   async function getData(id)
    {
       let data = await getProductswithCategories(id)
       setArr(data?.data);
       
    }

    return (
        <div className="flex py-5">
            <Helmet>
                <title>Product</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <ul className="md:w-1/6">
                {categoriesArr.map((ele) =><li onClick={()=>getData(ele?._id)}><a href="#" className="flex items-center cursor-pointer p-2 text-gray-900 rounded-lg  dark:hover:bg-green-600 hover:text-white group" key={ele?._id}>
                    <span className="flex-1 ms-3 whitespace-nowrap">{ele?.name}</span>
                </a></li>)}
                </ul>
            
            <div className="md:w-5/6">
                <FeaturedProducts arr={arr}/>
            </div>
        </div>
    );
}

export default Products;