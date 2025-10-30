import { useState, useEffect } from "react";

export default function UserForm({ onSave, selectedUser }) {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      onSave(user);
      setUser({ name: "", email: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1rem",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h3>{selectedUser ? "Edit User" : "Add User"}</h3>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <button type="submit">{selectedUser ? "Update" : "Add"}</button>
    </form>
  );
}
