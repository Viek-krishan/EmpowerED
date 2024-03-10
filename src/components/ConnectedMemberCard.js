import { Link } from "react-router-dom";
import { connectedMember } from "../utils/connectedMembers";

const ConnectMemberCard = () => {
  return (
    <div>
      {connectedMember.map((item, index) => {
        return (
          <Link
            className="flex justify-start items-center m-5 ml-4  "
            key={index}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img src={item.image} alt="DP" className="scale-150" />
            </div>
            <div className="mx-3">
              <h1 className="text-sm font-extralight">{item.username}</h1>
              <h1 className="text-sm font-extralight">Active 🟢</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ConnectMemberCard;
