import { useState } from "react";
import { images } from "../utils/image";
import ConnectMemberCard from "./ConnectedMemberCard";
import Chats from "./Chats";
import InputBox from "./InputBox";

const Class = () => {
  // All State Variables
  const [textAreaContent, setTextAreaContent] = useState("");

  // All Utility Functions
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check for .txt extension
      if (!file.name.toLowerCase().endsWith(".txt")) {
        alert("Please select a .txt file.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setTextAreaContent(event.target.result);
      };
      reader.readAsText(file);
    }
  };


  return (
    <>
      <div className="text-white bg-gray-800">
        <div className="Heading flex justify-between p-5">
          <h1 className="text-3xl mx-10 text-center">Class Room</h1>
          <div className="w-fit">
            <input
              className="rounded-xl w-fit cursor-pointer  border-2 border-red-500 "
              type="file"
              accept=".txt"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="WhiteBoard_And_Members w-screen h-screen flex justify-center relative [&>*:nth-child(3)]:bottom-20 [&>*:nth-child(3)]:left-24 [&>*:nth-child(3)]:bg-white ">
          <div className="WhiteBoard w-[70vw] h-[90vh] mt-5  rounded-3xl bg-gray-950 drop-shadow-2xl flex justify-end overflow-hidden  ">
            {textAreaContent && (
              <textarea
                className="text-white bg-black  absolute top-0 w-full h-full p-5 z-0"
                id="text-area"
                rows="10"
                value={textAreaContent}
                readOnly
              />
            )}
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
          <div className="ChatArea h-5/6 w-5/6 m-10 rounded-lg">
            <h1 className="text-2xl font-semibold mx-5">Live Chats</h1>
            <div className="col-span-7 text-center bg-gray-900 h-full rounded-xl mx-2 drop-shadow-2xl ">
              <div className="flex flex-col relative w-[100%] h-full ">
                <div className="user-query flex-1 flex items-end ">
                  <Chats />
                </div>
                <InputBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
