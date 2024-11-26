import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/finalProject assets/freshcart-logo.svg';
import { useContext, useState } from 'react';
import { Auth } from '../Context/AuthContext';
import { getCartApi } from '../APIS/CartApis';
import useQueryCart from '../Hooks/useQueryCart';

function Navbar() {
    // let { data } = useQueryCart('Cart', getCartApi)
    let { data } = useQueryCart('getCart', getCartApi)
    let { isLogin,setLogin } = useContext(Auth)
    let [open, setOpen] = useState(false)
    let navigate = useNavigate()

    function toggle() {
        setOpen(!open)
    }

    function logout()
    {
        localStorage.removeItem('userToken')
        setLogin(null)
        navigate('/login')

    }

    return (
        <nav className='py-4 bg-main-light'>
            <div className="container md:flex justify-between items-center relative">
                <div className='md:flex gap-5'>
                    <img src={logo} width={150} alt="fresh-cart-logo" />
                    {isLogin ? <ul className={`md:flex gap-5 items-center ${open? 'block' : 'hidden'}`}>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/brand'}>Brand</NavLink>
                        </li>
                    </ul> : ''}
                </div>

                <div>
                    <ul className={`md:flex gap-4  ${open ? 'block' : 'hidden'}`}>
                        {isLogin ? <> 
                        <li className='flex gap-3 cursor-pointer' onClick={logout}>LogOut
                                {isLogin ? <span className='text-green-600 font-bold'>
                                    <p>Hi {isLogin.name.toUpperCase()}</p></span> : ''}
                            </li>
                            <li className='relative'>
                                <Link to={'/cart'}>
                                    <i className='fas fa-cart-shopping'></i>
                                    <span className='w-[20px] h-[20px] absolute bottom-3 left-3 bg-green-700 rounded-full flex justify-center items-center text-white'>{data?.numOfCartItems ? data?.numOfCartItems :0}</span>
                                </Link>
                            </li>
                            </>
                            :
                            <>
                                
                                <li><NavLink to={'/login'}>Login</NavLink></li>
                                <li><NavLink to={'/register'}>Register</NavLink></li>
                                <li className='flex gap-5 md:ml-10'>
                                    <a href=""><i className='fab fa-facebook-f'></i></a>
                                    <a href=""><i className='fab fa-twitter'></i></a>
                                    <a href=""><i className='fab fa-google'></i></a>
                                    <a href=""><i className='fab fa-instagram'></i></a>
                                </li>
                            </>}
                    </ul>
                </div>
                <i onClick={toggle} className={`md:hidden block fas fa-2x ${!open ? 'fa-bars' : 'fa-close'}  absolute top-0 right-4 cursor-pointer `}></i>

            </div>
        </nav>
    );
}

export default Navbar;

//{!open? 'fa-bars' : 'fa-close'}