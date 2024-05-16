import { images } from "../utils/image";
import ValueCard from "./About_components";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const NavigateToFAQ = () => {
    navigate("/FAQ");
  };

  return (
    <div>
      <section className="Header"></section>
      <section className="landing_quote_and_illustration">
        <div className="text-black flex text-2xl p-10 justify-center items-center mb-5">
          <div className=" w-[75%]">
            <h1 className="ml-10 text-6xl font-semibold pl-16">EmpowerED</h1>
            <p className="ml-10 pt-5 text-lg pl-16">Welcomes you to</p>
            <h1 className=" w-2/1 ml-10 text-2xl  p-16 rounded-full tracking-wider">
              Experience the power of one-on-one online tutoring. We tailor our
              sessions to your specific needs and goals.
            </h1>
            <div className=" flex items-center m-10">
              <Link
                to={"/faqs"}
                className="text-black font-semibold text-xl text-center ml-16 w-1/5 border-2 border-[#1ad179] p-3 rounded-2xl hover:bg-[#1ad179] duration-150 ease-in-out drop-shadow-2xl hover:scale-110 "
              >
                FAQs
              </Link>
              <Link
                to={"/enquiry"}
                className="text-black font-semibold text-xl text-center ml-16 w-1/5 border-2 border-[#1ad179] p-3 rounded-2xl hover:bg-[#1ad179] duration-150 ease-in-out drop-shadow-2xl hover:scale-110 "
              >
                Enquire Us
              </Link>
            </div>
          </div>
          <div className=" justify-center items-center w-[25%]">
            <img
              src={images[5].url}
              alt="illustration"
              className="flex  w-[90%] mr-48  "
            />
          </div>
        </div>
      </section>
      <section className="our_perspective h-[60vh] ">
        <div className="flex justify-center items-center bg-blue-100  p-10 rounded-3xl ">
          <div>
            <div>
              <h1 className="flex font-serif text-[#0c0b1e] text-4xl font-bold w-[100%] justify-center items-center">
                Our Perspective
              </h1>
            </div>
            <div>
              <p className="text-black font-medium p-5 border-blue-500 text-center mt-5 rounded-b-3xl rounded-t-3xl">
                While online tutoring is typically offered for academic
                subjects, there's a growing niche for motivation coaching.{" "}
                <br></br>These online tutors act as personal cheerleaders,
                guiding you through goal setting, identifying roadblocks, and
                developing strategies to overcome them. <br></br>
                They can also teach valuable life skills like time management,
                organization, and stress management, all of which contribute to
                increased motivation and overall well-being. <br></br>So, if
                you're feeling stuck and lacking the drive to move forward,
                consider seeking help from an online motivation tutor they can
                equip you with the tools and mindset to reach your full
                potential.
              </p>
            </div>
            <div className="flex justify-between ml-16 mr-16 mt-8 text-black ">
              <div>
                <h1 className="bg-white p-9 text-xl rounded-xl text-center shadow-sm shadow-black">
                  <h1 className=" font-bold text-[#1ad178]">Envision</h1> the
                  future of education
                </h1>
              </div>
              <div>
                <h1 className="bg-white p-9 text-xl rounded-xl text-center shadow-sm shadow-black">
                  <h1 className=" font-bold text-[#1ad178] ">Enable</h1> access
                  to quality education
                </h1>
              </div>
              <div>
                <h1 className="bg-white p-9 text-xl rounded-xl text-center shadow-sm shadow-black">
                  <h1 className="text-[#1ad178] font-bold">Empower</h1>the
                  educational ecosystem
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_values">
        <div className="text-white bg-[#0c0b1e] items-center justify-center flex p-8">
          <div>
            <div>
              <h1 className="m-3 text-center text-5xl font-medium">
                Our Values
              </h1>
            </div>
            <div>
              <h1 className="m-3 text-center text-lg font-medium">
                We are, what we believe....
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="value_card flex flex-col justify-center items-center ">
        <div className="flex p-5 w-4/5">
          <ValueCard
            title={"Learner First"}
            description={
              "Learners are at the core of everything that we do. Each EmpowerED product is created and developed with the sole objective of supporting the learner lifecycle at all stages."
            }
          />
          <ValueCard
            title={"Lead with Empathy"}
            description={
              "We recognize that it is vital to try and understand different people's perspectives and comprehend situations from a range of points of view."
            }
          />
        </div>
        <div className="flex p-5 w-4/5 ">
          <ValueCard
            title={"Light The Passion, Live The Dream"}
            description={
              "Passion is what makes our vision possible - to see it, own it, and do it."
            }
          />
          <ValueCard
            title={"Lightning speed"}
            description={
              "At EmpowerED, we are driven to deliver solutions with speed and efficiency without ever compromising on quality"
            }
          />
        </div>
      </section>
      <section className="founding_members ">
        <div className="Founding members text-black p-6 ">
          <div className="flex justify-center items-center ">
            <h1 className=" w-full text-center font-semibold text-5xl mb-5 underline decoration-[#1ad179]">
              Founding Members
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <div className=" p-5">
            <img src={images[0].url} alt="illustration" className="w-[100%]" />
          </div>
          <div className="text-black  text-4xl p-5 ml-5 w-[100%] text-center tracking-wider">
            <h1>Vivek Krishan</h1>
            <h1>Kshitij Saxena</h1>
            <h1>Akanksha Sinha</h1>
            <h1>Ruchi Kumari</h1>
            <p className="text-base tracking-normal mt-10">
              We've got this! With everyone's contributions so far, we're on a
              fantastic track. We have all the talent and knowledge needed to
              knock this project out of the park. Let's keep up the open
              communication and collaboration that's our secret weapon. I'm
              confident that by working together, we'll deliver a project that's
              not only impressive but sets the bar high.
            </p>
          </div>
        </div>
      </section>
      <section className="faq_button">
        <div>
          <div className="text-black flex justify-center items-center">
            <h1>Want to know more, Jump on to our FAQ section</h1>
          </div>
          <div className=" flex justify-center items-center m-10">
            <Link
              to={"/faqs"}
              className="text-black font-semibold text-xl text-center w-1/5 border-2 border-[#1ad179] p-3 rounded-2xl hover:bg-[#1ad179] duration-150 ease-in-out drop-shadow-2xl hover:scale-110 "
            >
              FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* bg-gray-200 */}
      {/* bg-gray-200 */}
      {/* bg-[#1ad178] */}
    </div>
  );
};
export default About;
