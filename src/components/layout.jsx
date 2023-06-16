import { Box, Grid, Paper } from "@mui/material";
// import imageUrl from "./download.jpg";
const Layout = () => {
  return (
    <>
    <img src="/download.jpg"/>
      <div style={{ marginTop: "25px" }}>
        <Box
          // define the tag
          component="p"
          // system properites
          m={5}
          p={3}
          border={3}
          px
          solid
          green
          borderColor="primary.main"
          sx={{
            // theme palete
            backgroundColor: "secondary.main",
          }}
        >
          let's learn material ui
        </Box>
        {/* lets learn grid system */}
        <Grid
          container
          //   spacing={5}
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Paper elevation={7} 
            sx={{
                backgroundColor:"primary.main"
            }}
            >one</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper>two</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper>three</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper>four</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Layout;
