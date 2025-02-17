// import { Navbar} from "react-bootstrap";
// import TopNavbar from "../components/TopNavbar";
import mainSlider1 from "../assets/images/mainSlider1.jpg";
import mainSlider2 from "../assets/images/mainSlider2.jpg";
import mainSlider3 from "../assets/images/mainSlider3.jpg";
import playstore-square from "../assets/images/playstore-square.png";
import appstore-square from "../assets/images/appstore-square.png";


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
                        <div className="directbtnLeft">
                            <a href="/"> SHOP NOW </a>
                            <a href="/"> MEN </a>
                            <a href="/"> WOMEN </a>
                            <a href="/"> KIDS </a>
                        </div>
                        <div className="directBtnRight">
                            <p> GET 5% OFF ON APP </p>
                            <div className="discountAppForMobile">
                                <img src= {playstore-square} alt="playstore-square" />
                                <img src= {appstore-square} alt="appstore-square" />
                            </div>
                            <div className="discountAppForDesktop">
                                <img src= {playstore-square} alt="playstore-square" />
                                <img src= {appstore-square} alt="appstore-square" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;