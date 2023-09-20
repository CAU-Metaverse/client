import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

interface FormData {
  email: string;
  nickname: string;
  password: string;
}

const SignUp: FC = () => {
  const navigate = useNavigate();

  const [pwValid, setPwValid] = useState<boolean>(false); // 비밀번호 형식검사
  const [pwSame, setPwSame] = useState<boolean>(false); // 비밀번호 이중검사
  const [notAllow, setNotAllow] = useState<boolean>(true); // 계정 생성 버튼 활성화

  const [pwCheck, setPwCheck] = useState<string>(""); // 비밀번호 이중검사란
  const [formData, setFormData] = useState<FormData>({
    email: "",
    nickname: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // 비밀번호 유효성 검사
    if (name === "password") {
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("회원가입이 완료되었습니다! 홈으로 돌아가 다시 로그인해주세요.");
    window.location.href = "/";
  };

  // 비밀번호 동일 검사
  useEffect(() => {
    if (formData.password === pwCheck) {
      setPwSame(true);
    } else {
      setPwSame(false);
    }
  }, [pwCheck, formData.password]);

  // 회원가입 버튼 활성화
  useEffect(() => {
    if (pwValid && pwSame) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [pwSame, pwValid]);

  return (
    <div className="flex items-center justify-center mt-14 font-['NanumSquareNeo']">
      <div className=" bg-lgray w-[555px] h-[720px] pt-10 pb-10 pl-8 pr-8 rounded-[50px] shadow-md flex flex-col">
        <div className="text-black font-['NanumSquareNeoB'] font-extrabold text-[32px]">
          반가워요!
        </div>
        <div className="text-gray text-sm mb-5">
          CAU-Metaverse를 즐기고 싶다면 아래의 정보를 입력해주세요.
        </div>

        <form
          className="flex flex-col justify-center items-center mt-3"
          onSubmit={handleSubmit}
        >
          <div className="formInputWrap mb-5">
            <input
              className="formInput"
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formInputWrap mb-5">
            <input
              className="formInput"
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <div className="formInputWrap ">
              <input
                className="formInput"
                type="password"
                name="password"
                placeholder="비밀번호 영문, 숫자, 특수문자 포함 8자 이상"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pwErrorMessageWrap place-self-start">
              {!pwValid && formData.password.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
              )}
            </div>
          </div>

          <div>
            <div className="formInputWrap">
              <input
                className="formInput"
                type="password"
                placeholder="비밀번호 확인"
                value={pwCheck}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPwCheck(e.target.value);
                }}
                required
              />
            </div>
            <div className="pwErrorMessageWrap place-self-start">
              {pwCheck.length > 0 && !pwSame && <div>비밀번호가 다릅니다</div>}
            </div>
          </div>

          <p className="text-sm mt-8 mb-1">
            이미 계정이 있나요?{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
              className="font-bold cursor-pointer"
            >
              로그인하러 가기
            </span>
          </p>

          <button
            disabled={notAllow}
            className="bg-black text-white createButton"
            type="submit"
          >
            계정 생성하기
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
