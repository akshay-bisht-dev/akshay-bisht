import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
