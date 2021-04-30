import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    console.log(!isOpen);
    setisOpen(!isOpen);
  };

  return (
    <header className="bg-gray-700">
      <div className="flex-1 flex justify-around">
        <NavLink
          to="/"
          exact
          activeClassName="text-white"
          className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-500 text-4xl font-bold cursive tracking-widest"
        >
          Alzin
        </NavLink>
        <button
          type="button"
          className="block lg:hidden md:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen && (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
            {!isOpen && (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
        <nav className="flex justify-around text-center hidden md:block">
          <ul
            className={
              isOpen
                ? "md:flex md:items-center md:w-auto w-full"
                : "hidden md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
            }
          >
            <NavLink
              to="/post"
              activeClassName="text-red-100 bg-red-700"
              className={
                isOpen
                  ? "md:p-4 py-3 px-0 text-red-200 hover:text-green-500 block"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-500"
              }
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-red-100 bg-red-700"
              className={
                isOpen
                  ? "md:p-4 py-3 px-0 text-red-200 hover:text-green-500 block"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-500"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-red-100 bg-red-700"
              className={
                isOpen
                  ? "md:p-4 py-3 px-0 text-red-200 hover:text-green-500 block"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-500"
              }
            >
              About Me!
            </NavLink>
          </ul>
        </nav>
      </div>
      <nav className="flex justify-around text-center lg:hidden md:hidden">
        <ul
          className={
            isOpen
              ? "md:flex md:items-center md:w-auto w-full"
              : "hidden md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
          }
        >
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className={
              isOpen
                ? "md:p-4 py-3 px-0 text-red-200 hover:text-green-500 block"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-500"
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className={
              isOpen
                ? "md:p-4 py-3 px-0 text-red-200 hover:text-green-500 block"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-500"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className={
              isOpen
                ? "md:p-4 py-3 px-0 text-red-200 hover:text-green-500 block"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-500"
            }
          >
            About Me!
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
