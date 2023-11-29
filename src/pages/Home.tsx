import React, { useEffect, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const Home: FC = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <div id="video-container">
        <video id="background-video" autoPlay muted loop>
          <source src="video/test2.mp4" type="video/mp4" />
        </video>
        <div className="gradient-overlay"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[100vw] h-[80vh] justify-center items-center">
        <div className="absolute top-8 font-['Nunito'] text-zinc-800 text-[60px] font-extrabold leading-[70.40px]">
          CAU-Planet
        </div>
        <div className="absolute top-8 mt-[80px] font-['NanumSquareNeo'] text-black text-[20px] font-normal leading-[34.63px]">
          중앙대학교 캠퍼스로 여행을 떠나보세요!
        </div>
        {showButton && (
          <button
            className="enter-button absolute bottom-20 w-[350px] h-[60px] rounded-[45px] font-bold text-sm font-['NanumSquareNeo'] text-[#FFFFFF] tracking-wide shadow-md"
            onClick={() => navigate("/avatarselection")}
          >
            입장하기
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default Home;
