import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { CiLogin } from "react-icons/ci";

const TopNavbar = () => {
  const [isSearch, setSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSearch = () => {
    if (windowWidth < 768) {
      setSearch(!isSearch);
    }
  };

  return (
    <div className="topNavbar bg-[#231F20] py-1">
      <div className="container px-2 sm:px-4">
        <div className="wrapper">
          <div className="flex items-center justify-between py-1">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Logo" className="h-auto w-[100px]" />
              </a>
            </div>
            <div className="topNavRight flex space-x-4 text-[#fff] text-xl">
              <div className="searchNav hover:text-blue-600 flex items-center">
                {(isSearch || windowWidth >= 768) && (
                  <input
                    type="text"
                    className="border rounded px-2 py-1 text-black sm:block"
                    placeholder="Search..."
                  />
                )}
                <span onClick={toggleSearch} className="cursor-pointer">
                  <CiSearch />
                </span>
              </div>
              <div className="addCartNav hover:text-blue-600">
                <IoMdCart />
              </div>
              <div className="loginNav hover:text-blue-600">
                <CiLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
