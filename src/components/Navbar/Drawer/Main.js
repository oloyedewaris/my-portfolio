import React from "react";

const Main = (props) => {
  return (
    <div className="media-slider w-10 h-10 bg-blue-800" onClick={props.toggle}>
      {props.show ?
        <div
          className="text-5xl text-white"
          onClick={props.close}
        >
          &#x2715;
        </div>
        :
        <div>
          <div className="h-1 w-8 mx-auto my-1 bg-white rounded-lg" />
          <div className="h-1 w-8 mx-2 my-1 bg-white rounded-lg" />
          <div className="h-1 w-8 mx-auto my-1 bg-white rounded-lg" />
        </div>
      }

    </div>
  );
};

export default Main;
