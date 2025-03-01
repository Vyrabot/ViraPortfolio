import React, { useEffect } from "react";
import HireBtn from "./UI/MainBtn";
import Socail from "./UI/Socail";
import Aos from "aos";
import "aos/dist/aos.css";
import Stat from "./Stat";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="dark:bg-Primery bg-white min-h-screen w-full relative z-0 pb-10 py-20 md:pt-32 lg:pt-36 xl:py-40 sm:overflow-hidden lg:overflow-hidden">
      <div className="main-container z-10 flex flex-col items-center md:flex-row-reverse justify-center w-full h-full gap-4">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="w-full h-full flex justify-center mb-4 md:mb-0 md:justify-end items-end md:items-center"
        >
          <div className="relative bg-gray-700 w-[205px] h-[205px] sm:w-[255px] sm:h-[255px] md:w-[305px] md:h-[305px] lg:w-[405px] lg:h-[405px] flex items-center justify-center rounded-full overflow-hidden after:content-[''] after:absolute after:inset-x-[100px] after:-inset-y-12 after:bg-accent after:animate-spin hover:after:inset-[-1px] hover:after:bg-white">
            <img
              src="../../src/assets/vira-main-log.png"
              alt="logo"
              className="z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover"
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="dark:text-white text-Primery flex flex-col md:items-start items-center md:justify-center h-full w-full text-center md:text-left xl:pt-10"
        >
          <h2 className="dark:text-white text-Primery text-lg sm:text-xl">
            Front End Developer
          </h2>
          <h1 className="md:text-4xl lg:text-5xl sm:text-2xl mt-2 dark:text-white text-Primery">
            Hello, I'm <br />
            <span className="dark:text-accent text-accent sm:text-2xl md:text-4xl lg:text-5xl mt-2">
              Chamreun Vira
            </span>
          </h1>
          <p className="mt-2 md:mt-3 dark:text-gray-400 text-Primery text-sm sm:text-base max-w-[600px]">
            Welcome to my web developer portfolio! I'm Chamreun Vira, a skilled
            and creative web developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I've worked on a variety of
            web projects, ranging from personal blogs to e-commerce platforms.
          </p>
          <div className="mt-2">
            <HireBtn name="Hire Me" />
          </div>
          <div className="mt-4">
            <Socail />
          </div>
        </div>
        <Stat />
      </div>
    </section>
  );
}

export default Home;
