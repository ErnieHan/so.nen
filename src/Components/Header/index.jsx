import React, { Component } from "react";
import { Content, Body, Logo, Navbar, Item } from "./css";
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    active: 0
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    if (pathname === "/" || pathname.includes("/product")) {
      this.setState({
        active: 0
      });
    } else if (pathname.includes("/recipe")) {
      this.setState({
        active: 1
      });
    } else if (pathname.includes("/kitchenware")) {
      this.setState({
        active: 2
      });
    } else if (pathname.includes("/shop")) {
      this.setState({
        active: 3
      });
    }
  }
  render() {
    const itemLists = [
      {
        name: "",
        url: `/images/nav/nav1.png`,
        activeUrl: `/images/nav/nav1_hover.png`,
        link: "/"
      },
      {
        name: "",
        url: "/images/nav/nav2.png",
        activeUrl: `/images/nav/nav2_hover.png`,
        link: "/recipe"
      },
      {
        name: "",
        url: "/images/nav/nav3.png",
        activeUrl: `/images/nav/nav3_hover.png`,
        link: "/kitchenware"
      },
      {
        name: "",
        url: "/images/nav/nav4.png",
        activeUrl: `/images/nav/nav4_hover.png`,
        link: "/shop"
      }
    ];
    return (
      <Content>
        <Body>
          <Logo>
            <img src={`/images/logo.svg`} alt="" />
          </Logo>
        </Body>
        <Navbar>
          {itemLists.map((data, index) => (
            <Item
              key={index}
              background={data.url}
              active={this.state.active === index}
            >
              <a href={data.link}>
                <img src={data.activeUrl} alt="" />
              </a>
            </Item>
          ))}
        </Navbar>
      </Content>
    );
  }
}

export default withRouter(Header);
