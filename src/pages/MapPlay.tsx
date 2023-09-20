import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const MapPlay: FC = () => {
  const location = useLocation();

  return (
    <div className="font-['NanumSquareNeo']">
      <p>== 유저 정보 ==</p>
      <div>이메일 : {location.state.email}</div>
      <div>비밀번호 : {location.state.password}</div>
      <div>아바타 선택 결과(0 : 기본 / 1 : 푸앙) : {location.state.avatar}</div>
      <div>닉네임 : {location.state.nickname}</div>
    </div>
  );
};

export default MapPlay;
