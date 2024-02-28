import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/home/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
