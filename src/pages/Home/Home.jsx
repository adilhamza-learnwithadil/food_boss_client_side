import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Call from "../../components/Call/Call";
import Category from "../../components/Category/Category";
import FeaturedFood from "../../components/FeaturedFood/FeaturedFood";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Food Boss</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <Category></Category>
                <AboutUs></AboutUs>
                <PopularMenu></PopularMenu>
                <Call></Call>
            </div>
            <FeaturedFood></FeaturedFood>
            <div className="max-w-7xl mx-auto">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;