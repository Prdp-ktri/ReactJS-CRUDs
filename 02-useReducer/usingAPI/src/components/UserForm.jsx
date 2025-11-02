import { useEffect } from "react";
import { useState } from "react";

const UserForm = ({ addUser, updateUser, editUser, setEditUser }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editUser) setUser(editUser);
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return alert("Please fill both the fields!");

    if (editUser) {
      updateUser(user);
      setEditUser(null);
    } else {
      addUser(user);
    }

    setUser({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      /> <br />
      <input
        type="email"
        value={user.email}
        name=""
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        id=""
      /> <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
