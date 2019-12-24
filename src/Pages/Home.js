import React from "react";
import Masonry from "react-masonry-component";
import Box from "../Components/Box";
import { data } from "../Components/Box/data";
// import Loading from "../Components/Loading";

class Home extends React.Component {
  state = {
    bentoLists: [],
    start: 0,
    loadMore: false,
    loading: false
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

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.bentoLists !== this.state.bentoLists ||
      nextState.start !== this.state.start ||
      nextState.loadMore !== this.state.loadMore ||
      nextState.loading !== this.state.loading
    )
      return true;
    return false;
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
        start: false,
        loading: true
      });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    } else {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  render() {
    const masonryOptions = {
      transitionDuration: 800
    };
    const imagesLoadedOptions = { background: ".my-bg-image-el" };
    const { bentoLists, loading } = this.state;
    return (
      <>
        {/* {loading && <Loading />} */}
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
