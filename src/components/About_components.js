const ValueCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 rounded-xl text-black m-3 h-44 w-1/2 p-5 shadow-sm hover:shadow-[#0c0b1e] duration-100 ease-in-out">
      <h1 className="text-5xl font-semibold text-[#1ad179] mb-4">{title}</h1>

      <p className="font-normal text-lg mt-1 tracking-wide">{description}</p>
    </div>
  );
};

export default ValueCard;
