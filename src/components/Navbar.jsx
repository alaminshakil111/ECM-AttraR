import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#373A3C] text-white shadow-lg">
      <div className="container px-2 sm:px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="">sdsd</a>
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
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-700">
              Home
            </Link>
            <Link
              to="/AboutMe"
              className="block px-3 py-2 rounded-md hover:bg-blue-700">
              About
            </Link>
            <Link
              to="/Skills"
              className="block px-3 py-2 rounded-md hover:bg-blue-700">
              Skills
            </Link>
            <Link
              to="/Project"
              className="block px-3 py-2 rounded-md hover:bg-blue-700">
              Project
            </Link>
            <Link
              to="/Contact"
              className="block px-3 py-2 rounded-md hover:bg-blue-700">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
