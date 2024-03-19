// Child.js
import React from "react";
import { Link } from "react-router-dom";

const Child = ({ updateTextFromChild }) => {
  const handleClick = () => {
    updateTextFromChild("Text updated from Child hmmhmhmm");
  };

  return (
    <div className="flex-1">
      <div className="h-full w-full text-center mt-[10%]">
        <h1 className="text-2xl pb-9">I am a Child component</h1>
        <select>
          <option value="someOption">Child</option>
          <option value="otherOption">Sibling</option>
          <option value="otherOption">Sibling</option>
          <option value="otherOption">Sibling</option>
          <option value="otherOption">Sibling</option>
          <option value="otherOption">Sibling</option>
          <option value="otherOption">Sibling</option>
        </select>
        <button onClick={handleClick} className="px-4 py-2 bg-blue-300">
          Update Parent Text
        </button>
      </div>
      <div className="text-center mt-9">
        <Link to={`/parent`}>
          <button className="px-4 py-2 bg-green-300">Go to Parent</button>
        </Link>
      </div>
    </div>
  );
};

export default Child;
