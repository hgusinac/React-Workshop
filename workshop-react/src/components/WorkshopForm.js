import React from "react";
import { useState } from "react";

const WorkshopForm = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <h1>Username is : {userName}</h1>
      <h1>Password is : {password}</h1>
      <input
        value={userName}
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </form>
  );
};

export default WorkshopForm;
