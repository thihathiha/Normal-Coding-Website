import { NavLink } from "react-router";
import { useState } from "react";
import logo2 from "../images/logo2.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="mb-16 flex h-[50px] w-full items-center justify-between px-8 lg:h-[60px] lg:px-20">
        <img src={logo2} className="w-[100px] lg:w-[150px]" />

        {/* Mobile View  */}
        <button onClick={toggleMenu} className="cursor-pointer lg:hidden">
          &#9776;
        </button>

        <ul
          className={`fixed top-0 right-0 h-screen w-[80%] bg-black pt-2 text-gray-400 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-[100%]"} transform duration-300 ease-in-out`}
        >
          <div className="mt-2 mb-6 flex items-center justify-between px-4">
            <h2 className="text-2xl text-gray-200">Category</h2>
            <button onClick={toggleMenu} className="cursor-pointer text-3xl">
              &#215;
            </button>
          </div>

          <li>
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `inline-block w-full border-b border-gray-600 py-4 pl-4 ${isActive ? "bg-gray-900" : "bg-transparent"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/learning-path"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `inline-block w-full border-b border-gray-600 py-4 pl-4 ${isActive ? "bg-gray-900" : "bg-transparent"}`
              }
            >
              Learning Path
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `inline-block w-full border-b border-gray-600 py-4 pl-4 ${isActive ? "bg-gray-900" : "bg-transparent"}`
              }
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `inline-block w-full border-b border-gray-600 py-4 pl-4 ${isActive ? "bg-gray-900" : "bg-transparent"}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `inline-block w-full border-b border-gray-600 py-4 pl-4 ${isActive ? "bg-gray-900" : "bg-transparent"}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `inline-block w-full border-b border-gray-600 py-4 pl-4 ${isActive ? "bg-gray-900" : "bg-transparent"}`
              }
            >
              Our Projects
            </NavLink>
          </li>
          <small className="absolute bottom-0 left-[50%] translate-x-[-50%] transform">
            Normal Coding
          </small>
        </ul>

        {/* Desktop View  */}
        <ul className="hidden gap-20 text-sm tracking-wide text-gray-400 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-gray-200" : "hover:text-gray-300"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/learning-path"
              className={({ isActive }) =>
                `${isActive ? "text-gray-200" : "hover:text-gray-300"}`
              }
            >
              Learning Path
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                `${isActive ? "text-gray-200" : "hover:text-gray-300"}`
              }
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${isActive ? "text-gray-200" : "hover:text-gray-300"}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `${isActive ? "text-gray-200" : "hover:text-gray-300"}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? "text-gray-200" : "hover:text-gray-300"}`
              }
            >
              Our Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
