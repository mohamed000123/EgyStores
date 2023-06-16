// react
import { useState, useEffect } from "react";
// routing
import { useParams } from "react-router-dom";
// styling
import styles from "../styles/products.module.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  async function getData() {
    let product = await fetch("https://fakestoreapi.com/products/" + id);
    product = await product.json();
    setProduct(product);
  }
  console.log(product);
  useEffect(() => {
    getData();
  }, []);
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
    </div>
  );
};

export default ProductDetails;
