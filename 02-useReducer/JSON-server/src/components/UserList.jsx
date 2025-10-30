export default function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h3>User List</h3>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ margin: "0.5rem 0" }}>
              <strong>{user.name}</strong> — {user.email}
              <button
                style={{ marginLeft: "0.5rem" }}
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                style={{ marginLeft: "0.5rem" }}
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
