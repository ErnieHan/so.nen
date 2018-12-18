import React from "react";

class Bento extends React.Component {
  render() {
    return (
      <div className="bento-content">
        <style>
          {`
            @keyframes showBento {
              0%{
                transform:scale(0)
              }
              100%{
                transform:scale(1)
              }
            }
            .bento-content{
              width:23%;
              margin-bottom:20px;
              padding:1%;
            }
            .bento{
              background:#FFF;
              border:1px solid #E9E8E7;
              border-radius:5px;
              padding:10px;
              transform:scale(0);
              animation: showBento .5s .5s forwards;
              cursor:pointer;
            }
            .bento-img{
              overflow:hidden;
            }
            .bento-img img{
              border-radius:5px;
            }
            .bento-text h2{
              font-size:20px;
            }
            .bento-text p{
              font-size:12.5px;
              font-weight:100;
              line-height:1.6;
            }
            .bento-date{
              margin-top:10px;
              color:#ccc;
              font-family:"Noto Sans TC";
              letter-spacing: 1.2px;
            }
            @media only screen and (max-width:991px){
              .bento-content{
                width:48%;
              }
            }
            @media only screen and (max-width:767px){
              .bento-content{
                width:98%;
              }
              .bento-text h2{
                font-size:20px;
              }
              .bento-text p{
                font-size:10px;
              }
            }
        `}
        </style>
        <div className="bento">
          <div className="bento-img">
            <img src={this.props.img} alt="" />
          </div>
          <div className="bento-text">
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            <p className="bento-date">12月15日(土)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bento;
