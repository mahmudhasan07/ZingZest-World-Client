import Banner from "../Banner/Banner";
import MyOrderLoader from "../Loader/MyOrderLoader";
import Service from "../Service/Service";
import Discount from "./Discount";
import Parallaxbanner from "./ParallaxBanner";
import TopRating from "./TopRating";


const Home = () => {

    
    return (
        <section>
            <div >
                {/* <ProductLoderView></ProductLoderView> */}

                <MyOrderLoader></MyOrderLoader>
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