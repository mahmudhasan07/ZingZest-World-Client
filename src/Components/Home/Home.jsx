import Banner from "../Banner/Banner";
import Service from "../Service/Service";
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
        </section>
    );
};

export default Home;