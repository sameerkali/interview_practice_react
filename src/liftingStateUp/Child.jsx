
import React from 'react';

const ChildComponent = ({ inputValue, onInputChange }) => {
  console.log(onInputChange,"onInputChange")
  // onInputChange('harshit')
  const name = 'sameer'
  onInputChange(name)
  return (
    <div>
      <label>Input:</label>
      <input type="text" value={inputValue} onChange={(e)=> onInputChange(e.target.value)} />

    </div>
  );
};

export default ChildComponent;


// // question ask by harshit bhaiya 
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); //20
// console.log(shape.perimeter()); // NAN || undefined (because 'this' is not accessable in arrow functions) and undefined*number = undefined 