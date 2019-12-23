import React, { Component } from "react";
import { Content, BoxContent, Body, Image } from "./css";
import { HOST_URL } from "../../constants";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

class Box extends Component {
  render() {
    const { item, image } = this.props;
    return (
      <Content>
        <BoxContent>
          <Image order={image % 2 === 0}>
            <img
              data-src={`${HOST_URL}/images/bento/bento${image}.jpg`}
              className="lazyload"
              alt=""
            />
          </Image>
          <Body order={image % 2 === 0}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </Body>
        </BoxContent>
      </Content>
    );
  }
}

export default Box;
