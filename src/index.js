import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import "./index.css";

import Detail from "./screens/Details/Detail";
import Home from "./screens/home/Home";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Detail />} />
      {/* <Route exact path="/booknow" element={<BookShow />} /> */}
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
