import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Second from "./Components/second";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/second" element={<Second />} />
      </Routes>
    </>
  );
};

export default App;
