import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs";

const roughGenerator = rough.generator();

const Canvas = ({ canvasRef, ctxRef, elements, setElements, color, tool }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    ctxRef.current.strokeStyle = color;
  }, [color]);

  useLayoutEffect(() => {
    const roughCanvas = rough.canvas(canvasRef.current);

    // Since we are generating lines continously on the change of elements, So this " if " is for clearing the previously automatically generated lines which aren't created by the user
    if (elements.length > 0) {
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }

    elements.forEach((element) => {
      if (element.type === "pencil") {
        roughCanvas.linearPath(element.path, {
          roughness: 0.5,
          stroke: element.stroke,
          strokeWidth: 2,
        });
      } else if (element.type === "line") {
        roughCanvas.draw(
          roughGenerator.line(
            element.offsetX,
            element.offsetY,
            element.X2,
            element.Y2,
            {
              roughness: 0.5,
              stroke: element.stroke,
              strokeWidth: 2,
            }
          )
        );
      } else if (element.type === "rect") {
        roughCanvas.draw(
          roughGenerator.rectangle(
            element.offsetX,
            element.offsetY,
            element.X2,
            element.Y2,
            {
              roughness: 0.5,
              stroke: element.stroke,
              strokeWidth: 2,
            }
          )
        );
      }
    });
  }, [elements]);

  const handelMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    if (tool === "pencil") {
      setElements((prevElement) => [
        ...prevElement,
        {
          type: "pencil",
          offsetX,
          offsetY,
          path: [[offsetX, offsetY]],
          stroke: color,
        },
      ]);
    } else if (tool === "line") {
      setElements((prevElements) => [
        ...prevElements,
        {
          type: "line",
          offsetX,
          offsetY,
          X2: offsetX,
          Y2: offsetY,
          stroke: color,
        },
      ]);
    } else {
      setElements((prevElements) => [
        ...prevElements,
        {
          type: "rect",
          offsetX,
          offsetY,
          X2: 0,
          Y2: 0,
          stroke: color,
        },
      ]);
    }

    setIsDrawing(true);
  };

  const handelMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    if (isDrawing) {
      if (tool === "pencil") {
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
      } else if (tool === "line") {
        setElements((prevElement) =>
          prevElement.map((ele, index) => {
            if (index === elements.length - 1) {
              return {
                ...ele,
                X2: offsetX,
                Y2: offsetY,
              };
            } else return ele;
          })
        );
      } else {
        setElements((prevElement) =>
          prevElement.map((ele, index) => {
            if (index === elements.length - 1) {
              return {
                ...ele,
                X2: offsetX - ele.offsetX,
                Y2: offsetY - ele.offsetY,
              };
            } else return ele;
          })
        );
      }
    }
  };
  const handelMouseUp = (e) => {
    // console.log("mouse up", e)
    setIsDrawing(false);
  };

  return (
    <div
      onMouseDown={handelMouseDown}
      onMouseMove={handelMouseMove}
      onMouseUp={handelMouseUp}
      className="WhiteBoard w-[70vw] h-[85vh] mt-5  rounded-3xl bg-gray-950 drop-shadow-2xl flex justify-end overflow-hidden  "
    >
      <canvas ref={canvasRef} className="" />
    </div>
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
