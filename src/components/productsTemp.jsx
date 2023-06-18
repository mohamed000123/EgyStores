// react
import { useState, useEffect } from "react";
// routing
import { NavLink } from "react-router-dom";
//styling
import styles from "../styles/products.module.css";
import { Grid } from "@mui/material";

const ProductsTemp = ({ products }) => {
  return (
    <>
      <Grid container spacing={5} className={styles.container}>
        {products ? (
          products.map((item) => {
            return (
                <Grid
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  item
                  className={styles.product}
                >
                  <NavLink to={`/product/${item.id}`}>
                    <h3>{item.title}</h3>
                    <img src={item.image} className="product-image" />
                  </NavLink>
                </Grid>
            );
          })
        ) : (
          <h2>loading .....</h2>
        )}
      </Grid>
    </>
  );
};

export default ProductsTemp;
