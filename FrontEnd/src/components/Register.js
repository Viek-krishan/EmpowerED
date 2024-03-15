import { useNavigate } from "react-router-dom";
import { images } from "../utils/image";

const Register = () => {
  const navigate = useNavigate();
  const NavigateToLogIn = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="text-black flex bg-[#f7f9fb]">
        <section className="Illustration_side w-1/2 m-10">
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-center">EmpowerED</h1>
            <h1 className="text-4xl text-center font-bold w-60 ">
              Welcome to EmpowerED Online Learning Platform
            </h1>
          </div>
          <div className=" flex justify-center m-5 ">
            <img src={images[4].url} alt="student" className="w-2/3" />
          </div>
        </section>
        <section className="Form_side w-1/2">
          <div className="Google_signIn mt-5 w-full flex justify-center items-center">
            <h3 className="ffont-medium text-center w-72 border border-gray-400 m-5 px-10 py-5 rounded-lg bg-white hover:bg-[#1ad179] hover:scale-110 hover:drop-shadow-xl transition duration-150 ease-in-out cursor-pointer">
              Register with google
            </h3>
          </div>

          <h1 className="text-center m-10 text-lg">--- Register ---</h1>

          <form className="Form flex flex-wrap justify-center">
            <div className="Email w-72 m-5">
              <label
                for="email"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="UserName w-72 m-5">
              <label
                for="username"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                User name
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="Age w-72 m-5">
              <label
                for="email"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Age
              </label>
              <input
                type="age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="Board w-72 m-5">
              <label
                for="email"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Board
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani">
                <option value={""}>Choose your Board</option>
                <option value={"CBSE"}>CBSE</option>
                <option value={"ISC/ICSE"}>ISC/ICSE</option>
                <option value={"State board"}>State board</option>
                <option value={"IGCSE"}>Price: High-Low</option>
                <option value={"NIOS"}>NIOS</option>
                <option value={"International Baccalaureate"}>
                  International Baccalaureate
                </option>
              </select>
            </div>
            <div className="Password w-72 m-5">
              <label
                for="password"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="Password"
                required
              />
            </div>
          </form>

          <div className="Terms flex justify-center">
            <input type="checkbox" id="agree" className="m-2" />
            <h3 className="text-center">I agreed to the terms & conditions</h3>
          </div>

          <div className="Button flex justify-center">
            <button className="bg-blue-400 w-72 mx-5 my-3 py-2 text-white text-lg rounded-2xl">
              Register
            </button>
          </div>
          <div className="Sign_UP_Options">
            <h3 className="text-center">
              Don't have an account ?{" "}
              <button className="text-blue-400" onClick={NavigateToLogIn}>
                Log In
              </button>{" "}
            </h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
