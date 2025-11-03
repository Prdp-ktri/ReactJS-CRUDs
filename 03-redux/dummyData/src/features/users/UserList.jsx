import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./userSlice";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if (users.length === 0) return <p>No users available</p>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <div>
            <button onClick={() => alert("Use the form to edit a user")}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
