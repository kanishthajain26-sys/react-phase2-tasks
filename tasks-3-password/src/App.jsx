import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <h1>Show / Hide Password</h1>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default App;