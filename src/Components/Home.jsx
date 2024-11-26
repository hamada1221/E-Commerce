import { Helmet } from "react-helmet";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import MainSlider from "./MainSlider";


function Home() {


    return ( 
        <div>
        <Helmet>
        <title>Fresh Cart</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
            <MainSlider/>
            <Categories/>
            <FeaturedProducts></FeaturedProducts>
        </div>
     );
}

export default Home;