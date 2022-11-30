import React from "react";




class AppForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            colorId:0,
            isGo:false
        }
    }

    handleInput = (e) => {
        const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
        this.setState({[e.target.name]: value })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.username + " " + this.state.email+" " +this.state.colorId + " " + this.state.isGo)
    }
    // handleCheck=(event)=>{
    //     this.setState({isGo:this.target.checked})
    // }

    // handleSelect=(event) =>{
    //     this.setState({colorId:event.target.value})
    // }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name="username" onChange={this.handleInput} placeholder="enter  username" />
                    <input type='email' name="email" onChange={this.handleInput} placeholder="enter  email" />
                    <select onChange={this.handleInput} name="colorId">
                        <option value='1'>Red</option>
                        <option value='2'>Green</option>
                        <option value='3'>Blue</option>
                    </select>
                  Is Going  <input type="checkbox" name='isGo' onChange={this.handleInput}/>
                  <input type='submit'  value='Submit' />

                </form>
            </>
        )
    }
}

export default AppForm






// Here i collect the form one by one with each one has a methode- but If I have many -see above

// class AppForm extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             username:'',
//             email:''
//         }
//     }

//     handleInput=(event)=>{
//         this.setState({username:event.target.value})
//     }

// handleInputEmail =(event)=>{
//     this.setState({email:event.target.value})
// }

//     handleSubmit =(event) =>{
//         event.preventDefault();
//         alert(this.state.username+" "+ this.state.email)

//     }
//     render() {
//         return (
//             <>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type='text' onChange={this.handleInput} placeholder="enter  username" />
//                     <input type='email' onChange={this.handleInputEmail} placeholder="enter  email" />
//                     <input type='submit' value='Submit' />
//                 </form>
//             </>
//         )
//     }
// }

// export default AppForm