import React, { Component } from "react";
import { Content, BoxContent, Body, Image } from "./css";
import { HOST_URL } from "../../constants";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { withRouter } from "react-router-dom";

class Box extends Component {
  goProductPage = page => {
    window.location = `/product/${page}`;
  };
  render() {
    const { item, image } = this.props;
    return (
      <Content>
        <BoxContent>
          <Image
            order={image % 2 === 0}
            onClick={this.goProductPage.bind(this, image)}
          >
            <img
              data-src={`${HOST_URL}/images/bento/bento${image}.jpg`}
              className="lazyload"
              alt=""
            />
          </Image>
          <Body order={image % 2 === 0}>
            <h3 onClick={this.goProductPage.bind(this, image)}>{item.title}</h3>
            <p>{item.content}</p>
          </Body>
        </BoxContent>
      </Content>
    );
  }
}

export default withRouter(Box);
