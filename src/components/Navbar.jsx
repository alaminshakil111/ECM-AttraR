import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-[1px]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">MySite</div>

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
