
import React, { useState } from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent inputValue={inputValue} onInputChange={handleInputChange} />
      <p>Input Value in Parent: {inputValue}</p>
    </div>
  );
};

export default ParentComponent;
