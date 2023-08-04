// import React from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client';

// import ReactDOM  from 'react-dom';
import App from './App'
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);







// ReactDOM.render(<App/>,document.getElementById('root'));


/* 
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

*/