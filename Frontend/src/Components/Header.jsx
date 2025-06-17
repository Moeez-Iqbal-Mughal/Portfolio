import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import DownloadResumeButton from "./DownloadResumeButton";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 50;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`bg-custom-5 w-full fixed top-0 left-0 z-50 shadow-xl p-4 transition-transform duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to="/" onClick={closeMenu}>
          <h1 className="font-lobster text-orange-500 text-2xl sm:text-3xl">
            Moeez Iqbal
          </h1>
        </NavLink>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
        <nav
          className={`fixed top-0 right-0 w-64 h-72 bg-custom-5 shadow-2xl z-50 rounded-lg lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex justify-end p-4 lg:hidden">
            <button
              onClick={closeMenu}
              className="text-white focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <ul className="h-full flex flex-col items-center justify-center gap-6 text-white text-lg lg:text-base lg:flex-row lg:gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-orange-500 font-semibold ${
                  isActive ? "text-orange-500" : ""
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-orange-500 font-semibold ${
                  isActive ? "text-orange-500" : ""
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `hover:text-orange-500 font-semibold ${
                  isActive ? "text-orange-500" : ""
                }`
              }
              onClick={closeMenu}
            >
              Project
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-orange-500 font-semibold ${
                  isActive ? "text-orange-500" : ""
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <DownloadResumeButton className="w-full max-w-xs" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
