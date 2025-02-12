import { useState } from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import { HiBars3 } from "react-icons/hi2";
import { GiTireIronCross } from "react-icons/gi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#373A3C] text-white shadow-lg relative">
      <div className="container px-2 sm:px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <a href="#" className="underline underline-offset-2 text-blue-300"> Lorem ipsum dolor sit amet. </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/AboutMe" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/Skills" className="hover:text-gray-200">
              Skills
            </Link>
            <Link to="/Project" className="hover:text-gray-200">
              Project
            </Link>
            <Link to="/Contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden">
            <button onClick={toggleMenu}
              className="focus:outline-none text-white" >
                <HiBars3 size={28}  />
              {/* <Menu size={28} /> */}
              {/* {isOpen ? <Menu size={28} /> : <Menu size={28} /> } */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={
        `fixed top-0 left-0 w-10/12 h-full bg-[#373A3C] shadow-lg transform
         ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-50` }>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-red-600 hover:text-red-300" >
            <GiTireIronCross size={24} />
          {/* <X size={28} /> */}
        </button>
        <div className="mt-16 px-4 space-y-4">
          <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Home
          </Link>
          <Link to="/AboutMe" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            About
          </Link>
          <Link to="/Skills" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Skills
          </Link>
          <Link to="/Project" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Project
          </Link>
          <Link to="/Contact" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
