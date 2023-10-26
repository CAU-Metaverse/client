import React, { FC } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mt-10 flex flex-col w-[100wh] h-[80vh] justify-center items-center">
      <div className="absolute top-10 font-['Nunito'] text-zinc-800 text-[57.6px] font-extrabold leading-[70.40px]">
        CAU-Metaverse
      </div>
      <div className="absolute top-20 mt-5 font-['NanumSquareNeo'] text-gray text-[20px] font-normal leading-[34.63px]">
        가상의 중앙대학교 캠퍼스로 여행을 떠나보세요!
      </div>
      <button
        className="absolute bottom-20 w-[380px] h-[75px] rounded-[39px] font-bold text-base font-['NanumSquareNeo'] animate-bounce hover:bg-purple bg-[#5136ffbc] text-[#FFFFFF]"
        onClick={() => navigate("/avatarselection")}
      >
        입장하기
      </button>
      <div>{/* <Login></Login> */}</div>
    </div>
  );
};

export default Home;
