import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();

    // 1. Create a new user object with a unique ID (timestamp works well)
    const newUser = { id: Date.now(), name, email };

    // 2. Retrieve existing users from localStorage or start a new empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 3. Add the new user to the array
    existingUsers.push(newUser);

    // 4. Save the updated array back to localStorage as a JSON string
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Clear form and navigate
    setName("");
    setEmail("");
    alert("User added successfully!");
    // Redirect the user to the display list after submission
    navigate("/display");
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={addUser}>
        <div>
          <label htmlFor="name" style={{ marginRight: "10px" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email" style={{ marginRight: "10px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Submit User</button>
      </form>
    </div>
  );
}

export default Add;
