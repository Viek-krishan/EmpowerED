import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs";

const roughGenerator = rough.generator();

const Canvas = ({ canvasRef, ctxRef, elements, setElements }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctxRef.current = ctx;
  }, []);

  useLayoutEffect(() => {
    const roughCanvas = rough.canvas(canvasRef.current);

    elements.forEach((element) => {
      roughCanvas.linearPath(element.path, {
        //    bowing: 6,
        stroke: "green",
        strokeWidth: 0.5,
      });
    });
  }, [elements]);

  const handelMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    console.log(e);

    setElements((prevElement) => [
      ...prevElement,
      {
        type: "pencil",
        offsetX,
        offsetY,
        path: [[offsetX, offsetY]],
        storke: "#FFFFFF",
      },
    ]);
    setIsDrawing(true);
  };
  const handelMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (isDrawing) {
      // pencil
      const { path } = elements[elements.length - 1];
      const newPath = [...path, [offsetX, offsetY]];

      setElements((prevElement) =>
        prevElement.map((ele, index) => {
          if (index === elements.length - 1) {
            return {
              ...ele,
              path: newPath,
            };
          } else return ele;
        })
      );
    }
  };
  const handelMouseUp = (e) => {
    // console.log("mouse up", e)
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handelMouseDown}
      onMouseMove={handelMouseMove}
      onMouseUp={handelMouseUp}
      className="WhiteBoard w-[70vw] h-[85vh] mt-5  rounded-3xl bg-gray-50 drop-shadow-2xl flex justify-end overflow-hidden  "
    ></canvas>
  );
};

export default Canvas;

{
  /* {textAreaContent && (
              <textarea
                className="text-white bg-black  absolute top-0 w-full h-full p-5 z-0"
                id="text-area"
                rows="10"
                value={textAreaContent}
                readOnly
              />
            )} */
}
