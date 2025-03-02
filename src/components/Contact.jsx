import React from "react";
import { RiPhoneFill } from "react-icons/ri";
import { RiEarthFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import Socail from "./UI/Socail";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="dark:bg-Primery bg-white min-h-[100vh] main-container w-full relative z-1 pb-10 py-20 md:pt-32 lg:pt-32 xl:py-32 sm:overflow-hidden lg:overflow-hidden">
      <h1 className="text-accent text-center">
        Contact Me<span className="dark:text-white text-Primery">. </span>
      </h1>
      <div>
        <div className="h-full w-full flex flex-col  mt-4 md:mt-8 md:flex-row justify-start md:gap-40">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" flex flex-col w-full"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="w-full h-ful *:rounded-md *:outline-accent"
            >
              <h3>
                Name<span className="text-accent text-sm">*</span>
              </h3>
              <input
                className="dark:bg-white bg-gray-600 w-full h-[40px] px-4 dark:text-Primery text-white"
                type="text"
                placeholder="your name"
              />
              <h3>
                Email<span className="text-accent text-sm">*</span>
              </h3>
              <input
                className="dark:bg-white bg-gray-600 w-full h-[40px] px-4 dark:text-Primery text-white"
                type="email"
                placeholder="your@gmail.com"
              />
              <h3>
                Message<span className="text-accent text-sm">*</span>
              </h3>
              <input
                className="dark:bg-white bg-gray-600 w-full h-[100px] px-4 dark:text-Primery text-white placeholder:justify-end placeholder:items-end placeholder:text-start"
                type="text"
                placeholder="your message"
              />
              <input
                type="submit"
                className="bg-success font-semibold text-xl mt-4 w-full h-[40px] cursor-pointer"
              />
            </form>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="md:w-[40%] w-full mt-6 md:mt-0 text-center md:text-start flex flex-col justify-center md:justify-start"
          >
            <h2 className="text-2xl">CONTACT DETAILS</h2>
            <div className="mt-4 *:mt-4">
              <div className="flex items-center gap-2 flex-col justify-center md:justify-start md:flex-row">
                <RiPhoneFill className="text-2xl text-accent" />
                <p>+885 97 30 56 747</p>
              </div>
              <div className="flex items-center gap-2 flex-col justify-center md:justify-start md:flex-row">
                <RiEarthFill className="text-2xl text-accent" />
                <p>www.chamreunvira.com</p>
              </div>
              <div className="flex items-center gap-2 flex-col justify-center md:justify-start md:flex-row">
                <MdEmail className="text-2xl text-accent" />
                <p>chamreunvira@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 flex-col justify-center md:justify-start md:flex-row">
                <RiFacebookFill className="text-2xl text-accent" />
                <p>Chamreun Vira</p>
              </div>
              <div className="flex items-center gap-2 flex-col justify-center md:justify-start md:flex-row">
                <RiUserLocationFill className="text-2xl text-accent" />
                <p>Phnum Phenh City</p>
              </div>
            </div>
            <h2 className="text-2xl mt-4">SOCIAL</h2>
            <div className="md:w-1/2 w-[100%] flex md:justify-start justify-center">
              <Socail />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[150px] md:h-[250px] rounded-md overflow-hidden mt-16">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284677.57715565845!2d104.72537628291832!3d11.57931763901341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e1!3m2!1sen!2skh!4v1731968055250!5m2!1sen!2skh"
          frameborder="1"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
