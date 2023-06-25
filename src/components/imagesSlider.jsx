import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import one from "../assets/imgs/one.jpg"
import two from "../assets/imgs/two.jpg"
import three from "../assets/imgs/camera.jpg"
import four from "../assets/imgs/ring-jewelry-luxury-rich.jpg"
import five from "../assets/imgs/ring-jewelry-luxury-rich2.jpg"
import six from "../assets/imgs/flower-beats-floral-design.jpg"
import seven from "../assets/imgs/wallpaperflare.com_wallpaper.jpg"
function Slider (props) {
  // images
  var items = [
    {
      url: `${one}`,
    },
    {
      url: `${two}`,
    },
    {
      url: `${three}`,
    },
    {
      url: `${four}`,
    },
    {
      url: `${five}`,
    },
    {
      url: `${six}`,
    },
    {
      url: `${seven}`,
    },
  ];

  return (
      <Carousel  height="100vh">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
  );
}

function Item(props) {
  return (
    <Paper className="slider-content">
      <>
        <img src={props.item.url} />
      </>
    </Paper>
  );
}

export default Slider