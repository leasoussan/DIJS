import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

//we import the reducer
import { reducer } from '../src/reducers/index.js';
const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store ={store}>
    <App />
    </Provider>  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//1     // index import import {createStore} from 'redux';
// import { Provider } from 'react-redux';

// 2  //we import the reducer
// import { reducer } from './reducer';
// const store = createStore(reducer)