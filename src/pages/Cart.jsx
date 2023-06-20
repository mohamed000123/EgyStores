// react
import { useEffect, useState } from "react";
//style
import styles from "../styles/cart.module.css";
// mui
import { Grid } from "@mui/material";
import Toast from "../components/toast";
const Cart = () => {
  const [user_products, setUser_products] = useState([]);
  const [cart_items, setCart_items] = useState([]);
  const [ispaid, setIsPaid] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const user_id = localStorage.getItem("user_id")
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      setCart_items(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);
  useEffect(() => {
    setUser_products(
      cart_items.filter((item) => {
       return(item.user_id== user_id);
      })
    );

  }, [cart_items]);
      console.log(user_products);
  function deleteProduct(id) {
    setShowDeleteToast(true);
    setTimeout(() => {
      setShowDeleteToast(false);
    }, 4000);
    setUser_products(user_products.filter((product) => {
      return product.id !== id;
    }));
    localStorage.setItem("cartItems", JSON.stringify(user_products));
  }

  function pay(id) {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
    console.log(showToast);
    let productIndex = user_products.findIndex((product) => {
      return product.id == id;
    });
    user_products[productIndex].isPaid = true;
    localStorage.setItem("cartItems", JSON.stringify(user_products));
    setIsPaid(!ispaid);
  }

  return (
    <>
      {showToast && (
        <Toast
          message="your transaction is made successfully! thank you"
          bgcolor="navy"
        />
      )}
      {showDeleteToast && <Toast message="product deleted !" bgcolor="red" />}
      {user_products.length === 0 && (
        <h1 style={{color:"navy"}}>your cart is empty start shopping now</h1>
      )}
      <Grid container spacing={5} className={styles.container}>
        {user_products.map((item) => {
          return (
            <Grid xs={6} sm={6} md={4} lg={3} item className={styles.product} key={item.id}>
              <div className={styles.up}>
                <h3>{item.title}</h3>
                <p>{item.price} LE</p>
                <p>{item.category}</p>
              </div>
              <img src={item.image} />
              <div className={styles.down}>
                {!item.isPaid ? (
                  <Grid
                    container
                    justifyContent="space-between"
                    className="btns-container"
                  >
                    <Grid item xs={4}>
                      <button
                        id={styles.payBtn}
                        onClick={() => {
                          pay(item.id);
                        }}
                      >
                        pay
                      </button>
                    </Grid>
                    <Grid item xs={4}>
                      <button
                        id={styles.deleteBtn}
                        onClick={() => {
                          deleteProduct(item.id);
                        }}
                      >
                        delete
                      </button>
                    </Grid>
                  </Grid>
                ) : (
                  <p className={styles.delivery}>
                    your package will be delivered within 5 days
                  </p>
                )}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Cart;
