import { useEffect, useState } from "react";

const UserForm = ({ dispatch, editUser, setEditUser }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editUser) setUser(editUser);
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return alert("Please fill all fields");

    if (editUser) {
      dispatch({ type: "UPDATE_USER", payload: user });
      setEditUser(null);
    } else {
      dispatch({ type: "ADD_USER", payload: { ...user, id: Date.now() } });
    }
    setUser({ name: "", email: "" });
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
      <button type="submit">{editUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
