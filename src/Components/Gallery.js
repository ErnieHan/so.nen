import React from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 500
};

const style = {
  // background: "#CCC"
};

const imagesLoadedOptions = { background: "white" };

class Gallery extends React.Component {
  handleClick() {}
  render() {
    return (
      <Masonry
        className={"my-gallery-class"}
        style={style}
        options={masonryOptions}
        onClick={this.handleClick}
        imagesLoadedOptions={imagesLoadedOptions}
      >
        {this.props.children}
      </Masonry>
    );
  }
}

export default Gallery;
