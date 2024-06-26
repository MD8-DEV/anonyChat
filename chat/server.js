const websocket = require("ws")

const wsServer = new websocket.Server({port:8080})
connectedClients = []

wsServer.addListener("connection", (wsClient) => {
    connectedClients.push(wsClient)
    console.log(wsClient)
    wsClient.on('message', (msg) => {
        console.log(msg.toString())
        connectedClients.forEach(client => {
        if (client != wsClient){
            client.send(msg.toString())
        }
        });
    })
})

// import './App.css';
// import { useState, useEffect } from "react";
// import {WebSocket} from "ws"
// async function connectToServer() {
//   const ws = new WebSocket('ws://localhost:8080');
//   return new Promise((resolve) => {
//       const timer = setInterval(() => {
//           if(ws.readyState === 1) {
//               clearInterval(timer)
//               resolve(ws);
//           }
//       }, 10);
//   });
// }
// function App() {
//   const [search, setSearch] = useState('')
//   const [msgs, setMsgs] = useState([])
//   const ws = connectToServer()
//   ws.on("message", (msg) => {
//     setMsgs(prev => prev.push(msg.toString()))
//   })
//   return (
//     <div className="App">
//       <h1>SomeRandomShadyWebsiteThatWillCertainllyHackYou</h1>
//       <input type="input" value={search} onChange={
//         e => {
//           setSearch(e.target.value)
//           }}/>
//       <button onClick={_ => ws.send(search)}>send</button>
//         {msgs}
//     </div>
//   );
// }

// export default App;
