import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { initialState, reducer } from "./reducer";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <div>
        <h2>User Manager</h2>
        <UserForm
          dispatch={dispatch}
          editUser={editUser}
          setEditUser={setEditUser}
        />
        <UserList state={state} dispatch={dispatch} setEditUser={setEditUser} />
      </div>
    </>
  );
}

export default App;
