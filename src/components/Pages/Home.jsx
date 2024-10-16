// import React from "react";

// function Home(){
//   return (
//     <div>
//       <video autoPlay muted loop id="home-video">
//         <source src="https://assets.newyorksportsclubs.com/wp-content/uploads/2023/10/04072014/Sizzle-Reel-60-second.mp4" type="video/mp4" />
//       </video>
//       <div id="text-overlay">
//         <h1>Build your better self</h1>
//       </div>
//     </div>
//   )
// }

// export default Home
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/login");
  }
  return (
    <div className="home-container">
      <video autoPlay muted loop id="home-video">
        <source src="https://assets.newyorksportsclubs.com/wp-content/uploads/2023/10/04072014/Sizzle-Reel-60-second.mp4" type="video/mp4" />
      </video>

      <div className="overlay-text">
        <h1 className="hero-text">Build a better you</h1>
        <button className="program-btn" onClick={redirect}>Start Your Program</button>
      </div>
    </div>
  )
}

export default Home;
