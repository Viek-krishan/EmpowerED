import ReactPlayer from "react-player";
import { X } from "lucide-react";
import { DemoVideo } from "../utils/image";
import { useRef } from "react";

const VideoPopUp = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className=" rounded-xl w-fit overflow-hidden aspect-video">
          <ReactPlayer
            url={DemoVideo[0].url}
            controls
            width={992}
            height={558}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopUp;
