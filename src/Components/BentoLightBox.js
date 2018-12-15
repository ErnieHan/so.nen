import React from "react";
import Bento from "./Bento";

class BentoLightBox extends React.Component {
  render() {
    return (
      <div className="bento-lightbox">
        <style>
          {`
          .bento-lightbox{
              width:100vw;
              height:100vh;
              background:black;
              opacity:0.8;
              position:fixed;
              top:0;
              left:0;
          }
        `}
        </style>
        123
      </div>
    );
  }
}

export default BentoLightBox;
