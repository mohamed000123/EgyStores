// components
import Slider from "../components/imagesSlider";
import Brands from "../components/brands";
import HomeFooter from "../components/homeFooter";
  // window.addEventListener("scroll", handelScroll);
  // function handelScroll() {
  //   if (window.scrollY >= window.innerHeight) {
  //     console.log("Aaaaaaaaaaaa");
  //   } else {
  //     console.log("bbbbbbbbbbbbbbb");
  //   }
  // }

const Home = () => {
    return (
      <>
        <Slider />
        <Brands />
        <HomeFooter />
      </>
    );
};

export default Home;
