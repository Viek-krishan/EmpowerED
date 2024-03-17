import { useNavigate } from "react-router-dom";
import { images } from "../utils/image";
import { useState } from "react";
import ApiError from "../../../BackEnd/src/utils/ApiError";

const Register = () => {
  // All Variables declaration for this components
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);
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
    passkey: "",
    avatar: null,
  });

  // All function defination
  const NavigateToLogIn = () => {
    navigate("/login");
  };

  const HandelInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  const HandelImage = (event) => {
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = (e) => setAvatar(e.target.result);
    console.log(event.target.files);
    setAvatar(event.target.files[0]);
    console.log(avatar);
  };

  function createFormData(user, avatar) {
    const formData = new FormData();

    // Add user data as key-value pairs
    for (const [key, value] of Object.entries(user)) {
      // Handle potential undefined values within user object
      if (value !== undefined) {
        console.log(key, value);
        formData.append(key, value);
      } else {
        console.warn(
          `Skipping key "${key}" in user object due to undefined value.`
        );
      }
    }

    // Add avatar as a file object (with error handling)
    if (avatar) {
      if (!avatar.type.match("image/*")) {
        console.error("Invalid file type. Please select an image.");
        return null; // Return null to indicate an error (optional)
      }
      formData.append("avatar", avatar);
    }
    // console.log(formData);
    return formData;
  }

  // const Register = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = createFormData(user, avatar);
  //     user.avatar = avatar;

  //     console.log(user);

  //     const Response = await fetch(
  //       "http://localhost:3000/api/v1/user/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     ).then((res) => {
  //       console.log(res);
  //       // alert(res.message);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const Register = async () => {
    try {
      const formdata = await createFormData(user, avatar);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/v1/user/register", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  };

  //  Input component for creating form
  // const FormInput = ({ field, value, placeholder }) => {
  //   return (
  //     <div className="w-72 m-5">
  //       <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
  //         {`${value}`}
  //       </label>
  //       <input
  //         type={`${field}`}
  //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
  //         placeholder={`${placeholder}`}
  //         name={`${value}`}
  //         value={user[value]}
  //         onChange={HandelInputChange}
  //         required
  //       />
  //     </div>
  //   );
  // };

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
            <div className="UserName w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                User name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="username"
                value={user.username}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="fullName w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Full Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="fullName"
                value={user.fullName}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="email w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="email"
                value={user.email}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="Phone w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Phone
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="phone"
                value={user.phone}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="GradeLevel w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Grade level
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="gradeLevel"
                value={user.gradeLevel}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="Board w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Board
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                name="board"
                onChange={HandelInputChange}
              >
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
            <div className="learningStyle w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Learning Style
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="learningStyle"
                value={user.learningStyle}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="currentStatus w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Current Status
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="currentStatus"
                value={user.currentStatus}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="age w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Age
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="age"
                value={user.age}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="password w-72 m-5">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="vivek123"
                name="passkey"
                value={user.passkey}
                onChange={HandelInputChange}
                required
              />
            </div>

            <h1 className="text-lg text-center font-semibold w-full">
              Prefered Timing
            </h1>
            <div className="flex">
              <div className="relative">
                <div className="StartingTime w-72 m-5">
                  <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                    Starting Time
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                    placeholder="vivek123"
                    name="startTime"
                    value={user.startTime}
                    onChange={HandelInputChange}
                    required
                  />
                </div>
                <select className="h-fit w-fit rounded-md absolute top-16 right-6 bg-[#f7f9fb]">
                  <option value={"am"}>am</option>
                  <option value={"pm"}>pm</option>
                </select>
              </div>
              <div className="relative">
                <div className="EndTiming w-72 m-5">
                  <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                    End Timing
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                    placeholder="vivek123"
                    name="endTime"
                    value={user.endTime}
                    onChange={HandelInputChange}
                    required
                  />
                </div>
                <select className="h-fit w-fit rounded-md absolute top-16 right-6 bg-[#f7f9fb]">
                  <option value={"am"}>am</option>
                  <option value={"pm"}>pm</option>
                </select>
              </div>
            </div>
            <div className="ImageInput w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Choose Profile Pic
              </label>
              <input
                type="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                accept="image/*"
                name="password"
                value={user.password}
                onChange={HandelImage}
                required
              />
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
