import Buttons from "../utils/Buttons";
import { ListOfQuailification } from "../utils/ListOfQualification";
import DetailDisplay from "./DetailComponent";
import Header from "./Header";

const TeachersProfile = () => {
  return (
    <div>
      <div className="bg-[#0c0b1e] pb-10 p-4 rounded-bl-[50px]">
        <Header />
      </div>
      <div className="bg-[#f7f9fb]">
        <div className="Image_And_Bio bg-[#f7f9fb] flex justify-center items-center">
          <section className="Title_And_Bio w-1/2 text-black  flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center m-6">Vivek Krishan</h1>
            <p className="Sort_Bio w-2/3">
              Highly motivated and results-oriented web developer with [number]
              years of experience building.
            </p>
            <Buttons text={"Connect"} />
          </section>
          <section className=" w-1/2 flex justify-center items-center">
            <div className="w-72 h-72 rounded-full m-10 flex overflow-hidden ">
              <img
                src="https://res.cloudinary.com/dur4pixxs/image/upload/f_auto,q_auto/reezm4lyzhvivmocqowj"
                alt=""
                className="w-full"
              />
            </div>
          </section>
        </div>
        <section className="Quailification m-auto text-black p-4 w-2/3 rounded-2xl bg-white">
          <h1 className="text-3xl font-semibold text-center">About Mentor</h1>
          <div className="AllDetails w-full flex flex-col  justify-evenly">
            <h1 className="text-xl font-semibold mx-32">Quailification</h1>
            <div>
              {ListOfQuailification.map((item) => {
                return (
                  <DetailDisplay
                    key={item.id}
                    LeftText={item.section}
                    RightText={item.answer}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="Demo_Section">
          
        </section>
      </div>
    </div>
  );
};

export default TeachersProfile;
