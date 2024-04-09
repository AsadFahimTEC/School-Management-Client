import { Animation } from "react-easy-animations";
import Typewriter from "react-text-writer";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div className="mt-8 bg-violet-800">
      <section className="z-0 h-[700px] text-green-200 pt-10  lg:mt-0 md:mt-10">
        <div className="container mt-10 flex flex-col p-5  justify-center items-center  mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-row lg:justify-between">
          <div className="flex flex-col  justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">
            <TypeAnimation
              sequence={[
                "AmarSchool Nexus ",
                1000,
                "AmarSchool Portal ",
                1000,
                "AmarSchool Empower",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3em", display: "inline-block" }}
              repeat={Infinity}
            />
            <p className="mt-6 text-blue-400 mb-0 text-lg sm:mb-12 ">
              <Animation
                type="zoomIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
              ></Animation>
              <Typewriter
                text={[
                  " Amarschool Nexus represents a comprehensive and interconnected platform designed to serve as the central hub for all aspects of school management. It integrates various functionalities such as student information management, attendance tracking, academic scheduling, communication channels, and administrative tasks into a cohesive system. With its intuitive interface and robust features, Amarschool Nexus streamlines operations, fosters collaboration among stakeholders, and empowers educators to focus on student success.",
                ]}
                speed={40}
                isLoop
                loopDelay={15000}
                ClassName="text-white mb-5 pb-5"
              />
              <br className="hidden md:inline lg:hidden" />
            </p>
          </div>
          <div className="flex  sm:p-10  items-center justify-center mt-8  pt-16 lg:mt-0 h-56 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://i.ibb.co/F35W3JQ/school-uniform-removebg-preview.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
