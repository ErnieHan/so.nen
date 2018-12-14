import React from "react";

class Layout extends React.Component {
  render() {
    const style = {
      maxWidth: "1230px",
      margin: "0 auto",
      padding: "0 15px"
    };
    return (
      <div className="layout" style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
