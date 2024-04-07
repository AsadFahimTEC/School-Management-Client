import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Slider from "./Components/Slider/Slider";
import OurSupport from "./Components/OurSupport/OurSupport";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Slider></Slider>
            <OurSupport></OurSupport>
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;