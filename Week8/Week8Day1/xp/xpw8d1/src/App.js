import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { render } from '@testing-library/react';
import UserFavoriteColors from './component/UserFavoriteColors';
import Exercise4 from './component/Exercise4'

function App() {
  const Hello = 'Hello World'
  const myelement = <h1>I Love JSX!</h1>
  const sum = 5+5
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
  const {first_name, last_name }= user;
    
  return (
    <>
    <Header />
    <h2>{Hello}</h2>
    {myelement} 
    <h1>React is {sum} times better with JSX</h1>
    
     <h3>Hello {first_name}  {last_name} Thank you for coming!</h3> 

    <UserFavoriteColors fav_animals= {user.fav_animals}/>
    
    <Exercise4 />
    
    </>
    
  )

}

export default App;
