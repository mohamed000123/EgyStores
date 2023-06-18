import MultiCarsoule from "./multiCarousel";
import useFetch from "../customhooks/fetchingApi";
const MostSaled = () => {
  const title = "most saled";
  const products = useFetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  );
  products.splice(20, 50);

  return (
    <>
      <MultiCarsoule title={title} products={products} />
    </>
  );
}
 
export default MostSaled;