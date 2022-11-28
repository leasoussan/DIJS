import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import Users from './componenet/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SayHello />
        <Users />
      </header>
    </div>
  );
}

export default App;
