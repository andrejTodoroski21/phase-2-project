import React, { useState, useEffect, createContext, useContext } from 'react';

// Create a context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch the current session
    fetch('/api/get-session')
      .then(response => {
        if (response.status === 200) {
          response.json().then(loggedInUser => setCurrentUser(loggedInUser));
        }
      });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
