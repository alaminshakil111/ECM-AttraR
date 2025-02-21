import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {

  return (
    <>
      <TopNavbar />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>




    </>
  )
}

export default App
