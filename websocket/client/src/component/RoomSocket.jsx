import React from "react";

const RoomSocket = ({ handleRoomsubmit, roomName, setroomName }) => {
  return (
    <>
      <form onSubmit={handleRoomsubmit}>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setroomName(e.target.value)}
          required
        />
        <button type="submit">join</button>
      </form>
    </>
  );
};

export default RoomSocket;
