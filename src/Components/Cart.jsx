import { clearCartApi, deleteCartApi, getCartApi, updateCartApi } from "../APIS/CartApis";
import useQueryCart from "../Hooks/useQueryCart";
import Loading from "./Loading";
import useMutationCart from './../Hooks/useMutationCart';
import BasicModal from "./BasicModal";
import { Helmet } from "react-helmet";

function Cart() {


    let { data, isLoading, isError, error } = useQueryCart('getCart', getCartApi)
    let { mutate: delmutate, isPending:delpending } = useMutationCart(deleteCartApi)
    let { mutate: updatemutate, isPending: uppending } = useMutationCart(updateCartApi)
    let { mutate: clearmutate, isPending: clrpending } = useMutationCart(clearCartApi)


    if (isLoading|| delpending|| uppending|| clrpending) return <Loading></Loading>
    if (isError) return <div className="text-center my-4">
        <h2>${error?.message}</h2>
        <h2>Cart is empty</h2>
        <img src="" alt="" />
    </div>
    return (
        <div className="my-4">
            <Helmet>
                <title>Cart</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="flex justify-between my-3"><h1 className="my-5 fa-xl text-center font-bold">Cart Item <span className="text-green-600">{data?.numOfCartItems}</span></h1>
                <h1 className="my-5 fa-xl text-center font-bold">Cart Item: <span className="text-green-600">{data?.data?.totalCartPrice} EGP</span></h1>
                <button onClick={() => { clearmutate()}} className="bg-red-600 p-2 text-white rounded hover:bg-red-800">Clear Cart</button></div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action <i className="fas fa-trash text-red-500"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.products.map((ele) => <tr key={ele?.product?._id} className="bg-white border-b hover:bg-gray-50 dark:hover:bg-green-200">
                            <td className="p-4">
                                <img src={ele?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                {ele?.product?.title}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <button onClick={() => {
                                        {
                                            ele?.count == 1 ? delmutate(ele?.product?._id) : updatemutate({
                                                id: ele?.
                                                    product?._id, count: ele?.count ? ele?.count - 1 : ele?.count
                                            })
                                        }
                                    }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-green-800 rounded-full focus:outline-none hover:bg-green-500 hover:text-white" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <div>
                                        <span className="font-semibold">{ele?.count}</span>
                                    </div>
                                    <button onClick={() => { updatemutate({ id: ele?.product?._id, count: ele?.count + 1 }) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-green-800 rounded-full focus:outline-none hover:bg-green-500 hover:text-white" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                {ele?.price} EGP
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => { delmutate(ele?.product?._id) }} className="font-medium text-white bg-red-700 hover:bg-red-500 p-3 rounded" >Remove</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

            <BasicModal cartId={data?.data?._id} />
        </div>
    );
}

export default Cart;