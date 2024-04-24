import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Chat from "./chat";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  console.log(name);
  console.log(room);
  const signIn = () => {
    name && room ? navigate(`/Chat?name=${name}&room=${room}`) : null;
  };

  return (
    <div className="join-section bg-lime-200 h-screen w-full ">
      <div className="container flex flex-col justify-center items-center h-screen w-full p-10    ">
        <div className="1 rounded-md">
          <input
            type="text"
            id="name"
            className="name-field"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="2">
          <input
            type="text"
            id="room"
            className="room-field"
            placeholder="Enter Room"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="btn " onClick={signIn}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
export default Join;
