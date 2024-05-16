import Banner from "../Banner/Banner";
import MyOrderLoader from "../Loader/MyOrderLoader";
import ProductLoader from "../Loader/ProductLoader";
import ProductLoaderView from "../Loader/ProductLoaderView";
import Service from "../Service/Service";
import TopBrand from "../TopBrand/TopBrand";
import Discount from "./Discount";
import Parallaxbanner from "./Parallaxbanner";
import TopRating from "./TopRating";
import WhyUs from "./WhyUs";


const Home = () => {


    return (
        <section>
            <div >
                {/* <ProductLoaderView></ProductLoaderView> */}

                {/* <MyOrderLoader></MyOrderLoader> */}
                {/* <ProductLoader></ProductLoader> */}
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
                <TopBrand></TopBrand>
            </div>
            <div>
                <WhyUs></WhyUs>
            </div>
            <div>
                <Service></Service>
            </div>
        </section>
    );
};

export default Home;