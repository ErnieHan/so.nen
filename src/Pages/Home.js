import React from "react";
import Bento from "../Components/Bento";
import Gallery from "../Components/Gallery";
// import SlickPhoto from "../Components/SlickPhoto";
// import BentoLightBox from "../Components/BentoLightBox";

class Home extends React.Component {
  state = {
    data: [{ title: "", content: "", id: 0 }]
  };
  componentWillMount = () => {
    fetch("./data/bento.json")
      .then(res => res.json())
      .then(result =>
        this.setState({
          data: result
        })
      );
  };
  render() {
    const bentoList = this.state.data.reverse();
    // const bentoList = data.reverse();
    return (
      <div>
        <Gallery>
          {bentoList.map((data, i) => (
            <Bento
              key={i}
              img={data.id}
              title={data.title}
              content={data.content}
            />
          ))}
        </Gallery>
        {console.log(this.state.data)}
        {/* <BentoLightBox /> */}
        {/* <SlickPhoto /> */}
      </div>
    );
  }
}

export default Home;
