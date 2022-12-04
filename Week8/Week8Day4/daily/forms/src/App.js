import React from 'react';
import UserData from '../src/component/UserData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
      destination: "",
      dietrestrication: "",

    }
  }
  handleChange = (e) => {
    const getGender =document.querySelectorAll('#gender')

    console.log(getGender);
  // const gender = ? e.target.checked : e.target.value;
    switch (getGender){
      case getGender ==='female':
        console.log("feml");
        this.setState({gender:"Female" })
        console.log(getGender[1]);
        document.getElementsByName('male').checked = false;
        break;
      
        case getGender==='Male':
          this.setState({gender:getGender[1].value })
          document.getElementsByName('female').checked = false;
          break;
      

    }

    // if(getGender[0].checked ===true){
    //     this.setState({gender: getGender[0].value})
    //     document.getElementsByName('male').checked = false
        
    //   }
   
  
    // const gender =(e.target.id || e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    // console.log(gender);
    // this.setState({ [e.target.id]: e.target.value })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let inputs = event.target.getElementsByTagName('input')
    console.log("input", inputs);
    for (const item of inputs) {
      this.setState({ [item.id]: item.value })
    }

  }

  render() {

    const { first_name, last_name, age, gender, destination, dietrestrication } = this.state

    return (
      <>
        <div className="box" >
          <UserData handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    handleDietSelect={this.handleDietSelect}
                    checkGender={this.checkGender}
                    />
          <div>
            <h1> Entered Information </h1>


            First Name<li>{first_name}</li>
            Last Name<li>{last_name}</li>
            Gender<li>{gender}</li>
            Age<li>{age}</li>
            Destination<li>{destination}</li>
            DietRestrication<li>{dietrestrication}</li>
          </div>
        </div>
      </>

    )
  }
}

export default App;