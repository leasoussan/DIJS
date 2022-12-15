import { useState, createContext } from 'react';
import LoginRegisterForm from './component/LoginRegisterForm.js';
import Home from './component/Home.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Nav from './component/Nav.js';
import Users from './component/Users.js';
import './App.css';
import '../src/component/LoginRegisterForm.css'
export const AppContext = createContext(null)

function App() {
  const [token, setToken] = useState('')
  return (
    <BrowserRouter>
    <AppContext.Provider value={{token, setToken}}>
      <div className="App">
        
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginRegisterForm title='Login'/>}/>
          <Route path='/register' element={<LoginRegisterForm title='Register'/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>
      </div>
    </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;