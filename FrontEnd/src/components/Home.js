import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { images } from "../utils/image";
import Lottie from "lottie-web";
import Buttons from "../utils/Buttons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const whiteBoard = useRef(null);
  const videoChat = useRef(null);
  const chatting = useRef(null);
  const learningPlatform = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    Lottie.loadAnimation({
      container: whiteBoard.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../utils/WhiteBoardAnimatedSVG.json"),
    });
    Lottie.loadAnimation({
      container: videoChat.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../utils/VideoChatAnimationSVG.json"),
    });
    Lottie.loadAnimation({
      container: learningPlatform.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../utils/LearningPlatform.json"),
    });
    Lottie.loadAnimation({
      container: chatting.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../utils/ChattingAnimationSVG.json"),
    });
  }, []);

  const scrollToTeachers = () => {
    navigate("/teacher");
  };

  return (
    <div className="Home w-full h-fit  ">
      <div className="Home_Details h-[80vh] bg-[#0c0b1e] rounded-bl-[100px] border border-[#0c0b1e]">
        <section className="Text h-[50vh] m-10 mt-16 ">
          <h1 className="text-4xl relative left-32">EmpowerED</h1>
          <p className="font-extralight text-2xl w-2/5 my-20 left-32 relative top-4 ">
            Traditionally, education has revolved around physical classrooms,
            textbooks, and face-to-face interactions. However, the digital age
            has ushered in a new era of learning, with online tuition emerging
            as a powerful force.
          </p>
          <div className="flex w-fit top-8 relative ml-32">
            <div>
              <Buttons text="Register" size={"xl"} />
            </div>
            <div>
              <Buttons text={"Guest"} size={"xl"} />
            </div>
          </div>
        </section>
        <section className="Img flex items-center  absolute top-56 left-[55vw]">
          <img src={images[0].url} alt="Illustration" className="w-96 " />
        </section>
      </div>

      <div className="Motivational_text text-black flex justify-evenly items-center">
        <div className=" flex flex-col items-center m-5">
          <h3 className="bg-blue-100 font-semibold text-right w-full px-4 py-2 rounded-xl">
            __Never stop learning
          </h3>
          <h1 className="text-[80px] font-bold w-[50vw] mt-0 m-10 ">
            Grow up your skills by online courses with EmpowerED
          </h1>
        </div>
        <div className="LearningPlatform w-1/2" ref={learningPlatform}></div>
      </div>

      <div className="Animated_Description text-black">
        <div className="WhiteBoard w-full h-[90vh] flex items-center mt-5 p-10 ">
          <section className="Animation w-1/2" ref={whiteBoard}></section>
          <section className="Description w-1/2">
            <h2 className="text-3xl text-center font-bold">
              Digital White Board Facility..
            </h2>
            <p className="text-lg font-extralight m-5">
              An online whiteboard is a digital version of the classic
              whiteboard you might find in a classroom or meeting room. It
              provides a virtual space where you can collaborate with others in
              real-time over the internet.<br></br> <br></br>Here's what we can
              do -
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Brainstorm ideas visually using sticky notes, text boxes, and
              drawings.
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Create mind maps and flowcharts.
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Sketch out designs and prototypes.
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Take notes and annotate documents.
            </p>
          </section>
        </div>
        <div className="VideoChat w-full h-[90vh] flex items-center p-10">
          <section className="Description w-1/2 m-5">
            <h2 className="text-3xl text-center font-bold ">Live Video Chat</h2>
            <p className="text-lg font-extralight pt-10  text-center">
              Online live video chat for study is a way to connect with other
              students virtually in real-time for a more focused and social
              study experience.<br></br>A Face-to-Face interaction between
              teachers and students is the essential part of education.
            </p>
          </section>
          <section className="Animation w-1/2 " ref={videoChat}></section>
        </div>
        <div className="Chatting w-full h-[90vh] flex justify-evenly items-center p-10 ">
          <section className="Animation w-1/3" ref={chatting}></section>
          <section className="Description w-1/2">
            <h2 className="text-3xl text-center font-bold">Live Text Chat</h2>
            <p className="text-lg font-extralight pt-10  text-center">
              Live chat feature allows participants to send text messages and
              links to other participants during a video call. Chat messages are
              visible to everyone in the call, and can be used to communicate
              with other participants without interrupting the call.
            </p>
          </section>
        </div>
      </div>

      <div className="ScrollToTeachersPage text-white flex justify-center">
        <Buttons text={"Scroll to Teachers"} toCall={scrollToTeachers} />
      </div>
    </div>
  );
};

export default Home;
