

import mainSlider1 from "../assets/images/mainSlider1.jpg";
import mainSlider2 from "../assets/images/mainSlider2.jpg";
import mainSlider3 from "../assets/images/mainSlider3.jpg";
import playstore_square from "../assets/images/playstore-square.png";
import appstore_square from "../assets/images/appstore-square.png";
import playstorebadge from "../assets/images/playstorebadge.svg";
import fabrilifeappstore from "../assets/images/fabrilifeappstore.svg";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="bannerSec">
            <div className="container">
                <div className="wrapper">
                    <div className="mobileImg md:hidden">
                        <img src={mainSlider1} alt="mainSlider1" />
                    </div>
                    <div className="mobileImg hidden md:block lg:hidden">
                        <img src={mainSlider2} alt="mainSlider2" />
                    </div>
                    <div className="mobileImg hidden lg:block ">
                        <img src={mainSlider3} alt="mainSlider3" />
                    </div>
                    <div className="sliderCatagoryBtn lg:flex">
                        <div className="directbtnLeft flex justify-between items-center text-center w-full lg:w-[60%]">
                            <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] block w-full ">SHOP NOW </Link>
                            
                            <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] block w-full "> MEN </Link>
                            
                            <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] block w-full "> WOMEN </Link>
                            
                            <Link to="/" className="hover:text-white px-[22px] py-3 text-[11px] sm:text-[14px] block w-full "> KIDS </Link>

                        </div>
                        <div className="directBtnRight bg-[#ededed] lg:bg-[#fff]  mt-1 w-full lg:w-[40%]">
                            <div className="flex justify-between items-center px-2 py-2 sm:py-4 lg:py-0 max-w-[260px] sm:max-w-[415px] m-auto lg:max-w-[inherit]">
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
                    <div className="">

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Slider;