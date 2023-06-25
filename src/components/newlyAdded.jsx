import useFetch from "../customhooks/fetchingApi";
import MultiCarsoule from "./multiCarousel";
const NewlyAdded = () => {
  const title = "newly added products";
  const products = useFetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  );
  products.splice(0, 20);
  return (
    <>
      <MultiCarsoule title={title} products={products} />
    </>
  );
};

export default NewlyAdded;
