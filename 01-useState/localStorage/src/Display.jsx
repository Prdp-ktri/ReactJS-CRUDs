import React, { useEffect, useState } from "react";

function Display() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setUsers(storedUsers);
  }, []);

  const deleteUser = () => {
    
  }

  return (
    <div>
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={deleteUser}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
