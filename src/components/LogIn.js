import { images } from "../utils/image";
import Buttons from "../utils/Buttons";

const LogIn = () => {
  return (
    <div className="text-black flex ">
      <section className="Illustration_side w-1/2 m-10">
        <div className="flex flex-col items-center">
          <h1 className="text-lg text-center">EmpowerED</h1>
          <h1 className="text-4xl text-center font-bold w-60 ">
            Welcome to EmpowerED Online Learning Platform
          </h1>
        </div>
        <div className=" flex justify-center m-5 ">
          <img src={images[3].url} alt="student" className="w-1/2" />
        </div>
      </section>
      <section className="Form_side">
        <div className="Google_signIn border border-gray-400 mt-20 m-5 px-10 py-5 rounded-lg">
          <h3 className="font-medium">Sign in with google</h3>
        </div>

        <h1 className="text-center m-10 text-lg">
          ---Sign in with your user Id ---
        </h1>
        <form className="Form">
          <div className="w-72 m-5">
            <label
              for="email"
              className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
            >
              Email / User name
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              placeholder="john.doe@company.com"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              placeholder="Password"
              required
            />
          </div>
        </form>

        <div className="Terms flex">
          <input type="checkbox" id="agree" className="m-2"/>
          <h3 className="text-center">I agreed to the terms & conditions</h3>
        </div>

        <div className="Button">
          <button className="bg-blue-400 w-72 mx-5 my-3 py-2 text-white text-lg rounded-2xl">
            Log In
          </button>
        </div>
        <div className="Sign_UP_Options">
          <h3 className="text-center">
            Don't have an account ?{" "}
            <button className="text-blue-400">Sign in</button>{" "}
          </h3>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
