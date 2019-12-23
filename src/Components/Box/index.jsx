import React, { Component } from "react";
import { Content, BoxContent, Body } from "./css";
import { HOST_URL } from "../../constants";

class Box extends Component {
  render() {
    const { item, image } = this.props;
    return (
      <Content>
        <BoxContent>
          <img src={`${HOST_URL}/images/bento/bento${image}.jpg`} alt="" />
          <Body>
            <h3>
              {item.title}
              {image}
            </h3>
            <p>{item.content}</p>
          </Body>
        </BoxContent>
      </Content>
    );
  }
}

export default Box;
