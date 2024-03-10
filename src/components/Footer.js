import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = ({ bg, text1, text2 }) => {
  const bgColor = bg || "white";
  const textCol1 = text1 || "black";
  const textCol2 = text2 || "gray-700";

  return (
    <div className={`bg-${bgColor} text-${textCol1} p-10 flex justify-evenly `}>
      <section className="EmpowerED w-1/4 flex flex-col items-center ">
        <div className="Logo m-10">
          {/* <img src="" alt="Logo" className=""/> */}
          <h1 className="text-3xl text-center">EmpowerED</h1>
        </div>
        <div className="Social w-3/4 flex justify-evenly ">
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-150 ease-in-out hover:bg-blue-100 "
          >
            <Instagram />
          </Link>
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-150 ease-in-out hover:bg-blue-100 "
          >
            <Linkedin />
          </Link>
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-150 ease-in-out hover:bg-blue-100 "
          >
            <Twitter />
          </Link>
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-150 ease-in-out hover:bg-blue-100 "
          >
            <Facebook />
          </Link>
        </div>
        <h3 className="mt-10 text-lg ">cc 2024 EmpowerED</h3>
        <h3 className="">EmpowerED is registered</h3>
      </section>
      <section className="Courses">
        <h1 className="text-xl text-center font-medium">Courses</h1>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Classroom courses
        </h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Virtual classroom courses
        </h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          E-learning courses
        </h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          video Courses
        </h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Offline Courses
        </h3>
      </section>
      <section className="Community">
        <h1 className="text-xl text-center font-medium">Community</h1>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Learners</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Partners</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Developers
        </h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Transactions
        </h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Blog</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Teaching Center
        </h3>
      </section>
      <section className="Quick_Links  flex flex-col">
        <h1 className="text-xl text-center font-medium">Quick Links</h1>
        <Link className={`m-5 text-lg font-extralight text-${textCol2}`}>Home</Link>
        <Link className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Our Mentors
        </Link>
        <Link className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Catagory
        </Link>
        <Link className={`m-5 text-lg font-extralight text-${textCol2}`}>
          Your Profile
        </Link>
        <Link className={`m-5 text-lg font-extralight text-${textCol2}`}>
          About
        </Link>
      </section>
      <section className="More">
        <h1 className="text-xl text-center font-medium">More</h1>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Press</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Investor</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Terms</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Privacy</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Help</h3>
        <h3 className={`m-5 text-lg font-extralight text-${textCol2}`}>Contact</h3>
      </section>
    </div>
  );
};

export default Footer;
