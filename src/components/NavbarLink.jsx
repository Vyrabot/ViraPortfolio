import React from "react";
import { Link, useResolvedPath } from "react-router-dom";

function NavbarLink() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const { pathname } = useResolvedPath();

  return (
    <>
      {links.map((item, index) => (
        <div key={index} className="py-7 px-3 dark:text-accent text-Primery">
          <Link
            to={item.path}
            className={`${
              item.path === pathname
                ? "dark:text-accent text-accent border-b-2 border-accent"
                : ""
            } hover:text-accent-hover text-xl`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </>
  );
}

export default NavbarLink;
