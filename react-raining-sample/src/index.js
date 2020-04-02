import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//import JoshTextFieldComponent from './components/JoshTextFieldComponent';
import Square from './components/Square';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <JoshTextFieldComponent placeholder='Plese enter text'/> */}
    <Square />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
