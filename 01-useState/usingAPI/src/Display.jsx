import React, { useEffect, useState } from "react";

function Display() {
  const [users, setUsers] = useState([]);
  // State to manage which user ID is currently in edit mode
  const [editingUserId, setEditingUserId] = useState(null);
  // States to manage input values during editing
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  };

  const deleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      // If the deleted user was the one being edited, cancel editing mode
      if (editingUserId === userId) {
        setEditingUserId(null);
      }
    }
  };

  const startEditing = (user) => {
    setEditingUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const cancelEditing = () => {
    setEditingUserId(null);
    setEditName("");
    setEditEmail("");
  };

  const saveEdit = (userId) => {
    // Basic validation
    if (!editName.trim() || !editEmail.trim()) {
      alert("Name and Email cannot be empty.");
      return;
    }

    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, name: editName.trim(), email: editEmail.trim() };
      }
      return user;
    });

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    cancelEditing(); // Exit edit mode
  };

  return (
    <div>
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                {/* Conditional rendering for edit mode */}
                {editingUserId === user.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <button onClick={() => saveEdit(user.id)}>Save</button>
                    </td>
                    <td>
                      <button onClick={cancelEditing}>Cancel</button>
                    </td>
                  </>
                ) : (
                  // Display mode
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => startEditing(user)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
