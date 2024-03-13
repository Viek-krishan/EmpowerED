import Header from "./Header";
import { achivements } from "../utils/Achivements";
import { TestimonialStack } from "../utils/Testimonial-card-stack";

const StudentProfile = () => {
  const DetailDisplay = ({ LeftText, RightText }) => {
    return (
      <div className="w-full flex justify-evenly m-2 text-black">
        <h1 className="w-1/3 text-wrap text-lg p-1 rounded-xl ">{LeftText}</h1>
        <h1 className="w-1/2 text-wrap font-extralight p-1 rounded-xl">
          {RightText}
        </h1>
      </div>
    );
  };

  const recentClassesCard = () => {
    return (
      <div className="flex items-center">
        <div className=" w-24 h-20 m-4 rounded-lg drop-shadow-xl   border">
          <img src="#" alt="DP" className="w-full h-full" />
        </div>
        <div>
          <h1 className="text-xl">Vivek Krishan</h1>
          <h3 className="text-lg text-gray-500">Subjects</h3>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-[#0c0b1e] pb-10 p-4 rounded-bl-[50px]">
        <Header />
      </div>

      <div className="Details flex flex-wrap text-black">
        {/*--------------- First Card ------------- */}
        <section className="ShortCard w-1/4 mt-10 ml-10  bg-white rounded-2xl drop-shadow-2xl  flex flex-col justify-center items-center hover:scale-[1.02] transition duration-300 ease-in-out">
          <div className="DP w-40 h-40 rounded-full m-4 flex overflow-hidden ">
            <img
              src="https://res.cloudinary.com/dur4pixxs/image/upload/f_auto,q_auto/reezm4lyzhvivmocqowj"
              alt=""
              className="w-full"
            />
          </div>

          <div className="m-2 mb-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-2  font-semibold">Vivek Krishan</h1>
            <h3 className="font-extralight ">Full Stack developer</h3>
          </div>
        </section>

        {/*--------------- Second Card ------------- */}
        <section className="All_Details w-3/5 h-fit m-10 bg-white rounded-2xl drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out   ">
          <div className="w-full">
            <DetailDisplay LeftText={"Full Name"} RightText={"Vivek Krishan"} />
            <DetailDisplay
              LeftText={"Email"}
              RightText={"vivekkrishan50@gmail.com"}
            />
            <DetailDisplay LeftText={"Phone"} RightText={"6202089501"} />
            <DetailDisplay
              LeftText={"Interests"}
              RightText={"Coding and Developement"}
            />
            <DetailDisplay LeftText={"Grade Level"} RightText={"University"} />
            <DetailDisplay
              LeftText={"Learning Style"}
              RightText={"A visual learner"}
            />
            <DetailDisplay LeftText={"Rating"} RightText={"4.5 / 5 stars"} />
            <DetailDisplay
              LeftText={"Preferred Class time"}
              RightText={"2pm - 5pm"}
            />
          </div>
        </section>

        {/*--------------- Third Card ------------- */}
        <section className="Achivements_And_Goals w-1/3 m-10 rounded-2xl bg-white drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out  ">
          <h1 className=" text-lg text-center p-5 font-medium">
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
        <section className="Testimonial w-2/5 h-80 m-10  ">
          <h1 className=" text-xl font-semibold mb-10 text-center">
            Mentors Feedback
          </h1>
          <TestimonialStack />
        </section>

        {/*--------------- Fifth Card ------------- */}
        <section className="Achivements_And_Goals w-1/3 m-10 rounded-2xl bg-white drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out  ">
          <h1 className=" text-lg text-center p-5 font-medium">
            Recent Teachers
          </h1>
          <div>{recentClassesCard()}</div>
        </section>
      </div>
    </div>
  );
};

export default StudentProfile;