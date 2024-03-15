import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = ({ bg, text1, text2 }) => {
  // const bgColor = bg || "black";
  // const bgColor = bg || "blue-100";
  // const bgColor = bg || "[#0c0b1e]";
  // const bgColor = bg || "[#1ad179]";
  // const bgColor = bg || "white";
  const bgColor = bg || "gray-100";
  const textCol1 = text1 || "black";
  const textCol2 = text2 || "gray-700";

  return (
    <div
      className={`bg-${bgColor} text-${textCol1} p-10 flex justify-evenly rounded-md`}
    >
      <section className="EmpowerED w-1/4 flex flex-col items-center ">
        <div className="Logo m-10">
          {/* <img src="" alt="Logo" className=""/> */}
          <h1 className="text-5xl text-center">EmpowerED</h1>
        </div>
        <div className="Social w-3/4 flex justify-evenly ">
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-200  hover:bg-[#1ad179] hover:text-black ease-in-out"
          >
            <Instagram />
          </Link>
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-200  hover:bg-[#1ad179] hover:text-black ease-in-out"
          >
            <Linkedin />
          </Link>
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-200  hover:bg-[#1ad179] hover:text-black ease-in-out"
          >
            <Twitter />
          </Link>
          <Link
            to={"#"}
            className="rounded-xl w-fit h-fit p-2 transition duration-200  hover:bg-[#1ad179] hover:text-black ease-in-out"
          >
            <Facebook />
          </Link>
        </div>
        <h3 className="mt-10 text-s ">cc 2024 EmpowerED</h3>
        <h3 className="text-s">EmpowerED is registered</h3>
      </section>
      <section className="Quick_Links pl-5 pt-10 flex flex-col border-l-2 border-gray-500">
        <h1 className="text-xl font-medium mb-5">Quick Links</h1>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Home
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2`}
        >
          Our Mentors
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2`}
        >
          Class Room
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2`}
        >
          Catagory
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2`}
        >
          Your Profile
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2`}
        >
          About/FAQ
        </Link>
      </section>
      <section className="Courses pl-5 pt-10 flex flex-col border-l-2 border-gray-500">
        <h1 className="text-xl font-medium mb-5">Courses</h1>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Classroom Courses
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Virtual Classroom
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          E-Learning Courses
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Video Courses
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Offline Courses
        </Link>
      </section>
      <section className="Community pl-5 pt-10 flex flex-col border-l-2 border-gray-500">
        <h1 className="text-xl font-medium mb-5">Community</h1>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Learners
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Partners
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Developers
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Transactions
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Blogs
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Teaching Centre
        </Link>
      </section>
      <section className="More pl-5 pt-10 flex flex-col border-l-2 border-gray-500">
        <h1 className="text-xl font-medium mb-5">More</h1>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Press
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Investors
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Terms
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Privacy
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Help
        </Link>
        <Link
          className={`m-2 text-lg font-extralight text-${textCol2} hover:underline decoration-black decoration-2 underline-offset-2 `}
        >
          Contact
        </Link>
      </section>
    </div>
  );
};

export default Footer;
