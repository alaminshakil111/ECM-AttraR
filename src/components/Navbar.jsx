import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(null); // for "Our Service"
  const [openNestedSubMenu, setOpenNestedSubMenu] = useState(null); // for nested: "Create Website", etc.

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    
    {
      label: "Our Service",
      subMenu: [
        {
          to: "/services/create-website",
          label: "Create Website",
          nestedSubMenu: [
            { to: "/services/create-website/test1", label: "Test1" },
            { to: "/services/create-website/test2", label: "Test2" },
          ],
        },
        {
          to: "/services/develop-website",
          label: "Develop Website",
          nestedSubMenu: [
            { to: "/services/develop-website/test3", label: "Test3" },
            { to: "/services/develop-website/test4", label: "Test4" },
          ],
        },
        { to: "/services/hiring-developer", label: "Hiring Developer" },
      ],
    },
    { to: "/testimonials", label: "Testimonials" },
  ];
  

  return (
    <nav className="bg-[#373A3C] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2  ">

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mr-2">
        <span className="cursor-pointer">
          {isMenuOpen ? <HiX size={33} /> : <HiMenu size={33} />}
        </span>
        </button>

        {/*  */}
        <div className="exclusiveLink text-xs">
          <a href="#" className="flex items-center gap-[3px] ">  EXCLUSIVE T-SHIRTS ON SALE | Limited time only <FaRegArrowAltCircleRight />
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
        <div className={`menuItemSideBar rounded-r-[22px] fixed top-0 left-0 h-full w-[88%] sm:w-[70%] md:w-[55%] lg:w-[50%] xl:w-[35%] 2xl:w-[30%] bg-[#333333] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${ isMenuOpen ? 'translate-x-0' : '-translate-x-full' }`}>
          <div className="flex justify-between p-4">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Logo" className="h-auto w-[100px] lg:w-[140px] xl:w-[165px] " />
              </a>
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX size={28} className="cursor-pointer " />
            </button>
          </div>
          <ul className="itemLiMenu flex flex-col space-y-2 p-4">
          {navLinks.map((link, index) =>
            link.subMenu ? (
              <li key={index}  >
                {/* First-level submenu: "Our Service" */}
                <button
                  onClick={() =>
                    setIsSubMenuOpen(isSubMenuOpen === index ? null : index)
                  }
                  className="w-full flex justify-between text-gray-400 py-1" >
                  {link.label} <HiChevronDown />
                </button>

                {isSubMenuOpen === index && (
                  <ul className="ml-4 space-y-2">
                    {link.subMenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        {subLink.nestedSubMenu ? (
                          <div>
                            {/* Nested submenu: "Create Website", "Develop Website" */}
                            <button
                              onClick={() =>
                                setOpenNestedSubMenu(
                                  openNestedSubMenu === subIndex ? null : subIndex
                                )
                              }
                              className="w-full flex justify-between text-gray-400 hover:text-blue-600" >
                              {subLink.label} <HiChevronDown />
                            </button>

                            {openNestedSubMenu === subIndex && (
                              <ul className="ml-4 mt-1 space-y-1">
                                {subLink.nestedSubMenu.map(
                                  (nestedLink, nestedIndex) => (
                                    <li key={nestedIndex}>
                                      <NavLink
                                        to={nestedLink.to}
                                        className="block text-gray-400 hover:text-blue-500" >
                                        {nestedLink.label}
                                      </NavLink>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <NavLink
                            to={subLink.to}
                            className="block text-gray-400 hover:text-blue-600"
                          >
                            {subLink.label}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className="block py-1 text-gray-400 hover:text-blue-600" >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
          </ul>


          </div>
        )}
        

        {/* Navigation Links - Desktop */}

        {/* <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, index) =>
            link.subMenu ? (
              <li key={index} className="relative group">
                <button className="flex items-center gap-1">
                  {link.label} <HiChevronDown />
                </button>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md w-48">
                  {link.subMenu.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subLink.to}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                        {subLink.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
                  }>
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul> */}
        
      </div>
    </nav>
  );
};

export default Navbar;
