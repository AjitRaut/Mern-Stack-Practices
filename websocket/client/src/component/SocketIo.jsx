import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const SocketIo = () => {
    const [socketid , setsocketid] = useState('');
  useEffect(() => {
    socket.on("connection", () => {
      console.log("connected user ", socket.id);

    });
  }, []);

  return (
    <>
      <h1>Wlcome to socket io</h1>
    </>
  );
};

export default SocketIo;
