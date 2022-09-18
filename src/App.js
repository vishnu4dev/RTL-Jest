import './App.css';
import { useState } from 'react';


export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}
function App() {
  const [btnColor, setBtnColor] = useState("blue");
  const [isDisabled, setButtonStatus] = useState(false);
  const newButtonColor = btnColor === "blue" ? "red" : "blue";
  const handleButtonClick = () => {
    btnColor === "red" ? setBtnColor("blue") : setBtnColor("red")
  }
  return (
    <div className="app-main">
      <button disabled={isDisabled} style={{ backgroundColor: isDisabled?"grey" : newButtonColor, margin: "10px" }} onClick={handleButtonClick}>
        {`Change to ${btnColor}`}
      </button>
      <input 
      id="disable-button-checkbox" 
      type="checkbox" 
      onClick={() => { setButtonStatus(!isDisabled) }}
       />
       <label htmlFor="disable-button-checkbox"> Disable Button</label>
    </div>
  );
}

export default App;
