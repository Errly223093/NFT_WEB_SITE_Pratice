import React from "react";
const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

function Intro() {
  return (
    // from-transparent via-white 등으로 섞을 수 있음!
    <div className="bg-gradient-to-b from-main to-red-400 pt-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative w-40 h-40">
          <img
            className="absolute rounded-full w-40 h-40 z-10"
            src={imgSrc}
            alt="img"
          />
          <div className="absolute top-0 rounded-full w-40 h-40 bg-white text-gray-900 flex justify-center items-center">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
