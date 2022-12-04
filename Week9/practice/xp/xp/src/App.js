import React from 'react';
import Counter from '../src/component/Counter'
import './App.css';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

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
        <Counter />

        </>
    )
  }
}



export default App;
