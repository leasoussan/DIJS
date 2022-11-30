import logo from './logo.svg';
import './App.css';
import Counter from './componenet/Counter.js'
import Parent from'./componenet/Parent'
import Child from'./componenet/Child'
import ErrorBoundry from './ErrorBoundry.js'


function App() {
  return (
    <>
    {/* <ErrorBoundry>
    <Counter a={1} />
    <Counter a={1} />

    </ErrorBoundry>

    <Counter a={1} /> */}
{/* /if the app is not surrounded with error , the app will crash - therefor eyou need to see ErrorBoudry  */}

<Parent username='user'>
<Child />
</Parent>
{/* 
<Parent username='user1'>
<Child />
</Parent> */}
    </>
  );
}

export default App;
