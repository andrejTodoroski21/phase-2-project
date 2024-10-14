// import { useState } from 'react'
// import {useOutletContext} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import UserDetails from './UserDetails';
// import {useUser} from '../UserContext';

// function Login() {

//   const [user, setUser] = useState('');
//   const [password, setPassword] = useState('');
//   const {setCurrentUser} = useUser();
//   const navigate = useNavigate();

//   // SUBMIT EVENT

//   function handleSubmit(e) {
//     e.preventDefault();

//     fetch('/api/login', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json', 
//           'Accept': 'application/json' 
//         },
//         body: JSON.stringify({ user, password })
//       }).then(res => {
//         if (res.ok) {
//           res.json().then(user => {
//             console.log("User data received:", user);  // Debug the structure of the user object
//             setCurrentUser(user); 
//           });
//         } else {
//           alert('Invalid username or password');
//         }
//       });
//       console.log("Welcome " + user.username)
//   }

//   // RENDER //

//   return (


//   <div className="window" style={{marginLeft: '5em',width: 300 }}>
  

//     <form className='user-form' onSubmit={handleSubmit}>

//       <h2>Login</h2>

//       <input type="text"
//       onChange={e => setUser(e.target.value)}
//       value={user}
//       placeholder='username'
//       />

//       <input type="password"
//       onChange={e => setPassword(e.target.value)}
//       value={password}
//       placeholder='password'
//       />

//       <input type="submit"
//       value='Login'
//       />

//     </form>
//     <div>

//     </div>
//     </div>
//   )

// }

// export default Login
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; // Import the useUser hook

function Login() {
  const { setCurrentUser } = useUser();  // Get setCurrentUser from the UserContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      },
      body: JSON.stringify({ user: username, password })  // Match the expected structure in the backend
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          console.log('Logged in user:', user);
          setCurrentUser(user);  // Update the current user in context
          navigate('/');  // Redirect to the home page or another route after login
        });
      } else {
        alert('Invalid username or password');
      }
    })
    .catch(err => {
      console.error('Login error:', err);
      alert('Something went wrong, please try again');
    });
  }

  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input 
          type="text" 
          onChange={e => setUsername(e.target.value)} 
          value={username} 
          placeholder="Username" 
        />

        <input 
          type="password" 
          onChange={e => setPassword(e.target.value)} 
          value={password} 
          placeholder="Password" 
        />

        <input 
          type="submit" 
          value="Login" 
        />
      </form>
    </div>
  );
}

export default Login;
