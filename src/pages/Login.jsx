import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.users);

  const handleSubmit = ($event) => {
    $event.preventDefault();
    const email = $event.target.email.value;
    const password = $event.target.password.value;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      dispatch(login());
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

export default Login;
