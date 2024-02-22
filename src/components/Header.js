import { Link } from "react-router-dom";

const Header = () => {
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
        <button className="bg-blue-500 w-24 h-8 rounded-xl hover:scale-110 hover:bg-blue-800 transition duration-200 ease-in-out">
          Log In
        </button>
      </section>
    </div>
  );
};

export default Header;
