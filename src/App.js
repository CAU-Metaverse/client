import React, { memo } from "react";
import { ReactComponent as Logo } from "./assets/cau-metaverse.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvatarSelection from "./pages/AvatarSelection";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import MapPlay from "./pages/MapPlay";

import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Logo className="mt-5 ml-5 static"></Logo>
          <div className="mainBackground w-screen h-full"></div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/avatarselection" element={<AvatarSelection />} />
            <Route path="/play" element={<MapPlay />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default memo(App);
