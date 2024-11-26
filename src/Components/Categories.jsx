import { useEffect, useState } from "react";
import { getCategories } from "../APIS/GetCategories";
import Slider from "react-slick";
function Categories() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    let [categoriesArr, setCategoriesArr] = useState([]);
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

    useEffect(() => { getCategoriesApi()},[])

    return ( 
        <div className="py-5 md:block hidden">
            <Slider {...settings}>
                {categoriesArr.map((ele)=><img className='h-[150px]' style={{objectFit:'cover'}} key={ele?._id} src={ele?.image}></img>)}
            </Slider>
        </div>
     );
}

export default Categories;