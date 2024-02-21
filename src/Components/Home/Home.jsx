import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Parallaxbanner from "./ParallaxBanner";
import TopRating from "./TopRating";


const Home = () => {
    return (
        <section>
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
        </section>
    );
};

export default Home;