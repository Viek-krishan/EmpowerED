import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <div className="error-text">
        <h1>Oops.....</h1>
        <h2>Something went wrong!!!</h2>
        <h2>{err.status + " : "+ err.statusText }</h2>
      </div>
      <img
        src="https://th.bing.com/th/id/R.8eb4cad5d2f315df88b2a1638366468e?rik=O7f1rU10XS%2ftyA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1061%2f1924%2fproducts%2fVery_sad_emoji_icon_png_grande.png%3fv%3d1480481019&ehk=ccN0%2bcBpn96UxyayFMxQ%2bnhOOLq3DWWrgPjw7aNv7Sk%3d&risl=&pid=ImgRaw&r=0"
        alt="Sad"
        id="sad-emojee"
      />
    </div>
  );
};

export default Error;
