import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Hover from "../components/Hover";

const AvatarSelection: FC = () => {
  const navigate = useNavigate();

  const handleSelect = (res: string) => {
    // 다음 페이지로 아바타 선택 결과 전달
    navigate("/createnickname", {
      state: { res },
      replace: true,
    });
  };

  return (
    <Wrapper>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col flex-wrap justify-center items-center">
        <div className="mb-10 text-[32px] font-extrabold font-['NanumSquareNeoB']">
          캐릭터를 선택하세요
        </div>

        <div className="flex gap-[100px] font-['NanumSquareNeo']">
          <Hover>
            <div className="bg-lgray p-8 pb-5 w-[430px] h-[650px]  rounded-[40px] shadow-md flex flex-col">
              <div className="flex justify-between">
                <div className="text-[30px] font-['NanumSquareNeoB'] font-bold">
                  기본 캐릭터
                </div>
                <div className="bg-white text-gray w-[117px] h-[50px] font-['Nunito'] font-bold text-[15px] rounded-[39px]  flex justify-center items-center">
                  Basic
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
                className="mt-3 self-center w-[168px] h-[60px] rounded-[39px] bg-black text-white font-semibold text-[16px] px-4 py-2 shadow-sm tracking-wider"
                onClick={() => {
                  handleSelect("nendoroid");
                }}
              >
                선택하기
              </button>
            </div>
          </Hover>

          <Hover>
            <div className="bg-lgray p-8 pb-5 w-[430px] h-[650px]  rounded-[40px] shadow-md flex flex-col">
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
                <div className="text-gray font-medium text-md ">
                  중앙대학교 대표 마스코트 푸앙이를 사용하여 가상의 캠퍼스를
                  거닐어보세요.
                </div>
              </div>
              <div className="mt-3 self-center">
                <button
                  className=" w-[168px] h-[60px] rounded-[39px] bg-black text-white font-semibold text-[16px] px-4 py-2 shadow-sm tracking-wider"
                  onClick={() => {
                    handleSelect("puang");
                  }}
                >
                  선택하기
                </button>
              </div>
            </div>
          </Hover>
        </div>
      </div>
    </Wrapper>
  );
};

export default AvatarSelection;
