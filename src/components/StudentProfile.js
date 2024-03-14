import Header from "./Header";
import { achivements } from "../utils/Achivements";
import { TestimonialStack } from "../utils/Testimonial-card-stack";

const StudentProfile = () => {
  const DetailDisplay = ({ LeftText, RightText }) => {
    return (
      <div className="w-full flex justify-evenly m-2 text-black">
        <h1 className="w-1/3 text-wrap text-lg p-1 rounded-xl ">{LeftText}</h1>
        <h1 className="w-1/2 text-wrap font-light p-1 pl-5 border-b-2 border-[#1ad179]">
          {RightText}
        </h1>
      </div>
    );
  };

  const recentClassesCard = () => {
    return (
      <div className="flex items-center">
        <div className=" w-24 h-24 m-4 drop-shadow-xl rounded-full overflow-hidden border">
          <img
            src="https://res.cloudinary.com/dur4pixxs/image/upload/f_auto,q_auto/reezm4lyzhvivmocqowj"
            alt="DP"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="ml-10">
          <h1 className="text-xl">Vivek Krishan</h1>
          <h3 className="text-lg text-gray-500">Subjects</h3>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="Details flex flex-wrap text-black pb-20">
        {/*--------------- First Card ------------- */}
        <section className="ShortCard w-1/4 mt-10 ml-24 text-white  bg-[#0c0b1e] border-2 rounded-2xl drop-shadow-3xl  flex flex-col justify-center items-center hover:scale-[1.02] transition duration-300 ease-in-out">
          <div className="DP w-40 h-40 rounded-full m-4 flex overflow-hidden ">
            <img
              src="https://res.cloudinary.com/dur4pixxs/image/upload/f_auto,q_auto/reezm4lyzhvivmocqowj"
              alt=""
              className="w-full"
            />
          </div>

          <div className="m-2 mb-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-2 pt-5 font-semibold tracking-wide border-t-2 border-[#1ad179]">
              Vivek Krishan
            </h1>
            <h3 className="font-extralight tracking-wider ">
              Full Stack developer
            </h3>
          </div>
        </section>

        {/*--------------- Second Card ------------- */}
        <section className="All_Details w-3/5 h-fit m-10 ml-16 p-10 bg-white rounded-2xl drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out  border-2 border-[#0c0b1e] ">
          <div className="w-full">
            <DetailDisplay
              LeftText={"Full Name :"}
              RightText={"Vivek Krishan"}
            />
            <DetailDisplay
              LeftText={"Email :"}
              RightText={"vivekkrishan50@gmail.com"}
            />
            <DetailDisplay LeftText={"Phone :"} RightText={"6202089501"} />
            <DetailDisplay
              LeftText={"Interests :"}
              RightText={"Coding and Developement"}
            />
            <DetailDisplay
              LeftText={"Grade Level :"}
              RightText={"University"}
            />
            <DetailDisplay
              LeftText={"Learning Style :"}
              RightText={"A visual learner"}
            />
            <DetailDisplay LeftText={"Rating :"} RightText={"4.5 / 5 stars"} />
            <DetailDisplay
              LeftText={"Preferred Class time :"}
              RightText={"2pm - 5pm"}
            />
          </div>
        </section>

        {/*--------------- Third Card ------------- */}
        <section className="Achivements_And_Goals w-1/3 my-10 mx-36 p-8 rounded-2xl bg-white drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out border-2 border-[#0c0b1e] ">
          <h1 className=" text-lg text-center border-b-2 mb-5 font-medium">
            All Achivements
          </h1>
          <div>
            {achivements.map((item) => {
              return (
                <DetailDisplay
                  LeftText={item.field}
                  RightText={item.achivement}
                />
              );
            })}
          </div>
        </section>

        {/*--------------- Fouth Card ------------- */}
        <section className="Achivements_And_Goals w-1/3 p-5 my-10 mx-20 h-fit text-white rounded-2xl bg-[#0c0b1e] drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out border-2 ">
          <h1 className=" text-lg text-center p-2 font-medium border-b-2 border-[#1ad179]">
            Recent Teachers
          </h1>
          <div>{recentClassesCard()}</div>
        </section>

        {/*--------------- Fifth Card ------------- */}
        <section className="Testimonial h-80 w-1/2 p-10 mx-96">
          <h1 className=" text-xl font-semibold mb-14 text-center border-b-2">
            Mentors Feedback
          </h1>
          <TestimonialStack />
        </section>
      </div>
    </div>
  );
};

export default StudentProfile;
