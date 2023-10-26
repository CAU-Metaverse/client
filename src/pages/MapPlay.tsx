import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import { SyncLoader } from "react-spinners";

const MapPlay: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { unityProvider, loadingProgression, unload } = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Metaverse",
    productVersion: "1.0.2",
  });

  async function handleExit() {
    await unload();
    navigate("/");
  }

  return (
    <div className="w-[100wh]">
      <div className="absolute right-6">
        <button
          className="font-['Nunito'] text-[16px] font-bold bg-black text-white pl-2.5 pr-2.5 pt-1 pb-1 shadow-lg hover:text-[20px] rounded-[39px]"
          onClick={handleExit}
        >
          X
        </button>
      </div>
      <div
        className="font-['NanumSquareNeo'] flex flex-col justify-center items-center"
        id="unityContainer"
      >
        {/* <p className="text-[12px]">
          Loading Application... {Math.round(loadingProgression * 100)}%
        </p> */}
        <Unity
          unityProvider={unityProvider}
          style={{
            width: "95vw",
            height: "90vh",
            borderRadius: "20px",
            marginTop: "15px",
          }}
          className="shadow-lg bg-white"
        />
      </div>

      {/* <p>== 유저 정보 ==</p>
      <div>이메일 : {location.state.email}</div>
      <div>비밀번호 : {location.state.password}</div>
      <div>아바타 선택 결과(0 : 기본 / 1 : 푸앙) : {location.state.avatar}</div>
      <div>닉네임 : {location.state.nickname}</div> */}
    </div>
  );
};

export default MapPlay;
