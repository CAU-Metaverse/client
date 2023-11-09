import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[100vw] h-[80vh] justify-center items-center">
        <div className="absolute top-20 font-['Nunito'] text-zinc-800 text-[60px] font-extrabold leading-[70.40px]">
          CAU-Planet
        </div>
        <div className="absolute top-20 mt-[80px] font-['NanumSquareNeo'] text-gray text-[20px] font-normal leading-[34.63px]">
          중앙대학교 캠퍼스로 여행을 떠나보세요!
        </div>
        <button
          className="absolute bottom-20 w-[400px] h-[75px] rounded-[45px] font-bold text-md font-['NanumSquareNeo'] animate-bounce hover:bg-purple bg-[#5136ffbc] text-[#FFFFFF] tracking-wide"
          onClick={() => navigate("/avatarselection")}
        >
          입장하기
        </button>
      </div>
    </Wrapper>
  );
};

export default Home;
