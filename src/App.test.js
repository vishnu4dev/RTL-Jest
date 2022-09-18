import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

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
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
})

test("test button is disabled and enabled on checkbox click", ()=>{
  render(<App/>);
   //get button element 
   const button  = screen.getByRole("button", {name: /Change to blue/i});
  //get checkbox element 
  const checkbox = screen.getByRole("checkbox");
  //click checkbox 
  fireEvent.click(checkbox);
  //check if button is disabled 
  expect(button).toBeDisabled();

  //click checkbox again to enable button 
  fireEvent.click(checkbox);
  //check if button is enabled
  expect(button).toBeEnabled();
})