// react
import { useState, useEffect } from "react";
// routing
import { NavLink } from "react-router-dom";
//styling
import styles from "../styles/products.module.css";

const ProductsTemp = ({ products }) => {
  return (
    <>
      <div className={styles.container}>
        {products ? (
          products.map((item) => {
            return (
              <div className={styles.productcontainer} key={item.id}>
                <div className={styles.product}>
                  <NavLink to={`/product/${item.id}`}>
                    <h3>{item.title}</h3>
                    <img src={item.image} />
                  </NavLink>
                </div>
              </div>
            );
          })
        ) : (
          <h2>loading .....</h2>
        )}
      </div>
    </>
  );
};

export default ProductsTemp;
