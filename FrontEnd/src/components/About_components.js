const ValueCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 rounded-xl text-black flex flex-col justify-center m-3 h-40  w-1/2 p-5 shadow-sm hover:shadow-[#0c0b1e] duration-150 ease-in-out hover:scale-105">
      <h1 className="text-3xl font-semibold text-[#1ad179] mb-4">{title}</h1>

      <p className="font-normal text-sm mt-1 tracking-wide">{description}</p>
    </div>
  );
};

export default ValueCard;
