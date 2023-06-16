import Nav from "../components/nav";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default RootLayout;
