import React from "react";

class Layout extends React.Component {
  render() {
    const style = {
      maxWidth: "1230px",
      margin: "0 auto"
    };
    return (
      <div className="layout" style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
