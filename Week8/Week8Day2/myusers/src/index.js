import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyApp from './MyApp'
import reportWebVitals from './reportWebVitals';
import App2 from './component/app2';
import AppForm from './AppFrom.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
    {/* <App /> */}
    <App2 />
    <AppForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
