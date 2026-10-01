import {useState} from "react";
import "./App.css";

function App(){
  const[ text, setText] = useState("");


  return(
    <div className="container">
      <h1>Character Counter</h1>

      <textarea
      placeholder ="Type something..."
      value ={text}
      onChange ={(e) => setText(e.target.value)}
      />

      <p>Characters:{text.length}</p>
    </div>

  );
}
 export default App;
