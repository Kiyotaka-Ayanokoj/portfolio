import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

import Home from "./pages/Home";

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
};

export default App;