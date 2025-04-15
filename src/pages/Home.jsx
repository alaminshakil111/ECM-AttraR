// import { Navbar} from "react-bootstrap";
// import TopNavbar from "../components/TopNavbar";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";

// import { Button, Tooltip } from "flowbite-react";

import playstore_square from "../assets/images/playstore-square.png";
import appstore_square from "../assets/images/appstore-square.png";
import playstorebadge from "../assets/images/playstorebadge.svg";
import fabrilifeappstore from "../assets/images/fabrilifeappstore.svg";
import selectingImage from "../assets/images/selectingImage.png";


import NewPriceItemCard from '../components/NewPriceItemCard';
import FrontImgCardSec from '../components/FrontImgCardSec'
import FullSleeveShirt from '../components/FullSleeveShirt'
import JacketSec from '../components/JacketSec';
// import MultipleItemSlider from '../components/MultipleItemSlider';
import ProductExplain from '../components/FeatureProduction';
import HelpContactSec from '../components/HelpContactSec';
import Footermain from '../components/Footermain';


import { Link } from "react-router-dom";
import Slider from "../components/Slider";
// import TopNavbar from "../components/TopNavbar";
// import Navbar from "../components/Navbar";



const Home = () => {
    return (
        <>
            {/* SLIDER BANNER */}
            
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
                </div>
            </div>
            <div className="container px-2 sm:px-0">
                <div className="wrapper">
                    <div className="sectionHeading text-center bg-red-400 py-2 mt-1 md:mt-3 mb-5 rounded ">
                        <h3> NEW ARRIVAL </h3>
                        <a href="/" className="underline text-center flex justify-center items-center text-"> visit store <IoIosArrowForward /> </a>
                    </div>
                    <div className="ItemsBoxApp">
                        <NewPriceItemCard />
                    </div>
                </div>
            </div>

            <div className="container justify-center px-2 sm:px-0">
                <div className="wrapper">
                    <div className="FrontImgBoxApp mt-6 md:mt-9">
                        <FrontImgCardSec />
                    </div>                 
                </div>
            </div>

            <div className="container px-2 sm:px-0">
                <div className="wrapper">
                    <div className="sectionHeading text-center bg-red-400 py-2 mt-1 md:mt-3 mb-5 rounded ">
                        <h3> Mens Full Sleeve T-shirt </h3>
                        <a href="/" className="underline text-center flex justify-center items-center text-"> visit store <IoIosArrowForward /> </a>
                    </div>
                    <div className="ItemsBoxApp">
                        <FullSleeveShirt />
                    </div>

                </div>
            </div>

            <div className="container px-2 sm:px-0">
                <div className="wrapper">
                    <div className="selectingProductSec md:flex items-center gap-3 md:gap-0 bg-white px-2 md:px-0 py-2 md:py-0 mt-3 mb-3 rounded ">
                        <div className="selectContent md:w-3/5 xl:w-3/5 pb-1 md:pb-5 md:pt-5 md:pr-2 md:pl-2  ">
                            <h1 className="h1 flex items-center text-[20px] lg:text-[25px] xl:text-[31px]  font-bold "> Site Name <SlArrowRight className=" text-teal-400 text-[15px] lg:text-[16px ] xl:text-[20px] " /> </h1>
                            <h6 className="h6 text-[18] font-bold lg:text-[21px] xl:text-[23px] "> Because comfort and confidence go hand in hand.</h6>
                            <p className="para"> We focus on carefully selecting the best clothing that is comfortable, looks great, and makes you confident. Apart from the fabric, design and fit, we go through strict quality control parameters to give you what you truly deserve. The power of a good outfit is how it can influence your perception of yourself.  </p>
                        </div>
                        <div className="selectImage  md:w-2/5 xl:w-2/5  flex justify-center ">
                            <a href="/"> <img src={selectingImage} alt="{selectingImage}" /> </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container px-2 sm:px-0">
                <div className="wrapper">
                    <div className="sectionHeading text-center bg-red-400 py-2 mt-1 md:mt-3 mb-5 rounded ">
                        <h3> Mens Jacket </h3>
                        <a href="/" className="underline text-center flex justify-center items-center text-"> visit store <IoIosArrowForward /> </a>
                    </div>
                    <div className="ItemsBoxApp">
                        <JacketSec />
                    </div>
                </div>
            </div>

            {/* <div className="container px-2 sm:px-0">
                <div className="wrapper">
                    <div className="mt-3">
                        <MultipleItemSlider />
                    </div>
                </div>
            </div> */}

            <div className="OuterContainerExplain bg-white ">
                <div className="container px-2 sm:px-0">
                    <div className="wrapper">
                        <ProductExplain />
                    </div>
                </div>
            </div>
            <div className="OuterContainerExplain bg-[#231F20] text-white ">
                <div className="container px-2 sm:px-0">
                    <div className="wrapper ">
                        <HelpContactSec />
                    </div>
                </div>
            </div>

            <div className="FooterBgColor bg-black text-white ">
                <div className="container px-2 sm:px-0 ">
                    <div className="wrapper">
                        <Footermain />
                    </div>
                </div>
            </div>



            




            



        </>
        
    );
};

export default Home;