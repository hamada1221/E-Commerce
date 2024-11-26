import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
    return ( 
        <div className="parent">
            <Navbar></Navbar>
        <div className="container">
        <Outlet/>
            </div>
<Footer/>
        </div>
     );
}

export default Layout;