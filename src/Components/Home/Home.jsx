import Banner from "../Banner/Banner";
import ProductLoderView from "../Loader/ProductLoderView";
import Service from "../Service/Service";
import Discount from "./Discount";
import Parallaxbanner from "./ParallaxBanner";
import TopRating from "./TopRating";


const Home = () => {

    
    return (
        <section>
            <div>
                {/* <ProductLoderView></ProductLoderView> */}
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Service></Service>
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
        </section>
    );
};

export default Home;