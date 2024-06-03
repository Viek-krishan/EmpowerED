const CreateRoom = () => {
  return (
    <form className=" m-5 border rounded-2xl w-[35vw] h-[40vh] text-black">
      <h3 className="text-center font-serif text-lg">Create Room</h3>
      <div className="NameInput">
        <input
          type="text"
          className="m-10 border rounded-md h-9 w-2/3 "
          placeholder="Enter your name"
        />
      </div>
      <div className="GenerateRoomCode">
        <input
          type="text"
          placeholder="generate your room code here"
          className="ml-10 m-1 border w-1/2 h-9 rounded-md"
        />
        <button className="bg-white p-2 border rounded-xl mx-2 text-black drop-shadow-xl hover:bg-green-500 hover:text-white hover:scale-105 transition duration-150 hover:drop-shadow-2xl">
          Generate
        </button>
        <button className="bg-white p-2 border rounded-xl mx-2 text-black drop-shadow-xl hover:bg-green-500 hover:text-white hover:scale-105 transition duration-150 hover:drop-shadow-2xl">
          copy
        </button>
      </div>
    </form>
  );
};

export default CreateRoom;
