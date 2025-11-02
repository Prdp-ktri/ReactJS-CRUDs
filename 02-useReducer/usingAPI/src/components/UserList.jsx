const UserList = ({ users, deleteUser, setEditUser }) => {
  if (users.length === 0) return <p>No users available.</p>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
          <div>
            <button onClick={() => setEditUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
