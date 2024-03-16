import { useNavigate } from "react-router-dom";
import { images } from "../utils/image";
import { useState } from "react";

const Register = () => {
  // All Variables declaration for this components
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    username: "",
    gradeLevel: "",
    learningStyle: "",
    startTime: "",
    endTime: "",
    currentStatus: "",
    // interest,
    age: Number,
    phone: Number,
    board: "",
    password: "",
  });

  // All function defination
  const NavigateToLogIn = () => {
    navigate("/login");
  };

  let name, value;
  const HandelInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const Register = async (e) => {
    e.preventDefault();
    try {
      const Response = await fetch(
        "http://localhost:3000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        }
      ).then((res) => {
        console.log(res);
        alert("Register successful. Login to enter");
      });
    } catch (e) {
      console.log(e);
    }
  };

  //  Input component for creating form
  const FormInput = ({ field, value, placeholder }) => {
    return (
      <div className="w-72 m-5">
        <label
          for={`${value}`}
          className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
        >
          {`${value}`}
        </label>
        <input
          type={`${field}`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
          placeholder={`${placeholder}`}
          name={`${value}`}
          value={""}
          onChange={HandelInputs}
          required
        />
      </div>
    );
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
            <FormInput
              placeholder={"userId123"}
              field={"text"}
              value={"username"}
            />
            <FormInput
              placeholder={"john sinha"}
              field={"text"}
              value={"full name"}
            />
            <FormInput
              placeholder={"userEmail@gmail.com"}
              field={"email"}
              value={"email"}
            />
            <FormInput
              placeholder={"Graduated"}
              field={"text"}
              value={"grade level"}
            />
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
            <FormInput
              placeholder={"visual learner"}
              field={"text"}
              value={"Learning Style"}
            />
            <FormInput
              placeholder={"Working"}
              field={"text"}
              value={"current status"}
            />
            <FormInput
              placeholder={"Programing"}
              field={"text"}
              value={"interests"}
            />
            <FormInput placeholder={"21"} field={"Number"} value={"age"} />
            <FormInput
              placeholder={"1236549870"}
              field={"phone"}
              value={"phone"}
            />
            <h1 className="text-lg text-center font-semibold w-full">
              Prefered Timing
            </h1>
            <div className="flex">
              <div className="relative">
                <FormInput
                  placeholder={"14:00"}
                  field={"text"}
                  value={"Starting Time"}
                />
                <select className="h-fit w-fit rounded-md absolute top-16 right-6 bg-[#f7f9fb]">
                  <option value={"am"}>am</option>
                  <option value={"pm"}>pm</option>
                </select>
              </div>
              <div className="relative">
                <FormInput
                  placeholder={"20:00"}
                  field={"text"}
                  value={"Ending Time"}
                />
                <select className="h-fit w-fit rounded-md absolute top-16 right-6 bg-[#f7f9fb]">
                  <option value={"am"}>am</option>
                  <option value={"pm"}>pm</option>
                </select>
              </div>
            </div>
          </form>

          <div className="Terms&Condition flex justify-center">
            <input type="checkbox" id="agree" className="m-2" />
            <h3 className="text-center">I agreed to the terms & conditions</h3>
          </div>

          <div className="RegisterButton flex justify-center">
            <button
              className="bg-blue-400 w-72 mx-5 my-3 py-2 text-white text-lg rounded-2xl"
              onClick={Register}
            >
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
