// react
import { useEffect, useState } from "react";
// styling
import styles from "./login.module.css";
// routing
import { NavLink, Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchFound, setMatchFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let usersArray = [];
  if (JSON.parse(localStorage.getItem("users")) != null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
  }
  console.log(usersArray);

  // login
  function login(e) {
    e.preventDefault();
    let user = usersArray.filter((user) => {
      return user.email === email && user.password === password;
    });
    if (user.length == 1) {
      const user_id = user[0].user_id;
      localStorage.setItem("user_id", JSON.stringify(user_id));
      setMatchFound(true);
      setIsLoggedIn(true);
    } else {
      alert("wrong password or email");
    }
  }
  //  redirecting already logged in user
  useEffect(() => {
    window.history.replaceState(null, "", "/home");
  }, [isLoggedIn]);
  if (matchFound) {
    return <Navigate to="/home" />;
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
