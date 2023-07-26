import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Game from "./Game";
import Comments from "./Comments";

import { AnimatePresence } from "framer-motion";

function AnimatedPage() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />

        <Route path="/Game" element={<Game />} />
        <Route path="/Comments" element={<Comments />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedPage;
