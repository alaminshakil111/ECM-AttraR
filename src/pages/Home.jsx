// import { Navbar} from "react-bootstrap";
// import TopNavbar from "../components/TopNavbar";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import playstore_square from "../assets/images/playstore-square.png";
import appstore_square from "../assets/images/appstore-square.png";
import playstorebadge from "../assets/images/playstorebadge.svg";
import fabrilifeappstore from "../assets/images/fabrilifeappstore.svg";

import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <div className="container">
                <div className="wrapper">
                <div className="sliderCatagoryBtn flex flex-col lg:flex-row">
                    <div className="directbtnLeft flex justify-around lg:w-[65%]">
                        <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] w-full flex justify-center items-center text-center ">SHOP NOW </Link>
                        
                        <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] w-full flex justify-center items-center text-center "> MEN </Link>
                        
                        <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] w-full flex justify-center items-center text-center "> WOMEN </Link>
                        
                        <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] w-full flex justify-center items-center text-center "> KIDS </Link>

                    </div>
                    <div className="directBtnRight bg-[#ededed] mt-1 mb-1 lg:mt-0 lg:mb-0 lg:w-[35%] flex justify-center  items-center  lg:py-2">
                        <div className=" flex justify-between items-center px-2 py-2 sm:py-4 lg:py-0 lg:px-0 max-w-[260px] sm:max-w-[415px] m-auto lg:m-0 lg:max-w-full">
                            <p className="text-xs md:text-[14px] px-2" > GET <span className="text-[16px] md:text-[17px] font-bold ">5%</span> OFF ON APP </p>
                            <div className="discountAppForMobile flex space-x-1 ">
                                <a href="/"><img className="sm:hidden w-12" src= {playstore_square} alt="playstore-square" /></a>
                                <a href="/"><img className="sm:hidden w-12" src= {appstore_square} alt="appstore-square" /></a>
                                <a href="/"><img className="hidden sm:block w-12 sm:w-[100px] md:w-[115px] " src= {playstorebadge} alt="playstorebadge" /></a>
                                <a href="/"><img className="hidden sm:block w-12 sm:w-[100px] md:w-[115px] " src= {fabrilifeappstore} alt="fabrilifeappstore" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container px-2 sm:px-0">
                <div className="wrapper">
                    <div className="homeElement bg-purple-400 lg:mt-1">
                        <Link href="/" className="px-2 py-2 block underline">
                            <div className="homeElementInner ">
                                <strong className="hover:text-blue-600"> Event T-shirt <IoIosArrowForward /> </strong> <span>
                                T-shirt/Clothing with your brand logo or design? We are delivering worldwide at unbeatable prices. <strong className="hover:text-blue-600"> Click here  <FaArrowCircleRight /> </strong>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="sectionHeading text-center bg-red-400 py-2 mt-1">
                        <h3> NEW ARRIVAL </h3>
                        <a href="/" className="underline text-center flex justify-center items-center text-"> visit store <IoIosArrowForward /> </a>
                    </div>
                </div>
            </div>


        </>
        
    );
};

export default Home;