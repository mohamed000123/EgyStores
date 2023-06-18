// components
import Slider from "../components/imagesSlider";
import Brands from "../components/brands";
import HomeFooter from "../components/homeFooter";
import NewlyAdded from "../components/newlyAdded";
import MostSaled from "../components/mostSaled";

const Home = () => {
    return (
      <>
        <Slider />
        <Brands />
        <NewlyAdded />
        <MostSaled/>
        <HomeFooter />
      </>
    );
};

export default Home;
