// pages
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Login from "./register/login";
import Signup from "./register/signup";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/Cart";
// components
import Complain from "./components/complain";
import Faq from "./components/faq";
import NotFound from "./components/notFound";
import Nav from "./components/nav";
// styling
import "./index.css";
// routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
         <Login/>
        }
      ></Route>
      <Route
        path="/signup"
        element={
         <Signup/>
        }
      ></Route>
      <Route
        path="/home"
        element={
          <>
            <Nav />
            <Home />
          </>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <>
            <Nav />
            <Cart />
          </>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <>
            <Nav />
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
            <Nav />
            <Products />
          </>
        }
      ></Route>
      <Route
        element={
          <>
            <Nav />
            <ProductDetails />
          </>
        }
        path="/product/:id"
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
      {/* </Route> */}
    </>
  )
);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
