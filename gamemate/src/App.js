import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStyle from "./pages/GlobalStyles";
import Home from "./pages/Home";

function App() {
  const location = useLocation();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
}

export default App;
