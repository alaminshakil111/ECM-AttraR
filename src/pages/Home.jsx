// import { Navbar} from "react-bootstrap";
// import TopNavbar from "../components/TopNavbar";
import mainSlider1 from "../assets/images/mainSlider1.jpg";
import mainSlider2 from "../assets/images/mainSlider2.jpg";
import mainSlider3 from "../assets/images/mainSlider3.jpg";
import playstore_square from "../assets/images/playstore-square.png";
import appstore_square from "../assets/images/appstore-square.png";
import playstorebadge from "../assets/images/playstorebadge.svg";
import fabrilifeappstore from "../assets/images/fabrilifeappstore.svg";


const Home = () => {
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
                    <div className="sliderCatagoryBtn">
                        <div className="directbtnLeft flex justify-evenly">
                            <a href="/"> SHOP NOW </a>
                            <a href="/"> MEN </a>
                            <a href="/"> WOMEN </a>
                            <a href="/"> KIDS </a>
                        </div>
                        <div className="directBtnRight flex items-center">
                            <p> GET 5% OFF ON APP </p>
                            <div className="discountAppForMobile flex ">
                                <img className="md:hidden" src= {playstore_square} alt="playstore-square" />
                                <img className="md:hidden" src= {appstore_square} alt="appstore-square" />
                            </div>
                            <div className="discountAppForDesktop flex ">
                                <img className="hidden md:block" src= {playstorebadge} alt="playstorebadge" />
                                <img className="hidden md:block" src= {fabrilifeappstore} alt="fabrilifeappstore" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;