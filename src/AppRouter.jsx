import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import { Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work" element={<Work />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
};

export default AppRouter;
