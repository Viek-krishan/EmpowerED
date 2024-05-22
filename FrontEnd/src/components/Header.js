import { Link, useLocation, useNavigate } from "react-router-dom";
import Buttons from "../utils/Buttons";
import { useState } from "react";
import { FilePenLine } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const LogInTesting = () => {
    console.log("Login testing");
  };

  const LogInPage = () => {
    navigate("/login");
  };
  const NavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="Header w-100% h-24 flex justify-around items-center bg-[#0c0b1e]">
      <section className="Logo w-1/4">
        <div>
          <Link to={`/`}>
            {/* <img src="#" alt="Logo" /> */}
            <h1 className="text-3xl w-full text-center">EmpowerED</h1>
          </Link>
        </div>
      </section>
      <section className="Navigator w-1/2 flex justify-evenly">
        <nav className="w-full flex justify-evenly">
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
          {/* <Link
            to={`/class`}
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "/class"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Class Room
          </Link> */}
          {/* <Link
            to={`#`}
            className={`font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out 
            ${
              location.pathname === "#"
                ? "underline decoration-[#1ad179] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Catagory
          </Link> */}
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
      <section className="LogIn w-1/4">
        <div className="flex justify-evenly items-center">
          {/* <Buttons text={"Log In"} size="light" toCall={LogInPage} /> */}
          {/* {console.log(location)} */}
          <div>
            <Link
              to={"/login"}
              className={`text-black bg-gray-100 w-20 h-10 m-4 rounded-xl flex justify-center items-center hover:scale-110 transition duration-150 ease-in-out hover:bg-[#1ad179] drop-shadow-lg hover:drop-shadow-2xl hover:text-black hover:font-medium 
            ${location.pathname === "/login" ? " bg-[#1ad179] " : ""}`}
            >
              Login
            </Link>
          </div>
          <div>
            <Link
              to={"/register"}
              className={`text-black bg-gray-100 w-20 h-10 m-4 rounded-xl flex justify-center items-center hover:scale-110 transition duration-150 ease-in-out hover:bg-[#1ad179] drop-shadow-lg hover:drop-shadow-2xl hover:text-black hover:font-medium
            ${location.pathname === "/register" ? " bg-[#1ad179] " : ""}`}
            >
              Register
            </Link>
          </div>
          {/* <Buttons text={"Register"} size="light" toCall={NavigateToRegister} /> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
