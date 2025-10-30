import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer, initialState } from "./reducer";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedUser, setSelectedUser] = useState(null);
  const API = "http://localhost:5000/users";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get(API);
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  const handleSave = async (user) => {
    if (user.id) {
      const res = await axios.put(`${API}/${user.id}`, user);
      dispatch({ type: "UPDATE_USER", payload: res.data });
      setSelectedUser(null);
    } else {
      const res = await axios.post(API, user);
      dispatch({ type: "ADD_USER", payload: res.data });
    }
  };

  const handleEdit = (user) => setSelectedUser(user);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    dispatch({ type: "DELETE_USER", payload: id });
  };

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "40px" }}>
      <h2>React CRUD (Vite + useReducer + JSON Server)</h2>
      <UserForm onSave={handleSave} selectedUser={selectedUser} />
      <UserList
        users={state.users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
