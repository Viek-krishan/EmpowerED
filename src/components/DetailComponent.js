const DetailDisplay = ({ LeftText, RightText }) => {
  return (
    <div className="w-full flex justify-evenly m-2 ">
      <h1 className="w-1/3 text-wrap text-lg p-1 bg-blue-50 rounded-xl ">
        {LeftText}
      </h1>
      <h1 className="w-1/2 text-wrap font-extralight p-1 bg-blue-50 rounded-xl">
        {RightText}
      </h1>
    </div>
  );
};

export default DetailDisplay;
