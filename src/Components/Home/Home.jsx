import Banner from "../Banner/Banner";
import MyOrderLoader from "../Loader/MyOrderLoader";
import ProductLoader from "../Loader/ProductLoader";
import ProductLoaderView from "../Loader/ProductLoaderView";
import Service from "../Service/Service";
import Discount from "./Discount";
import Parallaxbanner from "./ParallaxBanner";
import TopRating from "./TopRating";


const Home = () => {

    
    return (
        <section>
            <div >
                {/* <ProductLoaderView></ProductLoaderView> */}

                {/* <MyOrderLoader></MyOrderLoader> */}
                <ProductLoader></ProductLoader>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <TopRating></TopRating>
            </div>
            <div>
                <Parallaxbanner></Parallaxbanner>
            </div>
            <div>
                <Discount></Discount>
            </div>
            <div>
                <Service></Service>
            </div>
        </section>
    );
};

export default Home;