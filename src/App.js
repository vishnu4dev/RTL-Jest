import './App.css';
import { useState } from 'react';


export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}
function App() {
  const [btnColor, setBtnColor] = useState("MidnightBlue");
  const [isDisabled, setButtonStatus] = useState(false);
  const newButtonColor = btnColor === "MidnightBlue" ? "MediumVioletRed" : "MidnightBlue";
  const handleButtonClick = () => {
    btnColor === "MediumVioletRed" ? setBtnColor("MidnightBlue") : setBtnColor("MediumVioletRed")
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
