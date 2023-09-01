import { useState } from 'react';
import './App.css';

function App() {
 
  const [headingText,setHeadingText]=useState("Hello");
  const [isMouseOver,setMouseOver]=useState(false);
  const myStyle={backgroundColor:isMouseOver?'black':'blue', color:'red'};

  
  function handleClick()
  {
    setHeadingText("submitted");
  }
  function handleMouseOver()
  {
    setMouseOver(true);
  }
  function handleMouseOut()
  {
    setMouseOver(false);
  }
  
 
  return (
    <div className="App">
        <h1>{headingText}</h1>
        <input type="text" 
        placeholder='Write your Name?'
        />
        <button 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={myStyle}
        >
        Submit</button>
    </div>
  );
}

export default App;
