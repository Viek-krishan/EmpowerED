import { useState } from "react";

export const JoinRoom = () => {
  return (
    <form className=" m-5 border rounded-2xl w-[35vw] h-[40vh] text-black">
      <h3 className="text-center font-serif text-lg">Join Room</h3>
      <div className="NameInput">
        <input
          type="text"
          className="m-10 p-2 border rounded-md h-9 w-2/3 "
          placeholder="Enter your name"
        />
      </div>
      <div className="EnterRoomCode">
        <input
          type="text"
          placeholder="Enter the room code"
          className="ml-10 p-2 m-1 border w-2/3 h-9 rounded-md"
        />
      </div>
      <div className="Join_Btn flex justify-center mt-5">
        <button className="bg-white p-2 border rounded-xl mx-2 text-black drop-shadow-xl hover:bg-green-500 hover:text-white hover:scale-105 transition duration-150 hover:drop-shadow-2xl">
          Join Room
        </button>
      </div>
    </form>
  );
};

export const CreateRoom = ({ uuid, socket }) => {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");

  // functions
  const handelCreateRoom = (e) => {
    e.preventDefault();

    // Name, roomId, UserId, host, presenter 
    const RoomData = {
      name,
      roomId,
      userId: uuid(),
      host: true,
      presenter: true,
    };

    // setUser(RoomData);

    socket.emit("userJoined", RoomData);
  };

  return (
    <form className=" m-5 border rounded-2xl w-[35vw] h-[40vh] text-black">
      <h3 className="text-center font-serif text-lg">Create Room</h3>
      <div className="NameInput">
        <input
          type="text"
          className="m-10 p-2 border rounded-md h-9 w-2/3 "
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="GenerateRoomCode">
        <input
          type="text"
          value={roomId}
          placeholder="generate your room code here"
          className="ml-10 p-2 m-1 border w-1/2 h-9 rounded-md"
          disabled
        />

        <button
          className="bg-red-500 p-2 border rounded-xl mx-2 text-white drop-shadow-xl hover:bg-white hover:text-black hover:scale-105 transition duration-150 hover:drop-shadow-2xl"
          onClick={(e) => {
            e.preventDefault();
            setRoomId(uuid());
          }}
        >
          Generate
        </button>
        <button
          className="bg-green-500 p-2 border rounded-xl mx-2 text-black drop-shadow-xl hover:bg-green-600 hover:text-white hover:scale-105 transition duration-150 hover:drop-shadow-2xl"
          onClick={(e) => e.preventDefault()}
        >
          copy
        </button>
      </div>
      <div className="CreateRoomBtn flex justify-center mt-5">
        <button
          className="bg-white p-2 border rounded-xl mx-2 text-black drop-shadow-xl hover:bg-green-500 hover:text-white hover:scale-105 transition duration-150 hover:drop-shadow-2xl"
          onClick={handelCreateRoom}
        >
          Create Room
        </button>
      </div>
    </form>
  );
};
