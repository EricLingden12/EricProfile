"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const menuRef = useRef();
  const pathname = usePathname();

  const openMenu = () => {
    menuRef.current.style.transform = "translateX(-100%)";
    menuRef.current.style.transition = "transform 1s";
  };

  const closeMenu = () => {
    menuRef.current.style.transform = "translateX(100%)";
    menuRef.current.style.transition = "transform 1.5s";
  };

  // Function to check if a link is active
  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <>
      <nav className="bg-white z-50 fixed w-full">
        <div className="container mx-auto flex justify-between items-center p-3">
          <p className="text-2xl font-bold cursor-pointer">ERIC LINGDEN</p>

          <ul className="items-center text-lg md:flex hidden lg:gap-9 md:gap-5 bg-white shadow-lg py-3 lg:px-10 md:px-5 rounded-4xl">
            <li>
              <Link
                className={`font-ovo font-bold ${
                  isActive("/") ? "text-red-500" : ""
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`font-ovo font-bold eric ${
                  isActive("/about") ? "text-red-500" : ""
                }`}
                href="/about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className={`font-ovo font-bold ${
                  isActive("/skills") ? "text-red-500" : ""
                }`}
                href="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className={`font-ovo font-bold ${
                  isActive("/projects") ? "text-red-500" : ""
                }`}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`font-ovo font-bold ${
                  isActive("/contactme") ? "text-red-500" : ""
                }`}
                href="/contactme"
              >
                Contact me
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-5">
            <button onClick={openMenu} className="block md:hidden">
              <MdMenu className="text-3xl cursor-pointer" />
            </button>
          </div>
        </div>
        {/* -------- mobile Menu ---------- */}
        <ul
          ref={menuRef}
          className="w-60 fixed right-0 bg-black text-white text-xl h-screen md:hidden flex flex-col space-y-3 pl-4 transition-transform duration-300 transform translate-x-full"
        >
          <div onClick={closeMenu} className="flex justify-end mt-3 mr-3">
            <MdClose className="text-4xl cursor-pointer" />
          </div>
          <li>
            <Link
              onClick={closeMenu}
              className={`font-ovo font-bold ${
                isActive("/") ? "text-red-500" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className={`font-ovo font-bold ${
                isActive("/about") ? "text-red-500" : ""
              }`}
              href="/about"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className={`font-ovo font-bold ${
                isActive("/skills") ? "text-red-500" : ""
              }`}
              href="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className={`font-ovo font-bold ${
                isActive("/projects") ? "text-red-500" : ""
              }`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className={`font-ovo font-bold ${
                isActive("/contactme") ? "text-red-500" : ""
              }`}
              href="/contactme"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
