import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Mywork from "../Mywork";
import Contact from "./contact";
import Blog from "./Blog";
import About from "./About";

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mywork" element={<Mywork />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;