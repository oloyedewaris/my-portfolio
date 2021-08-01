import React from "react";

const Main = (props) => {
  return (
    <button className="media-slider w-14 h-14 bg-blue-900" onClick={props.toggle}>
      {props.show ?
        <div
          className="text-6xl text-white"
          onClick={props.close}
        >
          &#x2715;
        </div>
        :
        <div>
          <div className="h-1 w-10 mx-auto my-1 bg-white rounded-lg" />
          <div className="h-1 w-10 mx-2 my-1 bg-white rounded-lg" />
          <div className="h-1 w-10 mx-auto my-1 bg-white rounded-lg" />
        </div>
      }

    </button>
  );
};

export default Main;
