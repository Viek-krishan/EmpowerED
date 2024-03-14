import { useEffect } from "react";
import Buttons from "../utils/Buttons";
import { ThreeDCard } from "../utils/ThreeDCard";
import Header from "./Header";
import ProfileCard from "./profileCard";
import { images } from "../utils/image";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const navigate = useNavigate();
  const mentorProfile = () => {
    navigate("/teacher-profile/123");
  };

  return (
    <div className="bg-[#f7f9fb] ">
      <div className="BannerDiv h-40 m-16 mt-10 bg-[#1ad178] rounded-3xl flex justify-evenly items-center">
        <section>
          <h1 className="ml-5 font-extralight text-white ">
            Home | Our Mentors
          </h1>
          <h1 className="ml-5 text-2xl font-semibold text-white mb-0 m-5 ">
            EmpowerED has the best qualified
          </h1>
          <h1 className="ml-5 text-2xl font-semibold text-white ">Mentors ..</h1>
        </section>
        <section>
          <img src={images[2].url} alt="img" className="w-52" />
        </section>
      </div>
      <div className="flex flex-wrap justify-evenly m-10 mb-0">
        <ThreeDCard callTo={mentorProfile} />
        <ThreeDCard callTo={mentorProfile} />
        <ThreeDCard callTo={mentorProfile} />
        <ThreeDCard callTo={mentorProfile} />
        <ThreeDCard callTo={mentorProfile} />
        <ThreeDCard callTo={mentorProfile} />
      </div>
      {/* <Buttons text={"testing"} toCall={testing}/> */}
    </div>
  );
};

export default Teachers;
