import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface FormData {
  readonly email: string;
  readonly nickname: string;
  readonly password: string;
  clearquest: number;
}

const AvatarSelection: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location.state.email, location.state.pw);

  const userData: FormData = {
    email: location.state.email,
    nickname: "guest", // 임의 설정
    password: location.state.pw,
    clearquest: 5, // 임의 설정
  };

  const handleSelect = (res: number) => {
    console.log(userData);
    navigate("/play", {
      state: { ...userData, avatar: res },
    });
  };

  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-10">
      <div className="mb-5 text-[32px] font-extrabold font-['NanumSquareNeoB']">
        캐릭터를 선택하세요
      </div>

      <div className="flex gap-10 font-['NanumSquareNeo']">
        <div className="bg-lgray p-8 pb-5 w-[450px] h-[670px]  rounded-[40px] shadow-md flex flex-col">
          <div className="flex justify-between">
            <div className="text-[30px] font-['NanumSquareNeoB'] font-bold">
              기본 캐릭터
            </div>
            <div className="bg-white text-gray w-[117px] h-[50px] font-['Nunito'] font-bold text-[15px] rounded-[39px]  flex justify-center items-center">
              Free for all
            </div>
          </div>

          <div className="mt-3 mb-5 flex  border-t border-b border-[#D3D3D3] justify-center relative">
            <img
              src="image/nendoroid.png"
              alt="nendoroid"
              className="mt-3 h-[320px] mx-auto p-3"
            ></img>
          </div>

          <div className="h-[100px] flex flex-col items-center">
            <div className="text-gray font-medium text-md ">
              기본으로 제공되는 캐릭터입니다.
            </div>
          </div>
          <button
            className="mt-3 self-center w-[168px] h-[60px] rounded-[39px] bg-black text-white font-semibold text-[16px] px-4 py-2 shadow-sm"
            onClick={() => {
              handleSelect(0);
            }}
          >
            선택하기
          </button>
        </div>

        <div className="bg-lgray p-8 pb-5 w-[450px] h-[670px]  rounded-[40px] shadow-md flex flex-col">
          <div className="flex justify-between">
            <div className="text-[30px] font-['NanumSquareNeoB'] font-bold">
              푸앙이
            </div>
            <div className="bg-lpurple text-purple w-[117px] h-[50px] font-['Nunito'] font-bold text-[15px] rounded-[39px]  flex justify-center items-center">
              Premium
            </div>
          </div>

          <div className="mt-3 mb-5 flex  border-t border-b border-[#D3D3D3] justify-center relative">
            <img
              src="image/puang.png"
              alt="puang"
              className="mt-3 h-[320px] mx-auto p-3 "
            ></img>
          </div>

          <div className="h-[100px] flex flex-col items-center">
            <p className="text-gray font-medium text-md whitespace-prewrap">
              푸앙이 아바타를 지급 받으려면
            </p>
            <p className="text-gray font-medium text-md whitespace-prewrap">
              <span className="font-bold text-purple ">5개</span> 이상의
              퀘스트를 클리어해주세요!
            </p>
            <p className="mt-3 text-s text-black font-medium font-['Nunito'] ">
              <span className="text-2xl font-extrabold">
                {userData.clearquest}
              </span>{" "}
              / 5
            </p>
          </div>
          <div className="mt-3 self-center">
            {userData.clearquest >= 5 ? (
              <button
                className=" w-[168px] h-[60px] rounded-[39px] bg-black text-white font-semibold text-[16px] px-4 py-2 shadow-sm"
                onClick={() => {
                  handleSelect(1);
                }}
              >
                선택하기
              </button>
            ) : (
              <button className="w-[168px] h-[60px] rounded-[39px] bg-[#FFEECC] text-[#C68A15] font-semibold text-[16px] px-4 py-2 shadow-sm">
                조건 미충족
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;
