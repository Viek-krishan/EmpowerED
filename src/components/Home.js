import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { images } from "../utils/image";
import Lottie from "lottie-web";

const Home = () => {
  const whiteBoard = useRef(null);
  const videoChat = useRef(null);
  const chatting = useRef(null);

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
      container: chatting.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../utils/ChattingAnimationSVG.json"),
    });
  }, []);

  return (
    <div className="Home w-full h-fit  ">
      <Header />
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
            <div className="Buttons w-fit flex flex-col  ">
              <button className="bg-blue-400 w-40 h-10 text-2xl mr-24 rounded-2xl">
                Register
              </button>
            </div>
            <div className="w-fit items-center  top-0 ">
              <button className="bg-blue-400 w-40  h-10 text-2xl  rounded-2xl">
                As Guest
              </button>
            </div>
          </div>
        </section>
        <section className="Img flex items-center  absolute top-56 left-[55vw]">
          <img src={images[0].first.url} alt="Illustration" className="w-96 " />
        </section>
      </div>

      <div className="Animated_Description text-black">
        <div className="WhiteBoard w-full h-[90vh] flex items-center ">
          <section className="Animation w-1/2" ref={whiteBoard}></section>
          <section className="Description w-1/2">
            <h2 className="text-3xl text-center font-bold">
              White Board Facility
            </h2>
            <p className="text-lg font-extralight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore nesciunt sequi, possimus eum corporis reprehenderit ut
              neque nulla accusantium dignissimos excepturi odio, alias magni!
              Beatae praesentium id labore unde voluptate!{" "}
            </p>
          </section>
        </div>
        <div className="VideoChat w-full h-[90vh] flex items-center">
          <section className="Description w-1/2 m-5">
            <h2 className="text-3xl text-center font-bold">
              White Board Facility
            </h2>
            <p className="text-lg font-extralight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore nesciunt sequi, possimus eum corporis reprehenderit ut
              neque nulla accusantium dignissimos excepturi odio, alias magni!
              Beatae praesentium id labore unde voluptate!{" "}
            </p>
          </section>
          <section className="Animation w-1/2 " ref={videoChat}></section>
        </div>
        <div className="Chatting w-full h-[90vh] flex justify-evenly items-center ">
          <section className="Animation w-1/3" ref={chatting}></section>
          <section className="Description w-1/2">
            <h2 className="text-3xl text-center font-bold">
              White Board Facility
            </h2>
            <p className="text-lg font-extralight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore nesciunt sequi, possimus eum corporis reprehenderit ut
              neque nulla accusantium dignissimos excepturi odio, alias magni!
              Beatae praesentium id labore unde voluptate!{" "}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
