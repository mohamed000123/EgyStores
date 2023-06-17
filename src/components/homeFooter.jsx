//mui
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
const HomeFooter = () => {
  return (
    <>
      <Grid
        container
        spacing={5}
        sx={{
          backgroundColor: "#232F3E",
          padding: "50px 20px",
          // border: "3px solid red",
        }}
      >
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <div className="list">
            <ul>
              <li>
                <p>Get to Know Us</p>
              </li>
              <li>
                <NavLink> About Amazon</NavLink>
              </li>
              <li>
                <NavLink>Careers</NavLink>
              </li>
              <li>
                <NavLink>Amazon Science</NavLink>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <div className="list">
            <ul>
              <li>
                <p>Shop with Us</p>
              </li>
              <li>
                <NavLink>Your Account</NavLink>
              </li>
              <li>
                <NavLink>Your Orders</NavLink>
              </li>
              <li>
                <NavLink>Your Addresses</NavLink>
              </li>
              <li>
                <NavLink>Your Lists</NavLink>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <div className="list">
            <ul>
              <li>
                <p>Make Money with Us</p>
              </li>
              <li>
                <NavLink>Protect and build your brand</NavLink>
              </li>
              <li>
                <NavLink>Advertise Your Products</NavLink>
              </li>
              <li>
                <NavLink>Sell on Amazon</NavLink>
              </li>
              <li>
                <NavLink>Fulfillment by Amazon</NavLink>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <div className="list">
            <ul>
              <li>
                <p>Let Us Help You</p>
              </li>
              <li>
                <NavLink>Help</NavLink>
              </li>
              <li>
                <NavLink>Shipping & Delivery</NavLink>
              </li>
              <li>
                <NavLink>Returns & Replacements</NavLink>
              </li>
              <li>
                <NavLink>Amazon App Download</NavLink>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      {/* bottom part */}
      <div
        style={{
          backgroundColor: "#131A22",
        }}
      >
        <Grid container spacing={5} sx={{ padding: "10px 30px" }}>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <div className="list2">
              <ul>
                <li>
                  <p>Get to Know Us</p>
                </li>
                <li>
                  <NavLink> About Amazon</NavLink>
                </li>
                <li>
                  <NavLink>Careers</NavLink>
                </li>
                <li>
                  <NavLink>Amazon Science</NavLink>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <div className="list2">
              <ul>
                <li>
                  <p>Shop with Us</p>
                </li>
                <li>
                  <NavLink>Your Account</NavLink>
                </li>
                <li>
                  <NavLink>Your Orders</NavLink>
                </li>
                <li>
                  <NavLink>Your Addresses</NavLink>
                </li>
                <li>
                  <NavLink>Your Lists</NavLink>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <div className="list2">
              <ul>
                <li>
                  <p>Make Money with Us</p>
                </li>
                <li>
                  <NavLink>Protect and build your brand</NavLink>
                </li>
                <li>
                  <NavLink>Advertise Your Products</NavLink>
                </li>
                <li>
                  <NavLink>Sell on Amazon</NavLink>
                </li>
                <li>
                  <NavLink>Fulfillment by Amazon</NavLink>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <div className="list2">
              <ul>
                <li>
                  <p>Let Us Help You</p>
                </li>
                <li>
                  <NavLink>Help</NavLink>
                </li>
                <li>
                  <NavLink>Shipping & Delivery</NavLink>
                </li>
                <li>
                  <NavLink>Returns & Replacements</NavLink>
                </li>
                <li>
                  <NavLink>Amazon App Download</NavLink>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <div className="footer">
          <NavLink>Conditions of Use & Sale</NavLink>
          <NavLink>Privacy</NavLink>
          <NavLink>Notice Interest-Based Ads</NavLink>
          <p>©1996–2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
