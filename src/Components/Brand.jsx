import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading'
import { Helmet } from 'react-helmet';

function Brand() {

    async function getBrands() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)

    }

    let { isLoading, data, isError, error, isFetching } = useQuery({
        queryKey: ['getBrands'],
        queryFn: getBrands,
        select:(data)=>data?.data
    })


    if (isLoading)
        return <Loading></Loading>
    if (isError)
        return <h2 className='fa-2xl my-2 text-red-700'>{error.message}</h2>
    return (
        <div className="row-tw">
            <Helmet>
                <title>Brand</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            {data?.data.map((ele) => (<div key={ele?._id} className="md:w-1/4">
                
                    <div className="p-3">
                        <img src={ele?.image} alt="" />
                        <p className="text-center">{ele?.name}</p>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Brand;