import React from "react";
import "./Slidedrawer.css";

const SlideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={`${drawerClasses} bg-blue-800`}>
      <div className="flex flex-col py-8 mx-2">
        <div className="text-5xl text-left font-mono px-8 py-4">
          <a onClick={props.close} href="#">Home</a>
        </div>
        <div className="text-5xl text-left font-mono px-8 py-4">
          <a onClick={props.close} href="#about">About</a>
        </div>
        <div className="text-5xl text-left font-mono px-8 py-4">
          <a onClick={props.close} href="#resume">Resume</a>
        </div>
        <div className="text-5xl text-left font-mono px-8 py-4">
          <a onClick={props.close} href="#portfolio">Portfolio</a>
        </div>
        <div className="text-5xl text-left font-mono px-8 py-4">
          <a onClick={props.close} href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default SlideDrawer;
