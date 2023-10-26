import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

const MapPlay: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Metaverse",
    productVersion: "1.0.2",
  });

  /* <p>== 유저 정보 ==</p>
      <div>이메일 : {location.state.email}</div>
      <div>비밀번호 : {location.state.password}</div>
      <div>아바타 선택 결과(0 : 기본 / 1 : 푸앙) : {location.state.avatar}</div>
      <div>닉네임 : {location.state.nickname}</div> */

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      id="unityContainer"
    >
      <Unity
        unityProvider={unityProvider}
        className="w-[95vw] h-[90vh] rounded-[20px] mt-5 shadow-lg bg-white"
      />
      {isLoaded && (
        <div className="absolute right-2 top-1/2">
          <button
            className="font-['Nunito'] text-[16px] font-bold bg-black text-white pl-2.5 pr-2.5 pt-1 pb-1 shadow-lg rounded-[39px]"
            onClick={() => (window.location.href = "/")}
          >
            X
          </button>
        </div>
      )}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {isLoaded === false && (
          <p className="text-[20px] font-['Nunito'] font-bold text-gray">
            Loading...{Math.round(loadingProgression * 100)}%
          </p>
        )}
      </div>
    </div>
  );
};

export default MapPlay;
