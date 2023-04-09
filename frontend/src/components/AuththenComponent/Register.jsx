import { useState } from "react";
import "./authen.scss";
import { registerRequest, HOT_URL } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { userSlice } from "../../redux/reducer/userSlice";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    if (username.length <= 0 || email.length <= 0 || password <= 0) {
      return setErr("M nhập thiếu thông tin rồi kìa, nhập lại đi!!");
    }
    const newUser = {
      username,
      email,
      password,
    };
    // registerRequest(newUser, dispatch, navigate);
    dispatch(userSlice.actions.registerStart());
    axios
      .post(`${HOT_URL}/register`, newUser)
      .then((res) => {
        // console.log("register succes: ", res);
        dispatch(userSlice.actions.registerSuccess());
        navigate(`/login`);
      })
      .catch((err) => {
        dispatch(userSlice.actions.registerFailed());
      });
    setErr("");
  };
  return (
    <div className="register">
      <div className="text1">
        <span className="text-login">Sign Up</span>
        <p className="text-enter">Create your account to get full access</p>
        <p className="text-enter" style={{ color: "red" }}>
          {err}
        </p>
      </div>
      <div className="input-box">
        <div className="single-input-fields">
          <label>Username</label> <br />
          <input
            className="input"
            type="text"
            placeholder="Enter fullname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="single-input-fields">
          <label>Email</label> <br />
          <input
            className="input"
            type="text"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="single-input-fields">
          <label>Password</label> <br />
          <input
            className="input"
            type="text"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="login-footer">
        <div className="left">
          <p className="sign-up">
            <span className="dont">Already have an account?</span>

            <Link to={"/login"} className="signup">
              Login
            </Link>
            <span>here</span>
          </p>
        </div>

        <div className="right">
          <button className="submit-btn3" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
