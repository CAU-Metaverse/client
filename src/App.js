import React, { memo } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AvatarSelection from "./pages/AvatarSelection";
import MapPlay from "./pages/MapPlay";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  // user data

  return (
    <BrowserRouter>
      <div className="App relative">
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
  );
}

export default memo(App);
