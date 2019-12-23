import React from "react";
import Masonry from "react-masonry-component";
import Box from "../Components/Box";
import { data } from "../Components/Box/data";

class Home extends React.Component {
  state = {
    bentoLists: [],
    start: 0,
    loadMore: false
  };
  componentDidMount() {
    // 先取10項商品
    const { start } = this.state;
    const editLists = data.splice(start, 10);
    this.setState({
      bentoLists: editLists
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const totalHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const ableScrollHeight = totalHeight - windowHeight;
    const footerHeight = document.querySelector("footer").offsetHeight;
    if (window.pageYOffset > ableScrollHeight - footerHeight) {
      if (this.state.loadMore === false) {
        console.log("載入更多");
        // 載入更多
        this.setState({
          loadMore: true,
          start: this.state.start + 10
        });
        //
        this.getProducts();
      }
    } else {
      this.setState({
        loadMore: false
      });
    }
  };

  getProducts = () => {
    const { bentoLists } = this.state;
    const a = data.splice(0, 10);
    if (a.length > 0) {
      for (var i = 0; i < a.length; i++) {
        bentoLists.push(a[i]);
      }
      this.setState({
        bentoLists: bentoLists,
        start: false
      });
    } else {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  render() {
    const masonryOptions = {
      transitionDuration: 500
    };
    const imagesLoadedOptions = { background: ".my-bg-image-el" };
    const { bentoLists } = this.state;
    return (
      <>
        <Masonry
          className={"my-gallery-class"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          imagesLoadedOptions={imagesLoadedOptions}
        >
          {bentoLists.map((item, index) => (
            <Box item={item} image={index} key={index} />
          ))}
        </Masonry>
      </>
    );
  }
}

export default Home;
