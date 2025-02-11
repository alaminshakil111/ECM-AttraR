import logo from "../assets/images/logo.png";

const TopNavbar = () => {

  return (
    <div className="topNavbar bg-[#231F20] py-1">
        <div className=".container px-2 sm:px-4">
            <div className="wrapper">
                <div className="flex items-center">
                    <div className="">
                        <a href="/">
                            <img src={logo} alt="Logo" className="h-auto w-[100px]" />
                        </a>
                    </div>
                </div>
            </div>









        </div>
    </div>
    // <nav className="bg-[#231F20] text-white shadow-lg">
    //   <div className="max-w-[1300px] mx-auto px-4 lg:px-[1px]">
    //     <div className="flex justify-between items-center h-16">
    //       {/* Logo */}
    //       <div className="flex items-center">
    //         <a href="/"><img
    //           src={logo} alt="Logo" className="h-10 w-auto" /></a>
    //       </div>

    //       {/* Desktop Menu */}
    //       <div className="hidden md:flex space-x-6">
    //         <Link to="/" className="hover:text-gray-200">
    //           Home
    //         </Link>
    //         <Link to="/AboutMe" className="hover:text-gray-200">
    //           About
    //         </Link>
    //         <Link to="/Skills" className="hover:text-gray-200">
    //         Skills
    //         </Link>
    //         <Link to="/Project" className="hover:text-gray-200">
    //         Project
    //         </Link>
    //         <Link to="/Contact" className="hover:text-gray-200">
    //         Contact
    //         </Link>
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <div className="md:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           className="focus:outline-none text-white"
    //         >
    //           {isOpen ? <X size={28} /> : <Menu size={28} />}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   {isOpen && (
    //     <div className="md:hidden">
    //       <div className="px-2 pt-2 pb-3 space-y-1">
    //         <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-700">
    //           Home
    //         </Link>
    //         <Link
    //           to="/AboutMe"
    //           className="block px-3 py-2 rounded-md hover:bg-blue-700">
    //           About
    //         </Link>
    //         <Link
    //           to="/Skills"
    //           className="block px-3 py-2 rounded-md hover:bg-blue-700">
    //           Skills
    //         </Link>
    //         <Link
    //           to="/Project"
    //           className="block px-3 py-2 rounded-md hover:bg-blue-700">
    //           Project
    //         </Link>
    //         <Link
    //           to="/Contact"
    //           className="block px-3 py-2 rounded-md hover:bg-blue-700">
    //           Contact
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </nav>
  );
};

export default TopNavbar;
