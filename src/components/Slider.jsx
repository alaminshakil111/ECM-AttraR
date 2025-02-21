import mainSlider1 from "../assets/images/mainSlider1.jpg";
import mainSlider2 from "../assets/images/mainSlider2.jpg";
import mainSlider3 from "../assets/images/mainSlider3.jpg";


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
                    


                </div>
            </div>
        </div>
    );
};

export default Slider;