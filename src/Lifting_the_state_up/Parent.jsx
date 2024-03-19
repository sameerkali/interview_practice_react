// Parent.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Child from "./Child";

const Parent = () => {
  const [textFromParent, setTextFromParent] = useState("i am parent");
  const updateTextFromChild = (child) => {
    setTextFromParent(child)
  }
  

  return (
    <div className="flex-1">
      <div className="h-full w-full text-center mt-[10%]">
        <h1 className="text-2xl pb-9">I am a Parent component</h1>
        <div className="border-gray-500 border-2 h-52 w-72 text-center ml-auto mr-auto">
          <p className="text-4xl mt-16">{textFromParent}</p>
        </div>
      </div>
      <div className="text-center mt-9">
        <Link to={`/child`}>
          <button className="px-4 py-2 bg-green-300">Go to Child</button>
        </Link>
      </div>
      <Child  updateTextFromChild={updateTextFromChild}/>
    </div>
  );
};

export default Parent;
