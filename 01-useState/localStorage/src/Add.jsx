import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navi = useNavigate();

  const addUser = (e) => {
    e.preventDefault();

    const newUser = {id: Date.now(), name, email};

    const existingUser = JSON.parse(localStorage.getItem("users")) || [];

    existingUser.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUser));

    setName("");
    setEmail("");
    alert("User added successfully!");
    navi("/display");
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          name=""
          onChange={(e) => setName(e.target.value)}
          id=""
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          name=""
          onChange={(e) => setEmail(e.target.value)}
          id=""
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Add;
