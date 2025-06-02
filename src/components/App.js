import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("JSX Keyword Replacement Challenge");

  const handleClick = () => alert("Button Clicked") // Or whatever the test expects
  const handleChange = (e) => console.log(e.target.value);

  return (
    <div className="app-container">
      <h1 onDoubleClick={() => setTitle("Double Clicked!")}>{title}</h1>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        maxLength={10}
        readOnly
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
