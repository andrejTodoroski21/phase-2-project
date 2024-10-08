// import React from "react";
// import { useState } from "react";

// function CreateProgram(){
//     const [name, setName] = useState("")
//     const [message, setMessage] = useState("")

//     const handleCreateProgram = (e) => {
//         e.preventDefault();

//         fetch("api/programs",{
//             method: "Post",
//             headers:{
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({name}),
//         })
//         .then((response)=> response.json())
//         .then((data)=> {
//             if(data.error){
//                 setMessage(data.error)
//             }else{
//                 setMessage("program successfully created ")
//                 setName("");
//             }
//         })
//         .catch((error) =>{
//             console.error("Error creating program: ", error)
//             setMessage("An error occurred while creating the program")
//         });
//     };
//     return (
//         <div>
//           <h2>Create a New Program</h2>
//           <form onSubmit={handleCreateProgram}>
//             <label htmlFor="program-name">Program Name:</label>
//             <input
//               type="text"
//               id="program-name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <button type="submit">Create Program</button>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       );
// }
// export default CreateProgram;

import React, { useState } from "react";

function CreateProgram() {
  const [isOpen, setIsOpen] = useState(false);  // Controls modal visibility
  const [name, setName] = useState("");         // Stores program name
  const [message, setMessage] = useState("");   // Feedback message

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleCreateProgram = (e) => {
    e.preventDefault();

    fetch("/api/programs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setMessage(data.error);
        } else {
          setMessage("Program created successfully!");
          setName("");  // Reset form after success
          closeModal();  // Close the modal after submission
        }
      })
      .catch((error) => {
        console.error("Error creating program:", error);
        setMessage("Failed to create program.");
      });
  };

  return (
    <div>
      <button onClick={openModal}>+ NEW</button>  {/* Button to trigger modal */}

      {/* Modal */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span> {/* Close button */}
            <h2>Create a New Program</h2>
            <form onSubmit={handleCreateProgram}>
              <label htmlFor="program-name">Program Name:</label>
              <input
                type="text"
                id="program-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      )}

      {/* Add styles for the modal */}
      <style jsx="true">{`
        .modal {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
          background-color: #fff;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 300px;
          text-align: center;
        }
        .close {
          float: right;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default CreateProgram;
