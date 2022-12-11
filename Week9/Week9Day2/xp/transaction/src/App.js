import logo from './logo.svg';
import './App.css';
import TransactionForm from './component/TransactionForm.js';
import TransactionList from './component/TransactionList';
function App() {
  // const Data = () => {
  //   localStorage.setItem("Name", JSON.stringify("Pratham"));
  // };

  return (
    <div className="App">
      <h1>Transaction</h1>

      <TransactionList />
    </div>
  );
}

export default App;
