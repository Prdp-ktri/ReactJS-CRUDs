export default function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h3>User List</h3>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                padding: "0.5rem",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                <strong>{user.name}</strong> — {user.email}
              </span>
              <span>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button
                  onClick={() => onDelete(user.id)}
                  style={{ marginLeft: "0.5rem" }}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
