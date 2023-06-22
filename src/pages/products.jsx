// react
import { useState, useRef } from "react";
// components
import ProductsTemp from "../components/productsTemp";
// styles
import styles from "../styles/products.module.css";
// mui
import Button from "@mui/material/Button";
import useFetch from "../customhooks/fetchingApi";
const Products = () => {
  const [newData, setNewData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const inputField = useRef();
  const products = useFetch("https://fakestoreapi.com/products");
  localStorage.setItem("products", JSON.stringify(products));
  const showMenClothes = () => {
    const men = products.filter((item) => {
      return item.category === "men's clothing";
    });
    setNewData(men);
    setSearchResult(null);
  };
  const showWomenClothes = () => {
    const women = products.filter((item) => {
      return item.category === "women's clothing";
    });
    setNewData(women);
    setSearchResult(null);
  };
  const showJewelery = () => {
    const jewelery = products.filter((item) => {
      return item.category === "jewelery";
    });
    setNewData(jewelery);
    setSearchResult(null);

  };
  const showMenElectronics = () => {
    const electronics = products.filter((item) => {
      return item.category === "electronics";
    });
    setNewData(electronics);
    setSearchResult(null);

  };
  function showAllProducts (){
    setNewData(products);
    setSearchResult(null);
  }
  function handelSearch() {
    let result = [];
    products.map((product) => {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        result.push(product)
      }
    });
    setSearchResult(result)
    setNewData(null)
    inputField.current.value = "";
  }
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
        <Button onClick={showAllProducts} variant="contained">
          all products
        </Button>
      </div>
      <div className={styles.search}>
        <input
          placeholder="Search ....."
          ref={inputField}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Button variant="contained" size="small" onClick={handelSearch}>
          search
        </Button>
      </div>
      <ProductsTemp products={searchResult? searchResult : newData ? newData : products} />
    </>
  );
};

export default Products;
