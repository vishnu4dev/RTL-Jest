import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

describe('Testing color button UI', ()=>{
  test('renders color button', () => {
    render(<App />);
    //find am element with a role button and name 
    const colorButton = screen.getByRole("button", {name:/Change to blue/i});
  
    //expect the background color to be red
    expect(colorButton).toHaveStyle({backgroundColor:'red'});
  
    //click the button 
    fireEvent.click(colorButton);
  
    //expect the background color to be blue
    expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  
    //expect the button content to be "change to red";
    expect(colorButton.textContent).toBe("Change to red");
  });
  
  
  test("render checkbox ", () => {
    render(<App/>);
    //check if button is enabled initally 
    screen.getByRole("button", {name: /Change to blue/i});
    
    //check if checkbox is unchecked
    const checkbox = screen.getByRole("checkbox",{name: /Disable Button/i});
    expect(checkbox).not.toBeChecked();
  })
  
  test("test button is disabled and enabled on checkbox click", ()=>{
    render(<App/>);
     //get button element 
     const button  = screen.getByRole("button", {name: /Change to blue/i});
    //get checkbox element 
    const checkbox = screen.getByRole("checkbox", {name: /Disable Button/i});
    //click checkbox 
    fireEvent.click(checkbox);
    //check if button is disabled 
    expect(button).toBeDisabled();
  
    //click checkbox again to enable button 
    fireEvent.click(checkbox);
    //check if button is enabled
    expect(button).toBeEnabled();
  })
  
  test("Change button color grey when disabled by checkbox else stay red", ()=>{
    render(<App/>);
    const button = screen.getByRole("button", {name:/Change to blue/i});
    const checkbox = screen.getByRole("checkbox", {name: /Disable Button/i});
    //initially button is red
    expect(button).toHaveStyle({backgroundColor:"red"});
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({backgroundColor:"grey"});
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({backgroundColor:"red"});
  })
  
  test("Change button color gray when disabled else change red to blue", ()=>{
    render(<App/>);
    const button = screen.getByRole("button", {name: /Change to blue/i});
    const checkbox = screen.getByRole("checkbox", {name: /Disable Button/i});
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({backgroundColor: "grey"});
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({backgroundColor: "red"});
    fireEvent.click(button);
    expect(button).toHaveStyle({backgroundColor:"blue"});
  
  })
});

describe("Spaces before camel-case capital letter", ()=>{
  it("works for no inner capital letters", ()=>{
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  })

  it("Works for one inner capital letters",()=>{
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  })

  it("Works for multiple inner capital letters", ()=>{
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  })
})