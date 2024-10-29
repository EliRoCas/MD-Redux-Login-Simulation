import { useDispatch } from "react-redux";
import { login } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import "./login.scss"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ($event) => {
    $event.preventDefault();
    dispatch(login());
    navigate("/home")
  }

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
    </div >
  );
};


export default Login;
