import axios from 'axios'
export async function GetSpecificProduct(prodId) {
    try {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)
        return data
    }
    catch (error) {
        return error?.massage
    }
}