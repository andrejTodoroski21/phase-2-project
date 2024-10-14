// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../UserContext';

// function Signup() {
//   const { setCurrentUser } = useUser();  // Get setCurrentUser from context
//   const [username, setUsername] = useState('');
//   const [_hashed_password, setPassword] = useState('');
//   const [first_name, setFirstName] = useState('');
//   const [last_name, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault();

//     fetch('/api/users', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//       body: JSON.stringify({ first_name, last_name, username, _hashed_password, email })
//     })
//     .then(response => {
//       if (response.ok) {
//         response.json()
//         .then(newUser => {
//           setCurrentUser(newUser);  // Set the currentUser using the context
//           navigate('/');  // Redirect to home
//         });
//       } else {
//         alert("Signup unsuccessful");
//       }
//     });
//   }

//   return (
//     <div>
//       <form className='user-form' onSubmit={handleSubmit}>
//         <h2>Signup</h2>

//         <input 
//           type="text"
//           onChange={e => setUsername(e.target.value)}
//           value={username}
//           placeholder='username'
//         />

//         <input 
//           type="text"
//           onChange={e => setFirstName(e.target.value)}
//           value={first_name}
//           placeholder='first name'
//         />

//         <input 
//           type="text"
//           onChange={e => setLastName(e.target.value)}
//           value={last_name}
//           placeholder='last name'
//         />

//         <input 
//           type="text"
//           onChange={e => setEmail(e.target.value)}
//           value={email}
//           placeholder="email"
//         />

//         <input 
//           type="password"
//           onChange={e => setPassword(e.target.value)}
//           value={_hashed_password}
//           placeholder='password'
//         />

//         <input type="submit" value='Signup' />
//       </form>
//     </div>
//   );
// }

// export default Signup;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';  // Import useUser hook

function Signup() {
  const { setCurrentUser } = useUser();  // Destructure setCurrentUser from context
  const [username, setUsername] = useState('');
  const [_hashed_password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ first_name, last_name, username, _hashed_password, email })
    })
    .then(response => {
      if (response.ok) {
        response.json()
        .then(newUser => {
          setCurrentUser(newUser);  // Use setCurrentUser from the context
          navigate('/');
        });
      } else {
        alert("Signup unsuccessful");
      }
    });
  }

  return (
    <form className='user-form' onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input type="text" onChange={e => setUsername(e.target.value)} value={username} placeholder='Username' />
      <input type="text" onChange={e => setFirstName(e.target.value)} value={first_name} placeholder='First Name' />
      <input type="text" onChange={e => setLastName(e.target.value)} value={last_name} placeholder='Last Name' />
      <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' />
      <input type="password" onChange={e => setPassword(e.target.value)} value={_hashed_password} placeholder='Password' />
      <input type="submit" value='Signup' />
    </form>
  );
}

export default Signup;
