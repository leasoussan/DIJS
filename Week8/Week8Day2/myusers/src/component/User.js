import './User.css'
import { ReactDOM } from 'react';
import App from '../App';
import Button from '@material-ui/core/Button';

const User = (props) => {
const { name, username, email, id } = props;
return (
    <div className="dilb bsb ta">
        <img src={`https://robohash.org/${props.id}`} />
        <h2>{name}</h2>
        <h4>{username}</h4>
        <p>{email}</p>
    </div>
)
  }
export default User


// const User = (props) => {
//     const { id, name, username, email } = props;
//     let style = {
//         display: 'inline-block',
//         backgroundColor: 'red',
//         border: 'solid 3px black',
//         padding: '1rem',
//         margine: '1rem',
//         // inline styling as an object 
//     }

//     return (
//         <div className='dlib bsb ta'>
//             {
//                 console.log('hlloe! loggin with js inside the console. if i want only one log, delete strict mode')
//             }
//             <img src={`https://robohash.org/${id}`} />
//             <h2>   {name} </h2>
//             <h4>  {username}</h4>
//             <h2> {email}</h2>

//             <Button variant="contained" color="primary">
//                 Hello World
//             </Button>


//         </div>
//     )
// }


// export default User

// // props = object
