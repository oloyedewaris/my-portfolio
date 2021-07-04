import React, { useState } from "react";
import Main from "./Drawer/Main.js";
import SlideDrawer from "./Drawer/Slidedrawer.js";
import Backdrop from "./Drawer/Backdrop.js";

const Slider = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />;
  }

  return (
    <div>
      <SlideDrawer close={backdropClickHandler} show={drawerOpen} />
      {backdrop}
      <Main toggle={drawerToggleClickHandler} />
    </div>
  );
};

export default Slider;
