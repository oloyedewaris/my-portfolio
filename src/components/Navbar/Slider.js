import React, { useState } from "react";

const Slider = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      <div className={`side-drawer ${drawerOpen && "open"} bg-purple-800`}>
        <div className="flex flex-col py-2 mx-2">
          <div className="text-4xl text-left text-white font-medium mx-8 py-4">
            <a onClick={drawerToggleClickHandler} href="#">Waris</a>
          </div>
          <div className="text-4xl text-left text-white font-medium mx-8 py-4">
            <a onClick={drawerToggleClickHandler} href="#about">About</a>
          </div>
          <div className="text-4xl text-left text-white font-medium mx-8 py-4">
            <a onClick={drawerToggleClickHandler} href="#resume">Resume</a>
          </div>
          <div className="text-4xl text-left text-white font-medium mx-8 py-4">
            <a onClick={drawerToggleClickHandler} href="#portfolio">Portfolio</a>
          </div>
          <div className="text-4xl text-left text-white font-medium mx-8 py-4">
            <a onClick={drawerToggleClickHandler} href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="media-slider w-14 h-14 bg-purple-900 rounded" onClick={drawerToggleClickHandler}>
        {drawerOpen ? (
          <div className="text-3xl text-white">&#x2715;</div>
        ) : (
          <div>
            <div className="h-1 w-10 my-2 bg-white rounded-lg" />
            <div className="h-1 w-10 my-2 bg-white rounded-lg" />
            <div className="h-1 w-10 my-2 bg-white rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
