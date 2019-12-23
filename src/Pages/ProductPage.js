import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { data } from "../Components/Box/data";
import { HOST_URL } from "../constants";

class ProductPage extends Component {
  state = {
    getData: null
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    if (data[id]) {
      this.setState({
        getData: data[id]
      });
    }
  }
  render() {
    const { id } = this.props.match.params;
    const { getData } = this.state;
    return (
      <div>
        {getData && (
          <>
            <img src={`${HOST_URL}/images/bento/bento${id}.jpg`} alt="" />
            <h1>{getData.title}</h1>
            <p>{getData.content}</p>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(ProductPage);
