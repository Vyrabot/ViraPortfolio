import React from "react";
import ServicesCard from "./UI/ServicesCard";
import { MdWeb } from "react-icons/md";
import Aos from "aos";
import { useEffect } from "react";
import { TbWorld } from "react-icons/tb";
import "aos/dist/aos.css";
import { DiGitMerge } from "react-icons/di";
import { AiFillHdd } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
function Services() {
  useEffect(() => {
    Aos.init();
  }, []);
  const dataCard = [
    {
      icon: <MdWeb />,
      name: "Web Design",
      title:
        "Web design refers to the design of websites that are dispalyed on the internet contact me to build web......",
    },
    {
      icon: <TbWorld />,
      name: "Web Developer",
      title:
        "Web development is the building and maintenance of websites.it's the work that happens behind the scenes to...",
    },
    {
      icon: <FaMoneyBillTrendUp />,
      name: "Degital Markating",
      title:
        "At a high level, degital marketing refers to advertising delivered through degital channels such as..",
    },
    {
      icon: <AiFillHdd />,
      name: "Web Hosting",
      title:
        "Every Website that you visit consists of a domain name and a web host. The easiest way to picture it is so think of...",
    },
    {
      icon: <FaApple />,
      name: "App Development",
      title:
        "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as...",
    },
    {
      icon: <DiGitMerge />,
      name: "IOT Project",
      title:
        'The internet of Things (loT) describes the network of physical object-"things"-that are embedded with sensores...',
    },
  ];
  return (
    <section className="dark:bg-Primery bg-white min-h-[100vh] main-container w-full relative z-1 pb-10 py-20 md:pt-32 lg:pt-32 xl:py-32">
      <div data-aos="fade-in" data-aos-duration="3000" className="text-center">
        <h1 className="text-accent">
          What i Do<span className="text-white">.</span>
        </h1>
        <p className="dark:text-gray-400 text-gray-900">
          I offer the full spectrum of services to help org's work better.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
      >
        {dataCard.map((items, index) => {
          return <ServicesCard {...items} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Services;
