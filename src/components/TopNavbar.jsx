import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { CiLogin } from "react-icons/ci";

const TopNavbar = () => {
  const [isLogin, setLogin] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(`${windowWidth}`)
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log(`${handleResize}`)
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSearch = () => {
    if (windowWidth < 768) {
      setSearch(!isSearch);
    }
  };
  const toggleLogin = ()=> {
    setLogin(!isLogin);
  }
  

  return (
    <div className="topNavbar bg-[#231F20] py-1">
      <div className="container relative px-2 sm:px-4 ">
        <div className="wrapper">
          <div className="flex items-center justify-between py-1">
            <div className="logo w-5/12">
              <a href="/">
                <img src={logo} alt="Logo" className="h-auto w-[100px] lg:w-[140px] xl:w-[165px] " />
              </a>
            </div>
            <div className="topNavRight w-7/12 ">
              <div className="flex justify-end gap-[13px] text-[#fff] text-[25px] " >
              <div className="searchNav hover:text-blue-600 flex items-center">
                {(isSearch || windowWidth >= 768) && (
                  <input
                    type="text"
                    className="border rounded px-2 py-1 text-black sm:block"
                    placeholder="Search..."
                  />
                )}
                <span onClick={toggleSearch} className=" searchBtn cursor-pointer">
                  <CiSearch />
                </span>
              </div>
              <div className="addCartNav cursor-pointer hover:text-blue-600">
                <a href="/Cart"> <IoMdCart /> </a>
              </div>
              <div className="loginNav cursor-pointer hover:text-blue-600">
                <span onClick={toggleLogin} > <CiLogin /> </span>
              </div>

              </div>
              <div className= {`loginChoosebox bg-slate-900 absolute right-0 top-10 z-10 flex flex-col gap-1 px-2 py-2
              ${isLogin ? "block" : "hidden" }` }>
                <div className="loginOpenBtn leading-[1] pb-1">
                    <a href="/" className=" text-sm text-white hover:text-[#b6b5b5] flex flex-col "> Login 
                      <span className="text-[12px] text-[#777575] "> Enter your account </span>
                    </a>
                    
                </div>
                <div className="registerOpenBtn leading-[1] pb-1">
                  <a href="/" className=" text-sm text-white hover:text-[#b6b5b5] flex flex-col "> Register 
                    <span className="text-[12px] text-[#777575]"> Creat an account </span>
                  </a>
                </div>
                <div className="helpbtn leading-[1] pb-1">
                  <a href="/" className=" text-sm text-white hover:text-[#b6b5b5] flex flex-col "> Help 
                    <span className="text-[12px] text-[#777575] "> Let us to help you </span>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
