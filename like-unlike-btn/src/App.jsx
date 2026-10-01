import { useState } from "react";
import "./App.css";

function App() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <h1>Like / Unlike ❤️</h1>

        <div className="post">
          <h2>My First React Post</h2>
          <p>
            React is fun! Keep learning and building new projects 🚀
          </p>
        </div>

        <p className="message">
          {liked ? "You liked this post! ❤️" : "Do you like this post?"}
        </p>

        <button
          className={liked ? "liked" : ""}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️ Unlike" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
}

export default App;