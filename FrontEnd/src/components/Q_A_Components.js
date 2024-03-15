const Q_A_Component = ({ question, answer }) => {
  return (
    <div>
      <div className=" text-black p-8 bg-gray-100 m-6 border-1 border-[#0c0b1e] rounded-xl shadow-sm hover:shadow-[#0c0b1e] duration-100 ease-in-out">
        <h1 className=" text-3xl text-[#1ad179] ">{question}</h1>
        <p className="text-xl mt-4">{answer}</p>
      </div>
    </div>
  );
};

export default Q_A_Component;
