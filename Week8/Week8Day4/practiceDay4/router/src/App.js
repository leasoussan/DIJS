import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact id={12}/>} />

      </Routes>

    </div>
  );
}

export default App;
