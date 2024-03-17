import { useNavigate } from "react-router-dom";
import { images } from "../utils/image";
import { useState } from "react";

const LogIn = () => {
  // Utility variables
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // utility Functions
  const NavigateToRegister = () => {
    navigate("/register");
  };

  const HandelInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  const LogInUser = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "AccessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY2ZjczZmVhNWIzYjMxMzRiOTI4ZTYiLCJlbWFpbCI6InZpdmVrQGdtYWlsLmNvbSIsImlhdCI6MTcxMDY4NjI5NSwiZXhwIjoxNzEwNzcyNjk1fQ.2L4b4c9RCbxF2kNAfCTPRSAAd4oS-QoKIt-w_rjoVN4; RefreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY2ZjczZmVhNWIzYjMxMzRiOTI4ZTYiLCJpYXQiOjE3MTA2ODYyOTUsImV4cCI6MTcxMTU1MDI5NX0.sbnQtUDmmajoAe5SsCs6Yn_DUjAZeXPfdOeG-3u4nOY"
      );

      // const raw = JSON.stringify({
      //   username: "vivek",
      //   password: "papa",
      // });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(user),
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/v1/user/login", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="text-black flex ">
        <section className="Illustration_side w-1/2 m-10">
          <div className="flex flex-col items-center mb-5 p-10 ">
            <h1 className="text-4xl text-center font-bold w-full tracking-wider">
              Welcome to <br></br>EmpowerED <br></br>An Online Learning Platform
            </h1>
          </div>
          <div className=" flex justify-center p-5  ">
            <img src={images[3].url} alt="student" className="w-1/2" />
          </div>
        </section>
        <section className="Form_side  w-1/2 m-10">
          <div className="Google_signIn mt-5 w-full flex justify-center items-center ">
            <h3 className="font-medium text-center w-72 border border-gray-400 m-5 px-10 py-5 rounded-lg bg-white hover:bg-[#1ad179] hover:scale-110 hover:drop-shadow-xl transition duration-150 ease-in-out cursor-pointer">
              Sign up with google
            </h3>
          </div>

          <h1 className="text-center mt-2 mb-5 text-lg">
            ---Login in with your Registered User Id---
          </h1>
          <form className="Form  flex flex-col justify-center items-center">
            <div className="w-72 m-5 ">
              <label
                for="email"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Email / User name
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani hover:drop-shadow-lg duration-150 ease-in-out"
                placeholder="empower.ed@company.com"
                name="username"
                value={user.username}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="w-72 m-5">
              <label
                for="password"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani hover:drop-shadow-lg duration-150 ease-in-out"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={HandelInputChange}
                required
              />
            </div>
          </form>

          <div className="Button flex justify-center items-center">
            <button
              className="bg-white w-72 mx-5 my-3 py-2 text-black text-lg border border-gray-400 rounded-2xl drop-shadow-2xl hover:bg-[#1ad179] duration-150 ease-in-out hover:scale-110"
              onClick={LogInUser}
            >
              Log In
            </button>
          </div>
          <div className="Sign_UP_Options">
            <h3 className="text-center">
              Don't have an account ?{" "}
              <button className="text-blue-400" onClick={NavigateToRegister}>
                Sign in
              </button>{" "}
            </h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default LogIn;
