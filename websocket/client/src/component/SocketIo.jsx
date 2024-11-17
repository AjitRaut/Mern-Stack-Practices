import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import RoomSocket from "./RoomSocket";

const socket = io("http://localhost:5000");

const SocketIo = () => {
  const [socketid, setsocketid] = useState("");
  const [message, setmessage] = useState("");
  const [client, setclient] = useState("");
  const [roomName, setroomName] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected user ", socket.id);
      setsocketid(socket.id);
    });

    socket.on("chat-message", (data) => {
      console.log("received meesage", data);
      setmessages((messages) => [...messages, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat-message");
    };
  }, []);

  const handleRoomsubmit = (e) => {
    e.preventDefault();

    socket.emit("join-room", roomName);
    setroomName("");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    socket.emit("chat-message", { message, client });
    setmessage("");
  };

  return (
    <>
      <h1>Wlcome to socket io {socketid}</h1>
      <RoomSocket
        handleRoomsubmit={handleRoomsubmit}
        roomName={roomName}
        setroomName={setroomName}
      />
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
        <div>
          {messages.map((m, index) => (
            <div key={index}>
              <p>{m}</p>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default SocketIo;
