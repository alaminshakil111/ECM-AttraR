import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Section from './components/Section';


import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <div className="ItemsBoxApp">
        <h1>Multiple Boxes Section</h1>
        <Section />
      </div>




    </>
  )
}

export default App
