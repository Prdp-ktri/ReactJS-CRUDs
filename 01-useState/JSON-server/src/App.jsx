import { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = "http://localhost:5000/users";

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add or Update user
  const handleSave = async (user) => {
    try {
      if (user.id) {
        // Update existing user
        const res = await axios.put(`${API}/${user.id}`, user);
        setUsers(users.map((u) => (u.id === user.id ? res.data : u)));
        setSelectedUser(null);
      } else {
        // Add new user
        const res = await axios.post(API, user);
        setUsers([...users, res.data]);
      }
    } catch (err) {
      setError("Failed to save user.");
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      setError("Failed to delete user.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>React CRUD (useState + JSON Server)</h2>
      <UserForm onSave={handleSave} selectedUser={selectedUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
