import React from "react";
import fb from "../Assets/footer-fb.svg";
import ig from "../Assets/footer-ig.svg";
import ph from "../Assets/footer-ph.svg";
import line from "../Assets/footer-line.svg";
import twitter from "../Assets/footer-twitter.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <style>
          {`
            footer{
                text-align:center;
                padding:0 60px;
            }
            .footer-icon{
                display:inline-block;
                width:30px;
                margin:0 5px 20px 5px;
            }
            .footer-text{
                margin-bottom:35px;
            }
            @media only screen and (max-width:767px){
                footer{
                    padding:0;
                }
            }
            `}
        </style>
        <div style={{ borderTop: "1px solid #3e3a39", margin: "35px 0" }} />
        <div className="footer-icon">
          <img src={fb} alt="" />
        </div>
        <div className="footer-icon">
          <img src={ig} alt="" />
        </div>
        <div className="footer-icon">
          <img src={line} alt="" />
        </div>
        <div className="footer-icon">
          <img src={ph} alt="" />
        </div>
        <div className="footer-icon">
          <img src={twitter} alt="" />
        </div>
        <div className="footer-text">
          <div>
            ご利用ガイド｜利用規約｜プライバシーポリシー｜特定商取引法に基づく表記｜会社概要｜お問い合わせ｜サイトマップ
          </div>
          <div>Copyright© 2018 少年A All Rights Reserved</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
