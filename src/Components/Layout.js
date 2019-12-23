import React from "react";
import styled from "styled-components";

const Content = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 40px;
  @media (max-width: 1023px) {
    padding: 0 15px;
  }
`;

class Layout extends React.Component {
  render() {
    return <Content>{this.props.children}</Content>;
  }
}

export default Layout;
