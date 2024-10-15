import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

function Login() {
  const { setCurrentUser } = useUser();
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
      body: JSON.stringify({ user: username, password })
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          console.log('Logged in user:', user);
          setCurrentUser(user);  
          navigate('/');
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
