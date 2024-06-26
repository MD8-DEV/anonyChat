import './App.css';
import { useState } from "react";

function Message(props){
  return (
    <div>
      {props.content}
    </div>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [msgs, setMsgs] = useState([])
  const ws = new WebSocket('ws://localhost:8080');
  ws.onmessage = (msg) => {
    setMsgs([...msgs, msg.data])
  }
  return (
    <div className="App">
      <h1>SomeRandomShadyWebsiteThatWillCertainllyHackYou</h1>
      <input type="input" value={search} onChange={
        e => {
          setSearch(e.target.value)
          }}/>
      <button onClick={_ => ws.send(search)}>send</button>
        {msgs.map(msg => Message({content: msg}))}
    </div>
  );
}

export default App;
