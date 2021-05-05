import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function NavBar() {
  const [isOpen, setisOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setisOpen(true);
  }, [isMobile]);

  return (
    <header className="bg-gray-700">
      <nav className="hidden md:block">
        <div className="flex-1 flex justify-around">
          <NavLink
            to="/"
            exact
            activeClassName="text-green-500"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-300 text-4xl font-bold cursive tracking-widest"
          >
            Alzin
          </NavLink>

          <ul className="hidden md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <NavLink
              to="/post"
              activeClassName="text-green-500"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-300"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-green-500"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-300"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-green-500"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-300"
            >
              About Me!
            </NavLink>
          </ul>
        </div>
      </nav>
      <nav className="flex justify-around text-center lg:hidden md:hidden">
        <ul className="md:flex md:items-center md:w-auto w-full">
          <NavLink
            to="/"
            exact
            activeClassName="text-green-500"
            className="text-white text-4xl cursive tracking-widest"
          >
            Alzin
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-green-500"
            className="text-white md:p-4 py-3 px-0 block"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-green-500"
            className="text-white md:p-4 py-3 px-0 block"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-green-500"
            className="text-white md:p-4 py-3 px-0 block"
          >
            About Me!
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
