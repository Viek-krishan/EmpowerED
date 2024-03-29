const Buttons = ({ text, size, toCall }) => {
  return (
    <div className="Buttons text-black bg-gray-100 w-fit h-10 m-4 rounded-xl flex justify-center items-center hover:scale-110 transition duration-150 ease-in-out hover:bg-[#1ad179] drop-shadow-lg hover:drop-shadow-2xl hover:text-black hover:font-medium">
      <button className={`text-${size} mx-4`} onClick={toCall}>
        {text}
      </button>
    </div>
  );
};

export default Buttons;
