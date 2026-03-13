import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Mywork from "../Mywork";
import Contact from "./contact";
import Blog from "./Blog";
import About from "./About";






function App() {
  return (

    <Fragment>
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Blog" element={< Blog />} />
          <Route path="/Contact" element={< Contact />} />
          <Route path="/Mywork" element={< Mywork />} />
          <Route path="/About" element={< About />} />



        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App; 