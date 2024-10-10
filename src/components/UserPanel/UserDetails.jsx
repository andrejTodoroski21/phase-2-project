function UserDetails({currentUser, setCurrentUser}){

        function handleLogOut(){
            setCurrentUser(null);
            fetch("/api/logout", {method:"DELETE"})
        }

        return(
            <div>
                <h1>User Details</h1>
                {/* <p>Welcome, {currentUser.username}!</p> */}
                <p>{console.log(currentUser)}</p>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        )
}

export default UserDetails


