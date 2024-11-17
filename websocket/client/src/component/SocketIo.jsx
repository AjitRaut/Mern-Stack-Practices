import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const SocketIo = () => {
  const [socketid, setsocketid] = useState("");
  const [message, setmessage] = useState("");
  const [client , setclient] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected user ", socket.id);
      setsocketid(socket.id);
    });

    socket.on("chat-message" , (data)=>{
        console.log("received meesage",data)
    })

    return () => {
      socket.off("connect");
      socket.off("chat-message");
    };
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    socket.emit("chat-message", {message , client});
    setmessage("");
    setclient("");
  };

  return (
    <>
      <h1>Wlcome to socket io {socketid}</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
        </div>
        <div>
        <input
            type="text"
            value={client}
            onChange={(e) => setclient(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">send</button>
        </div>
      </form>
    </>
  );
};

export default SocketIo;
