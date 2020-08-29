import React from "react";

import "../assets/styles/Main.styl";

const Main = React.memo((props) => {
  const videoGenerator = (videos) => {
    const videoList = [...Array(videos)].map(() =>
      Math.ceil(Math.random() * 40)
    );
    return videoList.map((num, index) => {
      const src = `https://picsum.photos/290/170?random=${num}`;
      return (
        <div key={index} className="Main__video">
          <img src={src} />
          <div className="Main__video--description">
            <div className="pic">
              <img src="" alt="" />
            </div>
            <div>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <span>Lorem, ipsum.</span>
              <div>
                <span>890,593 visitas</span>
                <span>hace 3 años</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <main>
      <div className="Main__grid">{videoGenerator(10)}</div>
      <div className="Main__grid--news">
        <h2>Noticias sobre el COVID‑19</h2>
        <div className="Main__grid">{videoGenerator(5)}</div>
      </div>
      <div className="Main__grid">{videoGenerator(15)}</div>
    </main>
  );
});

export default Main;
