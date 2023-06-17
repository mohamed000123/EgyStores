// react
import { useEffect, useState } from "react";
//style
import styles from "../styles/cart.module.css";
const Cart = () => {
  const [user_products, setUser_products] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      setUser_products(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);
  function deleteProduct(id) {
    console.log("before")
    const updatedProducts = user_products.filter((product) => {
      return product.id !== id;
    });
    console.log(updatedProducts);
    setUser_products(updatedProducts);
    console.log(user_products, "user_products");
    localStorage.setItem("cartItems", JSON.stringify(user_products));
    console.log("after");
  }

  function pay(id) {
    alert("your transaction is made successfully! thank you");
    let productIndex = user_products.findIndex((product) => {
      return product.id == id;
    });
    user_products[productIndex].isPaid = true;
    localStorage.setItem("cartItems", JSON.stringify(user_products));
  }

  return (
    <>
      {user_products.length ===0 &&<h1>your cart is empty start shopping now</h1>}
      <div id={styles.productsList}>
        {user_products.map((item) => {
          return (
            <div className={styles.product}>
              <div className={styles.container}>
                <div className={styles.up}>
                  <h3>{item.title}</h3>
                  <p>{item.price} LE</p>
                  <p>{item.category}</p>
                </div>
                <img src={item.image} />
                <div className={styles.down}>
                  <p id={styles.descc}>{item.description}</p>
                 {!item.isPaid ? <div id={styles.btns}>
                    <button
                      id={styles.payBtn}
                      onClick={() => {
                        pay(item.id);
                      }}
                    >
                      pay
                    </button>
                    <button
                      id={styles.deleteBtn}
                      onClick={() => {
                        deleteProduct(item.id);
                      }}
                    >
                      delete
                    </button>
                  </div> : <p>your package will be delivered within 5 days</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
