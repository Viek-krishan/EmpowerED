import { Link } from "react-router-dom";
import Buttons from "../utils/Buttons";

const Header = () => {

   const LogInTesting = () => {
     console.log("Login testing");
   };

  return (
    <div className="Header w-100% h-14 flex justify-around items-center bg-[#0c0b1e]">
      <section className="Logo">
        <div>
          <Link to={`/`}>
            {/* <img src="#" alt="Logo" /> */}
            <h1 className="">EmpowerED</h1>
          </Link>
        </div>
      </section>
      <section className="Navigator w-1/3">
        <nav className="w-full flex justify-around">
          <Link
            to={`/`}
            className="font-extralight text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out"
          >
            Home
          </Link>

          <Link
            to={`/teacher`}
            className="font-extralight text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out"
          >
            Teachers
          </Link>
          <Link
            to={`#`}
            className="font-extralight text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out"
          >
            Catagory
          </Link>
          <Link
            to={`#`}
            className="font-extralight text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out"
          >
            Your Profile
          </Link>
          <Link
            to="/about"
            className="font-extralight text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out"
          >
            About/FAQ
          </Link>
        </nav>
      </section>
      <section className="LogIn">
        <div>
          <Buttons text={"Log In"} size="xl" toCall={LogInTesting} />
        </div>
      </section>
    </div>
  );
};

export default Header;
