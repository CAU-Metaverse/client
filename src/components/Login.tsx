import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

// 임시 유저 데이터
const dummyUser = {
  email: "test@example.com",
  pw: "test2323@@@",
};

const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [pwValid, setPwValid] = useState<boolean>(false);
  const [notAllow, setNotAllow] = useState<boolean>(true);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const conformInfo = () => {
    if (email === dummyUser.email && pw === dummyUser.pw) {
      // alert("로그인 성공");
    } else {
      // alert("로그인 실패");
    }
    navigate("/avatarselection", {
      state: { email, pw },
    });
  };

  // 확인 버튼 활성화
  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="page font-['NanumSquareNeo'] shadow-md">
      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="email"
            className="input"
            placeholder="caumeta@gmail.com"
            value={email}
            onChange={handleEmail}
          ></input>
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요</div>
          )}
        </div>

        <div className="inputTitle mt-[60px]">비밀번호</div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            minLength={8}
            onChange={handlePw}
          ></input>
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
          )}
        </div>
      </div>
      <div className="buttonWrap">
        <button
          onClick={conformInfo}
          disabled={notAllow}
          className="bottomButton bg-purple text-[#FFFFFF] "
        >
          입장하기
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="bottomButton bg-[#FFFFFF] text-black"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};
export default Login;
