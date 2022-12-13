import logo from './logo.svg';
import './App.css';
import MapLocator from './component/MyReactMap'
import "bootstrap/dist/css/bootstrap.min.css";
import MyReactMap from './component/MyReactMap';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";


// const render = (status: Status) => {
//   return <h1>{status}</h1>;
// };



function App() {
  return (
    <>
      {/* <Wrapper apiKey={AIzaSyAjOvkrl1l5AbPXmIbsIZQgCAsSnbT9UFU} render={render}> */}
        <MyReactMap />
        
        {/* </Wrapper> */}



    </>
  );
}

export default App;
