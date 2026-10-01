import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>

        <div className="count-box">
          <h2>{count}</h2>
        </div>

        <div className="buttons">
          <button
            className="minus"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            −
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        <div className="message">
          {count === 0 && <p>Start counting! 🚀</p>}
          {count >= 1 && count <= 5 && <p>Keep going! 💪</p>}
          {count > 5 && <p>Great job! 🎉</p>}
        </div>
      </div>
    </div>
  );
}

export default App;