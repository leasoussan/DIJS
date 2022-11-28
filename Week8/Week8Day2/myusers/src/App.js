import logo from './logo.svg';
import './App.css';
import User from './component/User';


function App() {
  let usersData = [
    { id: 1, name: 'Lilo', username: 'lilous', email: 'leo@gmail.com' },
    { id: 2, name: 'Lila', username: 'lilana', email: 'leo2@gmail.com' },
    { id: 3, name: 'Lilou', username: 'lilosa', email: 'leo3@gmail.com' },
    { id: 4, name: 'Lili', username: 'lilili', email: 'lili@gmail.com' }
  ]
  return (
    // <div>

    //   <User name ='leo' username ="leole" email='leo@gmail.com' />

    // </div>

    <div>
      {
        usersData.map(item =>{
          return (
            < User id={item.id} name = {item.name} username={ item.username } email={ item.email } />
            )
        })
      }
    </div>
  );
}

export default App;


