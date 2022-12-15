import { useState, useEffect, useContext, Profiler } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import axios from 'axios'
import { AppContext, token } from '../App';

const LoginRegisterForm = (props) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const { setToken } = useContext(AppContext)

    const navigate = useNavigate();

    useEffect(() => {
        console.log(props);
        if (props.title === 'Register') {
            console.log(document.querySelector('#show_register_form'));
        
            console.log("in use efect");
        }
    }, [])


    const handleClick = async () => {
        if (props.title === 'Login') {
            try {
                // here we have a fetch of the server post users
                const response = await axios.post('/login', {
                    email, password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log(response.data);
                setToken(response.data.token)
                navigate('/')
            }
            catch (e) {
                console.log(e);
                setMsg(e.response.data.msg);
            }
        } else {
            try {
                if (props.title === 'Register') {
                    try {
                        // here we have a fetch of the server post users
                        const response = await axios.post('/register', {
                            first_name, last_name, username, email, password
                        }, {
                            headers: {
                                'Content_type': 'application/json'
                            }
                        })
                        console.log(response.data);
                        setMsg('')
                        navigate('/login')
                    } catch (err) {
                        // console.log(e.response.data);
                        setMsg(err.response.data.msg)
                    }
                }

            }
            catch (e) {
                console.log(e.response.data);
            }
        }
    }


    if (props.title === 'Register') {
        return (
            
            <div className='show_register_form'>
                <div >
                    <h3>{props.title} Form</h3>
                </div>
                <Box componenet={'form'} sx={{ m: 1 }} noValidate autoComplete={'off'}>
               
                    <TextField
                        sx={{ m: 1 }}
                        id='first_name'
                        label="First Name"
                        variant="outlined" 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        sx={{ m: 1 }}
                        id='last_name'
                        label="Last Name"
                        variant="outlined" 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        sx={{ m: 1 }}
                        id='username'
                        label="UserName"
                        variant="outlined" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                 <TextField
                        sx={{ m: 1 }}
                        id='email'
                        label="Email"
                        variant="outlined" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        sx={{ m: 1 }}
                        id='password'
                        label="Password"
                        variant="outlined" 
                        onChange={(e) => console.log(e.target.value)}
                    />

                </Box>
                <Button variant='contained' onClick={handleClick}>{props.title}</Button>
            </div>
        )
    }

    return (

        <div className='show_login_form'>
            <div>
                <h3>{props.title} Form</h3>
            </div>


            <div>
                <Box componenet={'form'} sx={{ m: 1 }} noValidate autoComplete={'off'}>
                  
                   <TextField
                        sx={{ m: 1 }}
                        id='email'
                        label='Enter Email'
                        variante='outlined'
                        onChange={(e) => setEmail(e.target.value)
                        }
                    />
                   
               
                   <TextField
                        sx={{ m: 1 }}
                        id="password"
                        label='Enter Password'
                        variante='outlined'
                        onChange={(e) => console.log(e.target.value)}
                    />

                </Box>
                <Button variant='contained' onClick={handleClick}>{props.title}</Button>
            </div>

            <div>
                {msg}
            </div>
        </div>
    )
}

export default LoginRegisterForm