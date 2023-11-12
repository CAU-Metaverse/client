import React, { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const CreateNickname: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const avatarSelectRes = location.state && location.state.res;

  const [inputValue, setInputValue] = useState<string>(""); // 입력값
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // 입력값을 상태에 업데이트
  };

  /* 세션 스토리지 준비 */
  useEffect(() => {
    const sessionData = sessionStorage.getItem("userNickname");
    if (!sessionData) {
      sessionStorage.setItem("userNickname", ""); // 초기화
    }
  }, []);

  /* 닉네임 저장 후 화면 넘김 */
  const handleCreate = () => {
    // 닉네임 검사
    const inputElement = document.getElementById(
      "nicknameInput"
    ) as HTMLInputElement;
    const userInput = inputElement.value.trim();
    const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>;]/.test(userInput); // 특수 문자 방지

    if (userInput.length >= 1 && !hasSpecialCharacters) {
      // 세션스토리지에 사용자 닉네임 저장
      sessionStorage.setItem("userNickname", inputValue);
      sessionStorage.setItem("userAvatar", avatarSelectRes);
      navigate("/play", {
        state: { avatar: avatarSelectRes },
        replace: true,
      });
    } else {
      inputElement.focus();
    }
  };

  return (
    <Wrapper>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col flex-wrap justify-center items-center">
        <div className="mb-10 text-[32px] font-extrabold font-['NanumSquareNeoB']">
          캐릭터의 이름을 지어주세요
        </div>

        <div className="flex gap-10 font-['NanumSquareNeo']">
          <div className="bg-lgray p-8 pb-5 w-[450px] h-[670px]  rounded-[40px] shadow-md flex flex-col">
            <div className="flex justify-between">
              <div className="h-[25px] text-[30px] font-['NanumSquareNeoB'] font-bold">
                {inputValue}
              </div>
            </div>

            <div className="mt-5 mb-5 flex  border-t border-b border-[#D3D3D3] justify-center relative">
              {avatarSelectRes === "puang" ? (
                <img
                  src="image/puang.png"
                  alt="puang"
                  className="mt-3 h-[320px] mx-auto p-3 "
                ></img>
              ) : (
                <img
                  src="image/nendoroid.png"
                  alt="puang"
                  className="mt-3 h-[320px] mx-auto p-3 "
                ></img>
              )}
            </div>
            <div className="h-[80px] mb-3 flex flex-col justify-center items-center ">
              <input
                className="text-gray bg-white font-medium text-xs w-[350px] h-[50px] p-2 pl-4 pr-4 tracking-wide rounded-[20px] shadow-sm"
                type="text"
                id="nicknameInput"
                placeholder="닉네임 입력(특수문자 불가. 공백 포함 최대 10자)"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={10}
              ></input>
            </div>

            <div className="mt-3 self-center">
              <button
                className=" w-[168px] h-[60px] rounded-[39px] bg-black text-white font-semibold text-[16px] px-4 py-2 shadow-sm tracking-wider"
                onClick={handleCreate}
              >
                작성완료
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateNickname;
