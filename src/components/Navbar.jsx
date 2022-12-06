import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className=" shadow-sm shadow-[#6366f1] font-bold fixed w-full h-[80px] flex justify-between items-center px-4  text-[white]">
      <div>
      <h1 className="text-2xl">GA || GİZEM ALTAY</h1>
        
      </div>
      {/*menu*/}
      <ul className="hidden md:flex font-bold text-2xl">
        <li>
          <span>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          </span>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      
      </ul>

      {/* */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobil menü*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/**social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/gizemaltay06/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/gizem2506"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e0e0e]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://medium.com/@1gizemaltay"
              target="_blank"
            >
              Medium <FaMedium size={30} />
            </a>
          </li>

          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e84118]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.google.com/intl/tr/gmail/about/"
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
