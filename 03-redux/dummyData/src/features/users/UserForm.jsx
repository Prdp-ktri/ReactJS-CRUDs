import React, { useState } from "react";
import { addUser, updateUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState({ name: "", email: "" });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) {
      alert("Please fill all the fields!");
      return;
    }

    if (editMode) {
      dispatch(updateUser({ id: editId, ...user }));
      setEditMode(false);
      setEditId(null);
    } else {
      dispatch(addUser({ id: Date.now(), ...user }));
    }
    setUser({ name: "", email: "" });
  };

  const handleEdit = (id) => {
    const existing = users.find((u) => u.id === id);
    if (existing) {
      setUser({ name: existing.name, email: existing.email });
      setEditMode(true);
      setEditId(id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user.name}
        name=""
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        id=""
      />{" "}
      <br />
      <input
        type="email"
        value={user.email}
        name=""
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        id=""
      />{" "}
      <br />
      <button type="submit">{editMode ? "Update User" : "Add USer"}</button>
      {users.map((user) => (
        <div key={user.id}>
          <button onClick={() => handleEdit(user.id)}>Edit {user.name}</button>
        </div>
      ))}
    </form>
  );
};

export default UserForm;
