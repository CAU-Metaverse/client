import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

const MapPlay: FC = () => {
  const location = useLocation();

  // unity webgl
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data.unityweb",
    frameworkUrl: "build/build.framework.js.unityweb",
    codeUrl: "build/build.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Metaverse",
    productVersion: "1.0.2",
  });

  return (
    <div
      className="font-['NanumSquareNeo']"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: "25px",
        height: "90vh",
      }}
    >
      {/* <p>== 유저 정보 ==</p>
      <div>이메일 : {location.state.email}</div>
      <div>비밀번호 : {location.state.password}</div>
      <div>아바타 선택 결과(0 : 기본 / 1 : 푸앙) : {location.state.avatar}</div>
      <div>닉네임 : {location.state.nickname}</div> */}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "90vw",
          borderRadius: "20px",
        }}
        className="shadow-lg bg-white"
      />
    </div>
  );
};

export default MapPlay;
