import { useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducer";
import { useState } from "react";
import { useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editUser, setEditUser] = useState(null);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data.slice(0, 5) });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      dispatch({ type: "ADD_USER", payload: { ...data, id: Date.now() } });
    } catch (err) {
      alert("Error adding user");
    }
  };

  const updateUser = async (user) => {
    try {
      const res = await fetch(`${API_URL}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      dispatch({ type: "UPDATE_USER", payload: { ...data, id: Date.now() } });
    } catch (err) {
      alert("Error updating user");
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      dispatch({ type: "DELETE_USER", payload: id });
    } catch (err) {
      alert("Error deleting user");
    }
  };

  return (
    <div>
      <h2>User Manager (useReducer + API)</h2>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editUser={editUser}
        setEditUser={setEditUser}
      />
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <UserList
        users={state.users}
        deleteUser={deleteUser}
        setEditUser={setEditUser}
      />
    </div>
  );
}

export default App;
