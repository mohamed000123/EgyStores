// react
import { useEffect, useState ,useRef} from "react";
// styling
import styles from "./login.module.css";
// routing
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  // logged in user redirect
  const navigate = useNavigate();
  useEffect(() => {
    const userid = localStorage.getItem("user_id");
    if (userid) {
      navigate("/");
    }
  }, []);
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const warning = useRef();
  let usersArray = [];
  if (JSON.parse(localStorage.getItem("users")) != null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
  }
  // login
  function login(e) {
    e.preventDefault();
    let user = usersArray.filter((user) => {
      return user.email === email && user.password === password;
    });
    if (user.length == 1) {
      const user_id = user[0].user_id;
      localStorage.setItem("user_id", JSON.stringify(user_id));
      navigate("/");
    } else {
      warning.current.style.display = "block";
    }
  }

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h3>Login Here</h3>
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p ref={warning} className={styles.warning}>
            wrong password or email
          </p>
          <button id="loginBtn" onClick={login}>
            Log In
          </button>
          <NavLink to="/signup">don't have account?</NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
