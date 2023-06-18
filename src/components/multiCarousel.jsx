import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MultiCarsoule = ({ products, title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="multiCar">
        <h2 className="title">{title}</h2>
        <Carousel responsive={responsive}>
          {products.map((item) => {
            return (
              <div className="calousel-item">
                <div className="item-content">
                  <p>{item.name}</p>
                  <p>price:{item.price} EGP</p>
                  <img src={item.image_link} alt="My Image" />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MultiCarsoule;
