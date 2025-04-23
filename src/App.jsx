import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css
import './assets/css/main.css';

// component
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import HelpContactSec from './components/HelpContactSec';
import Footermain from './components/Footermain';
import SubFooterSec from './components/subFooter';

// All Pages
import Home from "./pages/Home";
import About from "./pages/About";

import Services from "./pages/Services";
import CreateWebsite from "./pages/CreatWebsite";
import DevelopWebsite from "./pages/DevelopWebsite";
import HiringDeveloper from "./pages/HiringDeveloper";
import Testimonials from "./pages/Testimonials";
import Products from "./pages/Products";
import ProductDetailsSec from "./pages/ProductDetails";
import CheckOutSec from "./pages/CheckOut";
import CartSec from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="sticky top-0 z-9">
          <TopNavbar />
          <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/create-website" element={<CreateWebsite />} />
        <Route path="/services/develop-website" element={<DevelopWebsite />} />
        <Route path="/services/hiring-developer" element={<HiringDeveloper />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ProductDetails" element={<ProductDetailsSec />} />
        <Route path="/CheckOut" element={<CheckOutSec />} />
        <Route path="/Cart" element={<CartSec />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

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

      <div className="subFooterBgColor bg-white text-black ">
        <div className="container px-2 sm:px-0 ">
          <div className="wrapper">
            <SubFooterSec />
          </div>
        </div>
      </div>


    </Router>
  );
}

export default App;
