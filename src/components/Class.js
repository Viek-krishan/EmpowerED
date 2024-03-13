import { useState } from "react";
import Buttons from "../utils/Buttons";
import { images } from "../utils/image";
import ConnectMemberCard from "./ConnectedMemberCard";
import Header from "./Header";

const Class = () => {
  const [globalChats, setGlobalChats] = useState([]);

  const Chats = () => {
    return (
      <div>
        <h1>Chats</h1>
        <h1>Chats</h1>
        <h1>Chats</h1>
        <h1>Chats</h1>
        <h1>Chats</h1>
        <h1>Chats</h1>
      </div>
    );
  };

  return (
    <>
      <div className="text-white bg-gray-800">
        <div className="bg-[#0c0b1e] pb-10 p-4 rounded-bl-[50px]">
          <Header />
        </div>
        <div className="Heading">
          <h1 className="text-3xl mx-10 text-center">Class Room</h1>
        </div>
        <div className="WhiteBoard_And_Members w-screen h-screen flex justify-center relative [&>*:nth-child(3)]:bottom-20 [&>*:nth-child(3)]:left-24 [&>*:nth-child(3)]:bg-white ">
          <div className="WhiteBoard w-[70vw] h-[90vh] mt-5  rounded-3xl bg-gray-950 drop-shadow-2xl flex justify-end ">
            <Buttons text={"Open"} />
          </div>
          <div className="AllConnectMember w-1/5 h-[90vh] m-5  rounded-3xl bg-gray-900 drop-shadow-2xl overflow-y-scroll no-scrollbar ">
            <div>
              <h1 className="text-center text-xl font-semibold">
                Connected Member
              </h1>
            </div>
            <ConnectMemberCard />
          </div>
          <div className="VideoCall absolute w-32 h-32 rounded-2xl drop-shadow-2xl overflow-hidden ">
            <img src={images[5].url} alt="" className="h-full scale-125" />
          </div>
        </div>

        <div className="Messages h-[70vh]">
          <div className="ChatArea border h-5/6 w-5/6 m-10 rounded-lg">
            <Chats />
            <Chats />
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
