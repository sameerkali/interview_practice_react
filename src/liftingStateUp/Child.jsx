
import React from 'react';

const ChildComponent = ({ inputValue, onInputChange }) => {
  return (
    <div>
      <label>Input:</label>
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
};

export default ChildComponent;
