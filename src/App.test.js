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
