import React from "react";
import logo from "../Assets/logo.svg";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <style>
          {`
        .logo{
          width:320px;
          display: inline-block;
        }
        `}
        </style>
        <img src={logo} alt="" />
      </div>
    );
  }
}
export default Logo;
