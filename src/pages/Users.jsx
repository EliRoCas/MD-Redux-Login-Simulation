import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/usersSlice";

import "./users.scss";
import { FaTrashAlt } from "react-icons/fa";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleRemove = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div className="users">
      <h2>My Classmates</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.documentType} - {user.name} {user.lastname} - {user.email}
            <button onClick={() => handleRemove(user.id)}>
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
