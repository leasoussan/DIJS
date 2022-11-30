import logo from './logo.svg';
import './App.css';
import Car from './component/Car.js'
import Garage from './component/Garage';
import Events from './component/Events';
import Phone from './component/Phone';
import Color from './component/Color';
// import Child from './component/Child';


function App() {

  const carinfo = { name: "Ford", model: "Mustang", color: "Red" };


  return (
    <>
    
     
      <Car name={carinfo.name} model={carinfo.model} color={carinfo.color} />
      <Events />
      <Phone />
      <Color show={true}/>
      
      {/* <Child /> */}
  
    </>
  );
}

export default App;
