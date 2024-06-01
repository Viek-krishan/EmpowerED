const ProfileCard = ({ quailification, experience, preferedTime }) => {
  return (
    <div>
      <div className=" w-56 text-gray-600">
        <h3 className="text-lg font-extralight text-center">Quailification:</h3>
        <h3 className="text-sm font-extralight text-center mb-5">
          {quailification ? (
            <div>
              <h3 className="text-sm text-center">{quailification}</h3>
            </div>
          ) : (
            <div>
              <h1 className="text-gray-400">Enter your quailification</h1>
            </div>
          )}
        </h3>

        <h3 className="text-lg font-extralight text-center">Experience:</h3>
        {experience ? (
          <div>
            <h3 className="text-sm text-center">{experience}</h3>
          </div>
        ) : (
          <div>
            <h1 className="text-gray-400 text-center">Enter your experience</h1>
          </div>
        )}

        <h3 className="text-lg font-extralight text-center mt-5">
          Prefered Timing:
        </h3>
        {preferedTime ? (
          <div>
            <h3 className="text-sm text-center">{preferedTime}</h3>
          </div>
        ) : (
          <div>
            <h1 className="text-gray-400 text-center">Enter your preferd Timing</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
