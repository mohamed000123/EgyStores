// react
import { useState, useEffect } from "react";
// components
import ProductsTemp from "../components/productsTemp";
// styles
import styles from "../styles/products.module.css";
// mui
import Button from "@mui/material/Button";
import useFetch from "../customhooks/fetchingApi";
const Products = () => {
  const [newData, setNewData] = useState(null);
  const products = useFetch("https://fakestoreapi.com/products");

  const showMenClothes = () => {
    const men = products.filter((item) => {
      return item.category === "men's clothing";
    });
    setNewData(men);
  };
  const showWomenClothes = () => {
    const women = products.filter((item) => {
      return item.category === "women's clothing";
    });
    setNewData(women);
  };
  const showJewelery = () => {
    const jewelery = products.filter((item) => {
      return item.category === "jewelery";
    });
    setNewData(jewelery);
  };
  const showMenElectronics = () => {
    const electronics = products.filter((item) => {
      return item.category === "electronics";
    });
    setNewData(electronics);
  };

  return (
    <>
      <div className={styles.menu}>
        <Button onClick={showMenClothes} variant="contained">
          men's clothing
        </Button>
        <Button onClick={showWomenClothes} variant="contained">
          women's clothing
        </Button>
        <Button onClick={showJewelery} variant="contained">
          jewelery
        </Button>
        <Button onClick={showMenElectronics} variant="contained">
          electronics
        </Button>
      </div>
      <ProductsTemp products={newData ? newData : products} />
    </>
  );
};

export default Products;
