import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import Wrapper from "../components/Wrapper";

const MapPlay: FC = () => {
  const location = useLocation();
  const userAvatar = location.state && location.state.avatar;
  const userNickname = sessionStorage.getItem("userNickname");
  console.log("*** user info ***\n", userAvatar, userNickname);

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

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default MapPlay;
