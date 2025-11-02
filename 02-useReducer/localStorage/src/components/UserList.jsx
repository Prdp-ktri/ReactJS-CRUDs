const UserList = ({ state, dispatch, setEditUser }) => {
  if (state.length === 0) return <p>No users added yet.</p>;

  return (
    <div>
      {state.map((user) => (
        <div key={user.id}>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <div>
            <button onClick={() => setEditUser(user)}>Edit</button>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_USER", payload: user.id })
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
