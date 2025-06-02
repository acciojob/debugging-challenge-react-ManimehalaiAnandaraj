import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("Replacement Challenge");
  const [username, setUsername] = useState("");

  const handleClick = () => alert("Button Clicked!"); // Alert on button click
  const handleChange = (e) => {
    setUsername(e.target.value); // Update the username state
    console.log(e.target.value);
  };

  return (
    <div className="app-container">
      <h1 onDoubleClick={() => setTitle("Double Clicked!")}>{title}</h1>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        maxLength={10}
        value={username} // Controlled input
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;