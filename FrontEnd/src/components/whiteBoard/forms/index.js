import CreateRoom from "./creatingRoom";
import JoinRoom from "./joiningForm";

const FormPage = () => {
  return (
    <div className="flex justify-around">
      <CreateRoom />
      <JoinRoom />
    </div>
  );
};

export default FormPage;
