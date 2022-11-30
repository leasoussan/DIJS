import logo from './logo.svg';
import './App.css';
import BuggyCounter from './component/BuggyCounter';
import ErrorBoundary from './component/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>


      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

    </>
  );
}

export default App;

