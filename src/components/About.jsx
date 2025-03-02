import React, { useState, useEffect } from "react";
import mainLogo from "../../src/assets/vira-main-log.png";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import SkillBar from "./UI/SkillBar";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./UI/Project";
import imgInstict from "../assets/instinct.jpg";
import imgRupp from "../assets/slider1.jpg";
import { IoSchoolSharp } from "react-icons/io5";
const AboutPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [showboard, setShowboard] = useState(false);
  const [modaldailog, setModaldailog] = useState("");

  const handleButtonClick = (text) => {
    setModaldailog(text);
    setShowboard(true);
  };

  const closeBoard = () => {
    setShowboard(false);
  };

  return (
    <section className="main-container min-h-screen dark:bg-Primery bg-white flex flex-col md:justify-between md:flex-row pb-10 py-20 md:pt-32 md:mb-10 lg:pt-32 lg:pb-10 xl:pb-10 xl:py-32 sm:overflow-hidden lg:overflow-hidden">
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="md:relative w-full md:w-[40%] dark:bg-gray-800 bg-gray-200 p-6 flex flex-col space-y-4 rounded-lg"
      >
        <h1 className="text-2xl font-bold text-accent">About Me</h1>
        <div className="flex justify-center">
          <img
            src={mainLogo}
            bg-gray-100
            alt="Vira's Logo"
            className="w-44 h-44 rounded-full object-cover border-2 mt-4 md:mt-8 border-accent"
          />
        </div>
        <div className="md:absolute bottom-6 left-0 w-full h-[250px] flex flex-col justify-between items-center px-6">
          <button
            onClick={() => handleButtonClick("education")}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Education
          </button>
          <button
            onClick={() => handleButtonClick("skills")}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Skills
          </button>
          <button
            onClick={() => handleButtonClick("about")}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => handleButtonClick("projects")}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Projects
          </button>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="w-full md:w-1/2 p-6"
      >
        <h2 className="text-3xl font-bold dark:text-white text-Primery mb-6">
          Welcome to My Portfolio
        </h2>
        <p className="dark:text-gray-300 text-gray-700 mb-4 indent-4">
          Hello and welcome! I'm{" "}
          <span className="font-bold text-accent">Chamreun Vira</span>, a
          passionate and creative web developer with a strong focus on building
          modern, responsive, and user-friendly websites. Whether it's crafting
          elegant user interfaces or solving complex technical challenges, I
          thrive on turning ideas into reality.
        </p>
        <p className="dark:text-gray-300 text-gray-700 mb-4 indent-4">
          On this page, you'll find everything you need to know about my
          journey, skills, and projects. Feel free to explore the sections below
          to learn more about my{" "}
          <span className="font-bold text-blue-500">education</span>,{" "}
          <span className="font-bold text-purple-500">technical skills</span>,
          and{" "}
          <span className="font-bold text-green-500">personal background</span>.
        </p>
        <p className="dark:text-gray-300 text-gray-700 indent-4">
          If you're interested in collaborating or have any questions, don't
          hesitate to reach out. Let's create something amazing together!
        </p>
      </div>
      {showboard && (
        <div className="main-container rounded-xl h-full ml-0 fixed inset-0 dark:bg-servicesBg bg-gray-600 bg-opacity-50 flex justify-end items-start pb-10 py-20 md:pt-32 md:mb-10 lg:pt-32 lg:pb-10 xl:pb-10 xl:py-32">
          <div className="dark:bg-Primery bg-white rounded-xl h-full w-full md:w-[60%] p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-accent">
                {modaldailog === "education"
                  ? "Education"
                  : modaldailog === "skills"
                  ? "Skills"
                  : modaldailog === "about"
                  ? "About Me"
                  : "Projects"}
              </h2>
              <button
                onClick={closeBoard}
                className="dark:text-gray-300 text-Primery hover:text-servicesBg dark:hover:text-white text-3xl"
              >
                &times;
              </button>
            </div>
            {modaldailog === "education" && (
              <div>
                <div>
                  <h3 className="text-xl flex gap-2 text-blue-700">
                    <IoSchoolSharp className="text-accent-hover text-2xl" />{" "}
                    Instict Intisute
                  </h3>
                  <p className="dark:text-gray-300 text-gray-700 indent-4">
                    My first school is instinct institute. I studied a short
                    training course for three months. With Teacher Mr.{" "}
                    <span className="font-semibold text-xl text-blue-500">
                      LONG MADETH
                    </span>
                    . And Instinct Institute also taught me a lot about major
                    font end developer. Thank you so much Teacher Madeth.{" "}
                  </p>
                  <img
                    src={imgInstict}
                    alt="instict"
                    className="mt-2 rounded-xl w-full h-[250px] md:h-[430px] lg:h-[520px] object-top"
                  />
                </div>
                <hr className="m-8 rounded-full dark:text-white text-black" />
                <div>
                  <h3 class="text-xl flex gap-2 text-red-700">
                    <IoSchoolSharp className="text-accent-hover text-2xl" />{" "}
                    RUPP University
                  </h3>
                  <p className="dark:text-gray-300 text-gray-700 indent-4">
                    My seconde school is RUPP University of Phnum Phenh.Sorry no
                    background because, I'm newbie at RUPP {":("}
                  </p>
                  <img
                    src={imgRupp}
                    alt="Rupp"
                    className="mt-2 rounded-xl object-center h-[250px] md:h-[430px] lg:h-[520px]"
                  />
                </div>
              </div>
            )}
            {modaldailog === "skills" && (
              <div className="space-y-4">
                <SkillBar
                  skill="HTML"
                  percentage={90}
                  color="from-blue-400 to-blue-600"
                  logo={<DiHtml5 className="text-2xl text-orange-500" />}
                />
                <SkillBar
                  skill="CSS"
                  percentage={70}
                  color="from-purple-400 to-purple-600"
                  logo={<DiCss3 className="text-2xl text-blue-500" />}
                />
                <SkillBar
                  skill="JavaScript"
                  percentage={50}
                  color="from-green-400 to-green-600"
                  logo={<DiJavascript className="text-2xl text-yellow-500" />}
                />
                <SkillBar
                  skill="Tailwind CSS"
                  percentage={50}
                  color="from-pink-400 to-pink-600"
                  logo={<SiTailwindcss className="text-2xl text-cyan-500" />}
                />
                <SkillBar
                  skill="Bootstrap"
                  percentage={60}
                  color="from-indigo-400 to-indigo-600"
                  logo={<DiBootstrap className="text-2xl text-purple-500" />}
                />
                <SkillBar
                  skill="React JS"
                  percentage={40}
                  color="from-yellow-400 to-yellow-600"
                  logo={<DiReact className="text-2xl text-blue-400" />}
                />
              </div>
            )}
            {modaldailog === "about" && (
              <div className="space-y-2 dark:text-gray-300 text-gray-700 indent-4">
                My name is{" "}
                <span className="text-xl text-accent-hover">Chamreun Vira</span>{" "}
                I am 18 years old. In my free time, I improve my skills and
                watch YouTube to learn more code. I study at{" "}
                <span className="font-semibold text-xl text-blue-700">
                  Instinct Institute
                </span>{" "}
                And{" "}
                <span className="text-red-600 font-semibold text-xl">
                  RUPP University{" "}
                </span>
                of Phnom Penh and my major is Software Engineering. In the
                future, I want to be a Web-Developer and Cyber-Security expert.
              </div>
            )}
            {modaldailog === "projects" && <Projects />}
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutPage;
