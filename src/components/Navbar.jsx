import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import DarkModLightMod from "./UI/DarkModLightMod";
import { RiGithubFill } from "react-icons/ri";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full shadow py-4 text-white z-50 dark:bg-Primery bg-white">
        <div className="main-container flex justify-between items-center">
          <div>
            <h1 className="text-accent cursor-pointer text-2xl md:text-3xl lg:text-4xl font-bold">
              Portfolio<span className="dark:text-white text-Primery">.</span>
            </h1>
          </div>
          <ul className="hidden md:flex items-center gap-7">
            <NavbarLink />
          </ul>
          <div className="hidden md:flex md:justify-between md:items-center md:gap-2">
            <DarkModLightMod />
            <a href="https://github.com/Vyrabot">
              <RiGithubFill className="dark:text-white text-black text-xl md:text-2xl lg:text-4xl cursor-pointer" />
            </a>
          </div>
          <div
            className="text-3xl cursor-pointer md:hidden block"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? (
              <RiCloseLine className="dark:text-white text-Primery" />
            ) : (
              <RiMenu3Fill className="dark:text-white text-Primery" />
            )}
          </div>
        </div>
        <div
          className={`fixed top-[64px] left-0 w-1/2 h-full dark:shadow shadow dark:bg-Primery bg-white transition-transform duration-500 ease-in-out transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <ul className="flex flex-col items-center py-10 space-y-6">
            <NavbarLink onClick={() => setOpen(false)} />
            <li className="mt-6"></li>
          </ul>
          <div className="absolute flex items-center bottom-20 ">
            <DarkModLightMod />
            <a href="https://github.com/Vyrabot">
              <RiGithubFill className="dark:text-white text-black text-xl md:text-2xl lg:text-4xl cursor-pointer" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
