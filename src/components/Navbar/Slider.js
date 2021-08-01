import React, { useState } from "react";
import Main from "./Drawer/Main.js";
import SlideDrawer from "./Drawer/Slidedrawer.js";

const Slider = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <SlideDrawer close={backdropClickHandler} show={drawerOpen} />
      <Main show={drawerOpen} toggle={drawerToggleClickHandler} />
    </div>
  );
};

export default Slider;
