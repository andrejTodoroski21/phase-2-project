import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

function UserDetails() {
  const { currentUser, setCurrentUser } = useUser();  // Access the currentUser and setCurrentUser from context
  const navigate = useNavigate();

  function handleLogOut() {
    setCurrentUser(null);  // Clear the current user

    // Log out request to the backend
    fetch("/api/logout", { method: "DELETE" })
      .then(() => {
        navigate("/login");  // Redirect to login page
      });
  }

  // Return null if currentUser is not available
  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className='user-profile'>
      <h1>Account</h1>
      <p>Welcome, {currentUser.username}!</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default UserDetails;
