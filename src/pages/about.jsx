import { NavLink, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
// styles
import styles from "../styles/about.module.css"
const About = () => {
  console.log(Button);
  return (
    <>
      <div className={styles.aboutContainer}>
        <NavLink to="/about/complain">
          <Button style={{ margin: "30px" }} variant="contained">
            complain
          </Button>
        </NavLink>
        <NavLink to="/about/faq">
          <Button style={{ margin: "30px" }} variant="contained">faq</Button>
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default About;
