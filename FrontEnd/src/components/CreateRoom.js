import { CreateRoom, JoinRoom } from "./RoomForms";

const FormPage = ({ socket }) => {
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
      <CreateRoom uuid={uuid} socket={socket}  />
      <JoinRoom />
    </div>
  );
};

export default FormPage;
