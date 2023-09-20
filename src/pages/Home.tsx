import React, { FC } from "react";
import Login from "../components/Login";

const Home: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5 font-['Nunito'] text-zinc-800 text-[57.6px] font-extrabold leading-[70.40px]">
        CAU-Metaverse
      </div>
      <div className="font-['NanumSquareNeo'] text-gray text-[20px] font-normal leading-[34.63px]">
        CAU-Metaverse만의 놀라운 세계를 경험해보세요
      </div>
      <div>
        <Login></Login>
      </div>
    </div>
  );
};

export default Home;
