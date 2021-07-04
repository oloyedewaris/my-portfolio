import React from "react";

const Main = (props) => {
  return (
      <button className="media-slider w-12 h-12 bg-blue-900" onClick={props.toggle}>
        <div>
          <div className="h-1 w-8 m-1 bg-white rounded-lg" />
          <div className="h-1 w-6 m-1 bg-white rounded-lg" />
          <div className="h-1 w-8 m-1 bg-white rounded-lg" />
        </div>
      </button> 
  );
}; 

export default Main;
