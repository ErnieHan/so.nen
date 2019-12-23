import React, { Component } from "react";
import { Content, Body, Logo } from "./css";

class Header extends Component {
  render() {
    return (
      <Content>
        <Body>
          <Logo>
            <img src={`/images/logo.svg`} alt="" />
          </Logo>
        </Body>
      </Content>
    );
  }
}

export default Header;
