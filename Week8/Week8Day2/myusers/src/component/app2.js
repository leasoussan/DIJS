import React from 'react'
import User from './User.js'; 
import '../App.css';
import Search from './Search.js';
// let usersData = [
//   {id:1,name:'Tim',username:'timtim',email:'tim@gmail.com'},
//   {id:2,name:'Mary',username:'marymary',email:'mary@gmail.com'},
//   {id:13,name:'John',username:'JohnJohn',email:'John@gmail.com'},
//   {id:14,name:'Dana',username:'DanaDana',email:'Dana@gmail.com'}
// ];
class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Users App',
            subTitle: 'My Robots Users',
            usersData: [],
            text: '',
            text2:'',
        }
        // console.log('1 constructor');
    }
    componentDidMount() {
        // this.getUsers()
        // console.log('3 componentDidMount');
    }
    changeTitle = () => {
        this.setState({ title: 'Test ME App' })
    }
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState({ usersData: data })
                // console.log(data);
            })
            .catch(e => {
                console.log(e);
            })
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleClick = (e)=>{ 
        console.log("test e", e);
        this.setState({text2:this.state.text})
        // we are taking it from the handle change fuction
    }
    render() {
        // console.log('2 render');
        const { title, subTitle, usersData, text, text2 } = this.state;
        const filterData = usersData.filter(item => {
            return item.name.toLowerCase().includes(text2.toLowerCase())
        });
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                <div>
                    <button onClick={this.changeTitle}>Change Title</button>
                    <button onClick={this.getUsers}>Get Users</button>
                    <Search handleChange={this.handleChange} handleClick={this.handleClick}/>
                </div>
                {
                filterData.map((item, index) => {
                    return (
                        <User id={item.id} name={item.name} username={item.username} email={item.email} key={index} />
                    )
                })
                }
            </div>
        );
    }
}
export default App2;