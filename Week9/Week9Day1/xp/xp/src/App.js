import React from 'react';
import Counter from '../src/component/Counter'
import Counter2 from '../src/component/Counter2'

import './App.css';
import { createStore } from 'redux';
// import { connect, Provider } from 'react-redux';
import { Provider } from 'react';
import store2 from './store';
//we import the reducer
import { reducer } from '../src/reducers/index.js';
const store = createStore(reducer)


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }



  render() {
    return (
      <>
        {/* <Counter /> */}
        <Counter2 />

        </>
    )
  }
}



export default App;
