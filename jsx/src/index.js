// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = 'Click Me';

  return <div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {buttonText}
    </button>
  </div>
}

// Display react component on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
