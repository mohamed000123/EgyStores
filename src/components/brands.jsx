import { Grid, Paper } from "@mui/material";

const Brands = () => {
  return (
    <>
      <div className="brands">
        <h1>YOUR FAVOURITE BRANDS</h1>
        <Grid container spacing={5} style={{ marginBottom: "20px" }}>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/Adidas-Logo.jpg")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/Nike-Logo-tumb.jpg")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/Puma-Logo-tumb.png")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/b-teck.png")}
              alt="My Image"
            />
          </Grid>

          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/downloa.jpg")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/download.png")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/downloada.png")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/downloadd.jpg")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/downloaddd.png")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/lenovo.png")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/jewelry-logo-02.jpg")}
              alt="My Image"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={require("../assets/imgs/brands/236_zara.jpg")}
              alt="My Image"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Brands;
