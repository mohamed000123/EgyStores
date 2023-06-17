// react
import { useState, useEffect } from "react";
// routing
import { Navigate, useParams } from "react-router-dom";
// styling
import styles from "../styles/products.module.css";
import { Button } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [goToCard, setGoToCard] = useState(false);
  async function getData() {
    let product = await fetch("https://fakestoreapi.com/products/" + id);
    product = await product.json();
    setProduct(product);
  }
  useEffect(() => {
    getData();
  }, []);
  // add to card
  function addToCard() {
    let user_products = [];
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      user_products = JSON.parse(localStorage.getItem("cartItems"));
    }
    const product_id = id;
    const user_id = localStorage.getItem("user_id");
    let products = JSON.parse(localStorage.getItem("products"));
    let buied_products = products.filter((product) => {
      return product.id == product_id;
    });
    buied_products = buied_products[0];
    buied_products.user_id = user_id;
    buied_products.isPaid = false;
    user_products.push(buied_products);
    localStorage.setItem("cartItems", JSON.stringify(user_products));
    setGoToCard(true);
  }
  if (goToCard) {
    return <Navigate to="/cart" />;
  }
  return (
    <div id={styles.product}>
      <div className={styles.image}>
        <img src={product.image} />
      </div>
      <div className={styles.title}>
        <h2>{product.title}</h2>
        <p id={styles.desc}>{product.description}</p>
      </div>
      <div className={styles.details}>
        <p id="price">price: {product.price}</p>
        <p id="category">category: {product.category}</p>
      </div>
      <Button
        variant="contained"
        style={{ marginLeft: "10px" }}
        onClick={addToCard}
      >
        add to Cart
      </Button>
    </div>
  );
};

export default ProductDetails;
