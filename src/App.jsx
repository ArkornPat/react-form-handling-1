import { useState } from "react";
import "./App.css";

function App() {
  const [textGreeting, setTextGreeting] = useState("Greeting Message")
  const [onChangeMsg , setOnChangeMsg] = useState("")
  return (
    <div className="App">
      <div className="greeting-container">{textGreeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={(e)=>setOnChangeMsg(e.target.value)} />
      </div>

      <div className="buttons">
        <button onClick={()=>setTextGreeting(onChangeMsg)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
