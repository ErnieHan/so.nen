import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/01.jpg";
import img2 from "../Assets/02.jpg";
import img3 from "../Assets/03.jpg";

class SlickPhoto extends React.Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false
    };
    return (
      <div>
        <style>{`
        .slick-prev:before, .slick-next:before{
            display:none !important;
        }
        `}</style>
        <div style={{ maxWidth: "450px", margin: "0 auto" }}>
          <Slider {...settings}>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SlickPhoto;
