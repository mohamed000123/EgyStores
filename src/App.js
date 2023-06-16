// pages
import Home from "./pages/home";
import About from "./pages/about"
import Products from "./pages/products";
import RootLayout from "./pages/rootLayout";
// components
import Complain from "./components/complain";
import Faq from "./components/faq";
import NotFound from "./components/notFound";
// styling
import "./index.css";
// routing
import { createBrowserRouter , createRoutesFromElements ,Route ,RouterProvider} from "react-router-dom";
import ProductDetails from "./pages/productDetails";
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />} path="/">
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about">
          <Route element={<Complain />} path="/about/complain"></Route>
          <Route element={<Faq />} path="/about/faq"></Route>
        </Route>
        <Route element={<Products />} path="/products"></Route>
        <Route element={<ProductDetails />} path="/product/:id"></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </>
  )
);
function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
