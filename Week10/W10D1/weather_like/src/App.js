import logo from './logo.svg';
import './App.css';
// import { SearchWeather } from './component/SearchWeather';
import { createContext, useState } from 'react';
import AutoComplete from './component/AutoComplete';

export const AppContext = createContext(null);

function App() {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [cityKey, setCityKey] = useState()

  return (
    <>

      <AppContext.Provider value={{ city, setCity, country, setCountry, cityKey, setCityKey }}>
        <AutoComplete />
      </AppContext.Provider>

    </>

  );
}

export default App;



// function App() {
//   return (
//     <>

//       <div className="App">
//       <SearchWeather/>

//       </div>

//     </>

//   );
// }

// export default App;
