import axios from 'axios'


let baseUrl = `https://ecommerce.routemisr.com/api/v1`
let token = localStorage.getItem('userToken')


// Add to cart

export function AddToCartApi(productId)
{
  return  axios.post(`${baseUrl}/cart`, { productId }, { headers: { token } })
}

// Get cart

export function getCartApi()
{
  return  axios.get(`${baseUrl}/cart`, { headers: { token } })

}

//Delete items
export function deleteCartApi(id)
{
  return  axios.delete(`${baseUrl}/cart/${id}`, { headers: { token } })

}

//Update items
export function updateCartApi({id, count})
{
  return  axios.put(`${baseUrl}/cart/${id}`,{count}, { headers: { token } })

}

// Clear cart
export function clearCartApi()
{
  return  axios.delete(`${baseUrl}/cart`, { headers: { token } })

}