import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Slider from "./Components/Slider/Slider";
import OurSupport from "./Components/OurSupport/OurSupport";
import Gallery from "./Components/Gallery/Gallery";
import Weather from "./Components/Weather/Weather";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Slider></Slider>
            <OurSupport></OurSupport>
            <Gallery></Gallery>
            <Weather></Weather>
           {/* <div className="min-h-screen">
           <Outlet></Outlet>
           </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;