const Shimmer = () => {
    return (
        <><div className="shimmer-cardContainer flex justify-between flex-wrap">
            
            {Array(10).fill("").map((e,index)=>(
                <div key={index} className="shimmer-Card card w-60 m-6 p-3 bg-gray-200 rounded-2xl shadow-2xl h-80"></div>
            ))}
        </div>
        </>
    )
};

export default Shimmer;
