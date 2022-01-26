import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "Molecules/Header";
import { Home } from "Pages/Home";
import { About } from "Pages/About";
import { Work } from "Pages/Work";

ReactDOM.render(
    <div className="flex flex-col justify-between min-h-screen">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </Router>
    </div>,
  document.getElementById("root")
);
