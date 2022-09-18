import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState("blue");
  const [isDisabled, setButtonStatus] = useState(false);
  const newButtonColor = btnColor==="blue"?"red":"blue";
  const handleButtonClick = ()=>{
    btnColor==="red"?setBtnColor("blue"):setBtnColor("red")
  }
  return (
    <div className="app-main">
      <button disabled={isDisabled} style={{backgroundColor:newButtonColor, margin: "10px"}} onClick={handleButtonClick}> 
        {`Change to ${btnColor}`}
      </button>
      <input type="checkbox" onClick={()=>{setButtonStatus(!isDisabled)}}/>
    </div>
  );
}

export default App;
