import { Link, useLocation, useNavigate } from "react-router-dom";
import Buttons from "../utils/Buttons";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const LogInTesting = () => {
    console.log("Login testing");
  };

  const LogInPage = () => {
    navigate("/login");
  };

  return (
    <div className="Header w-100% h-16 p-7 flex justify-around items-center bg-[#0c0b1e]">
      <section className="Logo">
        <div>
          <Link to={`/`}>
            {/* <img src="#" alt="Logo" /> */}
            <h1 className="text-3xl p-5">EmpowerED</h1>
          </Link>
        </div>
      </section>
      <section className="Navigator w-2/3">
        <nav className="w-full flex justify-around">
          <Link
            to={`/`}
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "/"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to={`/teacher`}
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "/teacher"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Our Mentors
          </Link>
          <Link
            to={`/class`}
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "/class"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Class Room
          </Link>
          <Link
            to={`#`}
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "#"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Catagory
          </Link>
          <Link
            to={`/profile/student`}
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "/profile/student"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Your Profile
          </Link>
          <Link
            to="/about"
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "/about"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            About/FAQ
          </Link>
        </nav>
      </section>
      <section className="LogIn">
        <div className="flex">
          <Buttons text={"Sign Up"} size="light" toCall={LogInPage} />
          <Buttons text={"Log In"} size="light" toCall={LogInPage} />
        </div>
      </section>
    </div>
  );
};

export default Header;
