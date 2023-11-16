import React, { memo } from "react";
import { ReactComponent as Logo } from "./assets/meta-cau.svg";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AvatarSelection from "./pages/AvatarSelection";
import Home from "./pages/Home";
import MapPlay from "./pages/MapPlay";
import CreateNickname from "./pages/CreateNickname";

import "./styles/main.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Logo className="mt-5 ml-5 static"></Logo>
      <AnimatePresence>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/avatarselection" element={<AvatarSelection />} />
          <Route path="/play" element={<MapPlay />} />
          <Route path="/createnickname" element={<CreateNickname />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default memo(App);
