import React from "react";

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
          .lightbox-content{
              width:336mm;
              height:182mm;
              background:white;
          }
        `}
        </style>
        <div className="ligtbox-content"> 123 </div>
      </div>
    );
  }
}

export default BentoLightBox;
