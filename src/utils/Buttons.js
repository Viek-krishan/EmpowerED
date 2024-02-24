const Buttons = ({ text, size, toCall }) => {
  return (
    <div className="Buttons bg-blue-400 w-fit h-10 m-4 rounded-2xl flex justify-center items-center hover:scale-110 transition duration-200 ease-in-out ">
      <button className={`text-${size} mx-4`} onClick={toCall}>
        {text}
      </button>
    </div>
  );
};

export default Buttons;
