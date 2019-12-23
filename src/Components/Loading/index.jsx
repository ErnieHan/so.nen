import React, { Component } from "react";
import { Content } from "./css";
import { HOST_URL } from "../../constants";

class Loading extends Component {
  render() {
    return (
      <Content>
        <img src={`${HOST_URL}/images/loading.gif`} alt="" />
      </Content>
    );
  }
}

export default Loading;
