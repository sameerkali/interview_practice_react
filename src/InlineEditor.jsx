import React from 'react';
import { useState, useRef, useEffect } from 'react'

function App() {
      const [text, setText] = useState("")
      // const [clicked, setClicked] = useState(false)
      const [clickOutside, setClickOutside] = useState(false);
      const ref = useRef();
       
      useEffect(() => {
      const handleClickOutside = (e) => {
        if (!ref?.current?.contains(e.target)) {
          setClickOutside(true);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main}>
      
      
      {!clickOutside ? <input  
          ref={ref}
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)} />
      : 
        <h1>{text}</h1>
      }
    </div>
  )
}

export default App

/*
interview at strobes security inc on 25 nov 2025 (i fucked up in this interview)

0. create a H1 click on h1 to convert it to input 
1. create a input
2. crate some states for currebnt context 
3. click outside to save thxt
4. some how convert the inoput to H1 
*/
