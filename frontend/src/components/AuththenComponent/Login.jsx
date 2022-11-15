import { useState } from "react";
import "./authen.scss";
import { loginUser } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkUser = useSelector(userSelector);

  const [err, setErr] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (username.length <= 0 || password <= 0) {
      return setErr("M nhập thiếu thông tin rồi kìa, nhập lại đi!!");
    }
    const user = {
      username,
      password,
    };
    loginUser(user, dispatch, navigate);
    setErr("");
  };

  return (
    <div className="Login">
      <div className="text1">
        <span className="text-login">Login</span>
        <p className="text-enter" style={{ color: "red" }}>
          {err ||
            (checkUser.login.err === true
              ? "Thông tin tài khoản chưa đúng, nhập lại đi!!"
              : "")}
        </p>
      </div>
      <div className="input-box">
        <div className="single-input-fields">
          <label>Username</label> <br />
          <input
            className="input"
            id="username"
            value={username}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
              setErr("");
            }}
            name="username"
            required
            placeholder="Username"
          ></input>
        </div>
        <div className="single-input-fields">
          <label>Password</label> <br />
          <input
            className="input"
            id="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErr("");
            }}
            type="password"
            name="password"
            placeholder="Enter Password"
          ></input>
        </div>
        <div className="single-input-fields login-check">
          <input
            className="check-box"
            type="checkbox"
            id="fruit1"
            name="keep-log"
          ></input>
          <label htmlFor="fruit1">Keep me logged in</label>
          <a href="/" className="f-right">
            Forgot Password?
          </a>
        </div>
      </div>
      <div className="login-footer">
        <div className="left">
          <p className="sign-up">
            <span className="dont">Don't have an account?</span>

            <Link to={"/register"} className="signup">
              Sign Up
            </Link>
            <span>here</span>
          </p>
        </div>

        <div className="right">
          <button className="submit-btn3" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
