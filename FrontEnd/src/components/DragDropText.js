import React, { useState } from "react";


const DragAndDropText = () => {
  const [textAreaContent, setTextAreaContent] = useState("");

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    console.log("draged over");

    if (file.type.startsWith("text/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setTextAreaContent(event.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please drag and drop a text file only.");
    }
  };

  const handleDropPDF = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file.type.startsWith("pdf/")) {
      
    } else {
      alert("Please drag and drop a text file only.");
    }
  };

  return (
    <div className="w-full relative  border-2 border-red-800">
      <div
        className="w-full h-full z-10 flex justify-center items-center text-xl cursor-pointer   "
        id="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Drop your text file here! ----*/}
        <iframe
          src=""
          width="100%"
          height="100%"
        ></iframe>
      </div>
      {textAreaContent && (
        <textarea
          className="text-black absolute top-0 w-full h-full p-5 z-0"
          id="text-area"
          rows="10"
          value={textAreaContent}
          readOnly
        />
      )}
    </div>
  );
};

export default DragAndDropText;
