import React, { useState } from "react";
import { Bounce } from "react-reveal";

const Slider = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      {drawerOpen && (
        <div className={`side-drawer ${drawerOpen && "open"} bg-purple-800 pt-12 h-full w-full bottom-0 right-0 fixed z-10`}>
          <div className="flex flex-col py-2 mx-2">
            <Bounce duration={1500} bottom>
              <div className="text-4xl text-left text-white font-medium mx-8 py-4">
                <a onClick={drawerToggleClickHandler} href="#">Waris</a>
              </div>
            </Bounce>
            <Bounce delay={1000} duration={1500} bottom>
              <div className="text-4xl text-left text-white font-medium mx-8 py-4">
                <a onClick={drawerToggleClickHandler} href="#about">About</a>
              </div>
            </Bounce>
            <Bounce delay={2000} duration={1500} bottom>
              <div className="text-4xl text-left text-white font-medium mx-8 py-4">
                <a onClick={drawerToggleClickHandler} href="#resume">Resume</a>
              </div>
            </Bounce>
            <Bounce delay={3000} duration={1500} bottom>
              <div className="text-4xl text-left text-white font-medium mx-8 py-4">
                <a onClick={drawerToggleClickHandler} href="#portfolio">Portfolio</a>
              </div>
            </Bounce>
            <Bounce delay={4000} duration={1500} bottom>
              <div className="text-4xl text-left text-white font-medium mx-8 py-4">
                <a onClick={drawerToggleClickHandler} href="#contact">Contact</a>
              </div>
            </Bounce>
          </div>
        </div>
      )}
      <div className="media-slider w-14 h-14 bg-transparent rounded" onClick={drawerToggleClickHandler}>
        {drawerOpen ? (
          <div className="text-3xl text-white">&#x2715;</div>
        ) : (
          <div>
            <div className="h-1 w-10 my-1.5 bg-purple-900 rounded-lg" />
            <div className="h-1 w-8 my-1.5 bg-purple-900 rounded-lg" />
            <div className="h-1 w-10 my-1.5 bg-purple-900 rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
