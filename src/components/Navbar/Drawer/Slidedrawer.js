import React from "react";
import "./Slidedrawer.css";

const SlideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open bg-blue-900";
  }

  return (
    <div className={drawerClasses}>
      <div className="m-auto flex flex-col">
        <div  className="mx-auto font-medium py-1 hover:bg-blue-800 text-center px-2 rounded">
          <a onClick={props.close} href="#">Home</a>
        </div>
        <div  className="mx-auto font-medium py-1 hover:bg-blue-800 text-center px-2 rounded">
          <a onClick={props.close} href="#about">About</a>
        </div>
        <div  className="mx-auto font-medium py-1 hover:bg-blue-800 text-center px-2 rounded">
          <a onClick={props.close} href="#resume">Resume</a>
        </div>
        <div  className="mx-auto font-medium py-1 hover:bg-blue-800 text-center px-2 rounded">
          <a onClick={props.close} href="#portfolio">Portfolio</a>
        </div> 
        <div  className="mx-auto  font-medium py-1 hover:bg-blue-800 text-center px-2 rounded">
          <a onClick={props.close} href="#contact">Contact</a>
        </div>
            </div>
    </div>
  );
};

export default SlideDrawer;
