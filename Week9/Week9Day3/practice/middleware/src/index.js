import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
// to use midlleware applyMiddleware need for the store 
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './component/ErrorBoundary';
import {reducer} from '../src/redux/reducer';
import thunk from'redux-thunk'; // for the middleware
import logger from 'redux-loger'

const store = createStore(reducer, applyMiddleware(thunk, logger));
const root = ReactDOM.createRoot(document.getElementById('root'));

const myLogger =(store)=> (next) =>(action)=>{

}

root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <Provider store={store}>
    <App />
    </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
