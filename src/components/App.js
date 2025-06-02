import React from "react";

function App() {
  const handleClick = () => alert('Button clicked!');
  const handleChange = (e) => console.log(e.target.value);

  return (
    <div className="app-container">
      <h1>JSX Keyword Replacement Challenge</h1>
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