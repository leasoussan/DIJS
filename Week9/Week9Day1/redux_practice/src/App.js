import React from 'react'
import { connect } from 'react-redux'
//in order to connecte the store 
import './App.css';
import NewComp from './component/NewComp';
import {changePropOne} from './actions'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property_one: 'la premier ',
      property_two: 'la eme'
    }
  }

  handlChange=(e)=>{
    this.setState({property_one:e.target.value})
  }

  render() {
    return (
      <>
        <div>Property One{this.state.property_one}</div>
        <div>PropertyOne From Store:{this.props.myOne}</div>
        <div>Property Two{this.props.myTwo}</div>
        handlechange<input type="text" onChange={this.handlChange}/>
        {/* here I change properpety one */}

<hr></hr>
      change globale  <input type='text' onChange={this.props.myChange}/>
        <NewComp />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  //its returning a b object
  return {
    myOne: state.property_one,
    myTwo:state.property_two

    //the myOne is what we ll have on props.myONe- is assigned to the state of the store at property one
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    myChange: (e)=>{
      dispatch(changePropOne(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//to connect a conponenet
// in the connect we hae two arguments 1.mapStateToProps, mapDispatchToProps
// mapStateToProps: we want to map our store state to the componenet props- getting the state from the store  to map it to a prop in aour componenet 
// mapDispatchToProps