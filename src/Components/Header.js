import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <header>
        <style>
          {`
          header{
            padding:60px 15px 15px;
            text-align:center;
          }
          nav{
            width:100%;
          }
          .navlist li{
            display:inline-block;
            padding:15px;
          }
          `}
        </style>
        <Logo />
        <nav>
          <ul className="navlist">
            <Link to="/">
              <li>弁當</li>
            </Link>
            <Link to="/recipe">
              <li>食譜</li>
            </Link>
            <Link to="/kitchenware">
              <li>道具</li>
            </Link>
            <Link to="/shop">
              <li>SHOP</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
