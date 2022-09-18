import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState("blue");
  const newButtonColor = btnColor==="blue"?"red":"blue";
  const handleButtonClick = ()=>{
    btnColor==="red"?setBtnColor("blue"):setBtnColor("red")
  }
  return (
    <div >
      <button style={{backgroundColor:newButtonColor}} onClick={handleButtonClick}> 
        {`Change to ${btnColor}`}
      </button>
    </div>
  );
}

export default App;
