import logo from './logo.svg';
import './App.css';
import MovieList from './component/MovieList';
import MovieDetail from './component/MovieDetail'



function App() {
  return (
    <div className="App">
     <MovieList />
     <MovieDetail />
    </div>
  );
}

export default App;
