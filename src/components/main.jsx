import { Routes,Route, useNavigate } from "react-router-dom";
// pages
import Home from "../pages/home";
import About from "../pages/about";
import Products from "../pages/products";
import ProductDetails from "../pages/productDetails";
import Cart from "../pages/Cart";
// components
import Complain from "./complain";
import Faq from "./faq";
import Nav from "./nav";
import NotFound from "./notFound";
//react
import { useEffect } from "react";

const Main = () => {
//  protecting routes
const navigate = useNavigate()
useEffect(()=>{
const userid = localStorage.getItem("user_id")
if (!userid) {
navigate("/login")
}
},[])
//
    return (
      <>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <>
                <Cart />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          >
            <Route element={<Complain />} path="/about/complain"></Route>
            <Route element={<Faq />} path="/about/faq"></Route>
          </Route>
          <Route
            path="/products"
            element={
              <>
                <Products />
              </>
            }
          ></Route>
          <Route
            element={
              <>
                <ProductDetails />
              </>
            }
            path="/product/:id"
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
}
 
export default Main;