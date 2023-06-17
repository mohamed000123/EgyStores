// pages
import Login from "./register/login";
import Signup from "./register/signup";
// components
import NotFound from "./components/notFound";
import Main from "./components/main";
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
