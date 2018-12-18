import React from "react";
import Bento from "../Components/Bento";
import Gallery from "../Components/Gallery";
// import SlickPhoto from "../Components/SlickPhoto";
import img1 from "../Assets/01.jpg";
import img2 from "../Assets/02.jpg";
import img3 from "../Assets/03.jpg";
import img4 from "../Assets/04.jpg";
// import BentoLightBox from "../Components/BentoLightBox";

class Home extends React.Component {
  render() {
    const bentoList = [
      {
        title: "秋冬限定！用豐富肥美的油脂來料理鹽烤鯖魚！",
        content: "鯖魚可說是CP值相當高的食材，秋冬尤其肥美。不過冷凍跟加...",
        img: img1
      },
      {
        title: "用簡單的材料輕鬆變出好吃的御好燒！還要在便當裡用美乃滋拉花！",
        content: "御好燒又稱為大阪燒、什錦燒或隨意燒，是源自日本的一種鐵⋯",
        img: img2
      },
      {
        title: "萬聖節限定！捨不得吃的幽靈皮卡丘造型便當！",
        content:
          "今天是萬聖節，做了幽靈皮卡丘的造型便當，真的好捨不得吃⋯了幽靈皮卡丘的造型便當，真的好捨不得吃⋯了幽靈皮卡丘的造型便當，真的好捨不得吃⋯了幽靈皮卡丘的造型便當，真的好捨不得吃⋯",
        img: img3
      },
      {
        title: "明太子炒麵麵包！炸蝦麵包！塔塔醬也要自己做！",
        content: "炒麵絕對是日本卡通裡祭典的經典小吃之一，利用明太子的料",
        img: img4
      },
      {
        title: "秋冬限定！用豐富肥美的油脂來料理鹽烤鯖魚！",
        content: "鯖魚可說是CP值相當高的食材，秋冬尤其肥美。不過冷凍跟加...",
        img: img1
      },
      {
        title: "用簡單的材料輕鬆變出好吃的御好燒！還要在便當裡用美乃滋拉花！",
        content: "御好燒又稱為大阪燒、什錦燒或隨意燒，是源自日本的一種鐵⋯",
        img: img2
      },
      {
        title: "萬聖節限定！捨不得吃的幽靈皮卡丘造型便當！",
        content:
          "今天是萬聖節，做了幽靈皮卡丘的造型便當，真的好捨不得吃⋯了幽靈皮卡丘的造型便當，真的好捨不得吃⋯了幽靈皮卡丘的造型便當，真的好捨不得吃⋯了幽靈皮卡丘的造型便當，真的好捨不得吃⋯",
        img: img3
      },
      {
        title: "明太子炒麵麵包！炸蝦麵包！塔塔醬也要自己做！",
        content: "炒麵絕對是日本卡通裡祭典的經典小吃之一，利用明太子的料",
        img: img4
      },
      {
        title: "明太子炒麵麵包！炸蝦麵包！塔塔醬也要自己做！",
        content: "炒麵絕對是日本卡通裡祭典的經典小吃之一，利用明太子的料",
        img: img4
      }
    ];
    return (
      <div>
        <h1>HomePage</h1>
        <Gallery>
          {bentoList.map((data, i) => (
            <Bento
              key={i}
              img={data.img}
              title={data.title}
              content={data.content}
            />
          ))}
        </Gallery>
        {/* <BentoLightBox /> */}
        {/* <SlickPhoto /> */}
      </div>
    );
  }
}

export default Home;
