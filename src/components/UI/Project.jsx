import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const projects = [
  {
    title: "Project 1",
    image: "../../src/assets/project1.png",
    link: "https://ch-vira.vercel.app/",
  },
  {
    title: "Project 2",
    image: "../../src/assets/project2.png",
    link: "https://viraacadamy.vercel.app/",
  },
  {
    title: "Project 3",
    image: "../../src/assets/project3.png",
    link: "https://kat0zy.vercel.app/",
  },
  {
    title: "Project 4",
    image: "../../src/assets/project4.png",
    link: "https://caculatorbyvira.vercel.app/",
  },
];

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextProject = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-accent">My Projects</h3>
      <div className="relative w-full">
        <div className="flex flex-col items-center gap-y-8">
          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow">
            <img
              src={projects[slideIndex].image}
              alt={projects[slideIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">
                {projects[slideIndex].title}
              </span>
            </div>
            <a
              href={projects[slideIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full"
            >
              <FaExternalLinkAlt className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={prevProject}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
            >
              &lt;
            </button>
            {projects[slideIndex].title}
            <button
              onClick={nextProject}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
