import React from "react";
import img1 from "../Assets/01.jpg";

class Bento extends React.Component {
  render() {
    const bentoList = [
      {
        title: "秋冬限定！用豐富肥美的油脂來料理鹽烤鯖魚！",
        content: "鯖魚可說是CP值相當高的食材，秋冬尤其肥美。不過冷凍跟加...",
        img: img1
      },
      {
        title: "秋冬限定！用豐富肥美的油脂來料理鹽烤鯖魚！",
        content: "鯖魚可說是CP值相當高的食材，秋冬尤其肥美。不過冷凍跟加...",
        img: img1
      },
      {
        title: "秋冬限定！用豐富肥美的油脂來料理鹽烤鯖魚！",
        content: "鯖魚可說是CP值相當高的食材，秋冬尤其肥美。不過冷凍跟加...",
        img: img1
      },
      {
        title: "秋冬限定！用豐富肥美的油脂來料理鹽烤鯖魚！",
        content: "鯖魚可說是CP值相當高的食材，秋冬尤其肥美。不過冷凍跟加...",
        img: img1
      }
    ];
    return (
      <div>
        <style>
          {`
          .bento-outline{
              width:25%;
              height:400px;
              background:#ccc;
              display:inline-block;
          }
          .bento-content{
              width:100%;
              height:400px;
              background:#ffffff;
              border-radius: 5px;
          }
          .bento-img{
              
          }
          .bento-text{
              padding:10px 0;
          }
          `}
        </style>
        {/* {bentoList.map((data, i) => (
          <div className="bento-content">
            <div className="bento-img">
              <img src={img1} alt="" />
            </div>
            <div className="bento-text" key={i}>
              <h3 style={{ fontSize: "16pt" }}>{data.title}</h3>
              <p style={{ fontSize: "10pt", color: "#333" }}>{data.content}</p>
            </div>
          </div>
        ))} */}
        <div className="bento-outline" />
        <div className="bento-outline" />
        <div className="bento-outline" />
        <div className="bento-outline" />
      </div>
    );
  }
}

export default Bento;
