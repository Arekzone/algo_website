import { useRef,useState,useEffect,useContext } from 'react';
import { TokenContext } from '../loginContext/AuthProvider';
import api from '../api/posts'
import Zadania from './Zadania';
import {Link} from "react-router-dom";


function Login(props){
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const[jwt,setJwt]=useState('');
  const [localJwt,setLocalJwt]=useState(localStorage.getItem('token'));

    function handleRegistration(event) {
        event.preventDefault();
        // Validate form fields
        if (!username || !password) {
          setError('Please enter all required fields');
          return;
        }
        // Send a request to the server to register
       api.post('/auth/login', {
            username: username,
            password:password,
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
            const token = JSON.stringify(response.data);
            const tokenString=token;
            const tokenStringSplit = tokenString.substring(8,tokenString.length-2);
            localStorage.setItem('token',tokenStringSplit);
            console.log(tokenStringSplit);
            window.location.href = '/zadania';
          })
          .catch(error => {
            console.error(error);
          })
        }
              
           

            // Redirect the user to the login page

    return (
       
        <form style={{width:'32vh'}}onSubmit={handleRegistration}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Sign Up</button>
        </form>
    )
}
export default Login;