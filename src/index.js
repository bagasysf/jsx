// Step 1: Import the React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Step 2: Get a reference to the div with ID root
const el = document.getElementById('root');

// Step 3: Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Step 4: Show the component on the screen
root.render(<App />);
