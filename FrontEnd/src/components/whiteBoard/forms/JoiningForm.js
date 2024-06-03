const JoinRoom = () => {
  return (
    <form className=" m-5 border rounded-2xl w-[35vw] h-[40vh] text-black">
      <h3 className="text-center font-serif text-lg">Join Room</h3>
      <div className="NameInput">
        <input
          type="text"
          className="m-10 border rounded-md h-9 w-2/3 "
          placeholder="Enter your name"
        />
      </div>
      <div className="EnterRoomCode">
        <input
          type="text"
          placeholder="Enter the room code"
          className="ml-10 m-1 border w-2/3 h-9 rounded-md"
        />
      </div>
    </form>
  );
};

export default JoinRoom;
