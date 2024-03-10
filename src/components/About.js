import Header from "./Header";
import { images } from "../utils/image";

const About = () => {
  const valueCard = (title, description) => {
    return (
      <div className="text-black bg-gray-100 h-48 p-5 rounded-xl hover:scale-105 duration-200 ease-in-out drop-shadow-lg hover:drop-shadow-2xl ">
        <h1 className="text-3xl font-semibold text-[#1ad179] mb-4 w-fit ">
          {title}
        </h1>
        <p className="font-normal text-lg mt-1 w- tracking-wide">
          {description}
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="Header bg-[#0c0b1e] pb-10 p-4 rounded-bl-[50px]">
        <Header />
      </div>

      <section className="Quote_and_illustration text-black flex text-2xl p-10 justify-center items-center mb-5">
        <div className="Title">
          <h1 className=" ml-10 text-6xl font-semibold pl-16">EmpowerED</h1>
          <p className="ml-10 text-lg pl-16">Welcomes you to</p>
          <h1 className=" w-2/1 ml-10 text-4xl  p-16 rounded-full tracking-wider">
            Experience the power of one-on-one online tutoring. We tailor our
            sessions to your specific needs and goals.
          </h1>
        </div>
        <div className="Image_Part justify-center items-center">
          <img
            src={images[5].url}
            alt="illustration"
            className="flex  w-[90%] mr-48  "
          />
        </div>
      </section>

      <section className="Our_Perspective flex justify-center items-center bg-blue-100  p-10 rounded-3xl ">
        <div>
          <div className="Title">
            <h1 className="flex font-serif text-[#0c0b1e] text-6xl font-bold w-[100%] justify-center items-center">
              Our Perspective
            </h1>
          </div>
          <div className="Description">
            <p className="text-black font-medium p-5 border-blue-500 text-center mt-5 rounded-b-3xl rounded-t-3xl">
              While online tutoring is typically offered for academic subjects,
              there's a growing niche for motivation coaching. <br></br>These
              online tutors act as personal cheerleaders, guiding you through
              goal setting, identifying roadblocks, and developing strategies to
              overcome them. <br></br>
              They can also teach valuable life skills like time management,
              organization, and stress management, all of which contribute to
              increased motivation and overall well-being. <br></br>So, if
              you're feeling stuck and lacking the drive to move forward,
              consider seeking help from an online motivation tutor they can
              equip you with the tools and mindset to reach your full potential.
            </p>
          </div>
          <div className="3E flex justify-between ml-16 mr-16 mt-8 text-black">
            <div className="Envision">
              <h1 className="bg-white p-9 text-2xl rounded-xl text-center hover:scale-105 duration-200 ease-in-out drop-shadow-lg hover:drop-shadow-2xl">
                <h1 className=" font-bold text-[#1ad178]">Envision</h1>
                <h3> the future of education</h3>
              </h1>
            </div>
            <div className="Enable">
              <h1 className="bg-white p-9 text-2xl rounded-xl text-center hover:scale-105 duration-200 ease-in-out drop-shadow-lg hover:drop-shadow-2xl">
                <h1 className=" font-bold text-[#1ad178] ">Enable</h1> access to
                quality education
              </h1>
            </div>
            <div className="Empower">
              <h1 className="bg-white p-9 text-2xl rounded-xl text-center hover:scale-105 duration-200 ease-in-out drop-shadow-lg hover:drop-shadow-2xl">
                <h1 className="text-[#1ad178] font-bold">Empower</h1>the
                educational ecosystem
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="Our_Value text-white bg-[#0c0b1e] items-center justify-center flex p-8">
        <div>
          <div>
            <h1 className="m-3 text-center text-5xl font-medium">Our Values</h1>
          </div>
          <div>
            <h1 className="m-3 text-center text-lg font-medium">
              We are, what we believe....
            </h1>
          </div>
        </div>
      </div>

      <div className="Values_Card">
        <div className="w-full flex flex-wrap justify-center items-center mt-20 ">
          <div className="w-1/3 m-5">
            {valueCard(
              "Learner First",
              "Learners are at the core of everything that we do. Each EmpowerED product is created and developed with the sole objective of supporting the learner lifecycle at all stages."
            )}
          </div>
          <div className="w-1/3 m-5">
            {valueCard(
              " Lead with Empathy",
              "We recognize that it is vital to try and understand different people's perspectives and comprehend situations from a range of points of view."
            )}
          </div>
          <div className="w-1/3 m-5">
            {valueCard(
              "Light The Passion, Live The Dreamt",
              "Passion is what makes our vision possible - to see it, own it, and do it"
            )}
          </div>
          <div className="w-1/3 m-5">
            {valueCard(
              "Lightning speed",
              "At EmpowerED, we are driven to deliver solutions with speed and efficiency without ever compromising on quality."
            )}
          </div>
        </div>
      </div>

      <div className="Founding_Members text-black p-6 ">
        <h1 className=" w-full text-center font-semibold text-5xl mb-5 underline decoration-[#1ad179]">
          Founding Members
        </h1>
        <div className="flex items-center justify-center p-5">
          <div className="Image p-5">
            <img src={images[0].url} alt="illustration" className="w-[100%]" />
          </div>
          <div className="Title&Description text-black  text-4xl p-5 ml-5 w-[100%] text-center tracking-wider">
            <h1>Vivek Krishan</h1>
            <h1>Kshitij Saxena</h1>
            <h1>Akanksha Sinha</h1>
            <h1>Ruchi Kumari</h1>
            <p className="text-base tracking-normal">
              We've got this! With everyone's contributions so far, we're on a
              fantastic track. We have all the talent and knowledge needed to
              knock this project out of the park. Let's keep up the open
              communication and collaboration – that's our secret weapon. I'm
              confident that by working together, we'll deliver a project that's
              not only impressive but sets the bar high.
            </p>
          </div>
        </div>
      </div>

      {/* bg-gray-200 */}
      {/* bg-gray-200 */}
      {/* bg-[#1ad178] */}
    </div>
  );
};
export default About;
