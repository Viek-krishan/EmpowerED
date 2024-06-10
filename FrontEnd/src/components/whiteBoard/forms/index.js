import CreateRoom from "../../CreateRoom";
import JoinRoom from "../../RoomForms";


const FormPage = () => {
  const uuid = () => {
    let Rand = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    return (
      Rand() +
      Rand() +
      "-" +
      Rand() +
      Rand() +
      "-" +
      Rand() +
      "-" +
      Rand() +
      "-" +
      Rand() +
      Rand() +
      Rand()
    );
  };

  return (
    <div className="flex justify-around">
      <CreateRoom uuid = {uuid} />
      <JoinRoom />
    </div>
  );
};

export default FormPage;
