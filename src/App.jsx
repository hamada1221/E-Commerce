import { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
const Layout = lazy(() => import('./Components/Layout'));
const Home = lazy(() => import('./Components/Home'));
const Brand = lazy(() => import('./Components/Brand'));
const Cart = lazy(() => import('./Components/Cart'));
const Loading = lazy(() => import('./Components/Loading'));
const Login = lazy(() => import('./Components/Login'));
const Navbar = lazy(() => import('./Components/Navbar'));
const Register = lazy(() => import('./Components/Register'));
const NotFound = lazy(() => import('./Components/NotFound'));
const ProtectedRoute = lazy(() => import('./Components/ProtectedRoute'));
const Forget = lazy(() => import('./Components/Forget'));
const ResetCode = lazy(() => import('./Components/ResetCode'));
const NewPassword = lazy(() => import('./Components/NewPassword'));
const ProductsDetails = lazy(() => import('./Components/ProductsDetails'));
const Orders = lazy(() => import('./Components/Orders'));
const Products = lazy(() => import('./Components/Products'));

function App() {


  let Routes = createHashRouter([
    {
      path: '/', element: <Suspense fallback={<Loading></Loading>}><Layout></Layout></Suspense>, children: [
        { index: true, element: <ProtectedRoute><Suspense fallback={<Loading></Loading>}><Home></Home></Suspense></ProtectedRoute>},
        { path: '/brand', element: <ProtectedRoute><Suspense fallback={<Loading></Loading>}><Brand></Brand></Suspense> </ProtectedRoute> },
        { path: '/cart', element: <ProtectedRoute><Suspense fallback={<Loading></Loading>}><Cart></Cart></Suspense></ProtectedRoute>},
        { path: '/productsdetails/:id/:catedoryId', element: <ProtectedRoute><Suspense fallback={<Loading></Loading>}><ProductsDetails></ProductsDetails></Suspense></ProtectedRoute>},
        { path: '/forget', element: <Suspense fallback={<Loading></Loading>}><Forget></Forget></Suspense>},
        { path: '/reset', element: <Suspense fallback={<Loading></Loading>}><ResetCode></ResetCode></Suspense>},
        { path: '/newpassword', element: <Suspense fallback={<Loading></Loading>}><NewPassword></NewPassword></Suspense>},
        { path: '/allorders', element: <Suspense fallback={<Loading></Loading>}><Orders></Orders></Suspense>},
        { path: '/loading', element: <ProtectedRoute><Suspense fallback={<Loading></Loading>}><Loading></Loading></Suspense></ProtectedRoute>},
        { path: '/login', element: <Suspense fallback={<Loading></Loading>}><Login></Login></Suspense> },
        { path: '/register', element: <Suspense fallback={<Loading></Loading>}><Register></Register></Suspense> },
        { path: '/navbar', element: <ProtectedRoute><Suspense fallback={<Loading></Loading>}><Navbar></Navbar></Suspense></ProtectedRoute> },
        { path: '/products', element: <ProtectedRoute><Suspense fallback={<Loading></Loading>}><Products></Products></Suspense></ProtectedRoute>},
        { path: '*', element: <Suspense fallback={<Loading></Loading>}><NotFound></NotFound></Suspense> }
      ]
    }
  ])
  return (
    <RouterProvider router={Routes}></RouterProvider>
  )
}

export default App;
