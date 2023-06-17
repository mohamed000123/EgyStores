// styling
import styles from "./login.module.css";
// react
import { useEffect, useState } from "react";
// routing
import {  Navigate , NavLink} from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountCheck, setAccountCheck] = useState(false);

  let usersArray = [];
  if (JSON.parse(localStorage.getItem("users")) != null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
  }
  console.log(usersArray);
  function signUp(e) {
    e.preventDefault();
      let duplicateCheck = usersArray.filter((user) => {
      return user.email == email;
    });
    if (duplicateCheck.length == 0) {
      const user = {
        user_id: Date.now(),
        email: email,
        password: password,
      };
      usersArray.push(user);
      localStorage.setItem("users", JSON.stringify(usersArray));
      localStorage.setItem("user_id", JSON.stringify(user.user_id));
      setAccountCheck(true)
    } else {
      alert("already used email ");
    }
  }
  if (accountCheck) {
    return <Navigate to="/home" />;
  }
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h3>Sign Up Here</h3>
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
          <button id="btn" onClick={signUp}>
            Sign Up
          </button>
          <NavLink to="/">already have account?</NavLink>
        </form>
      </div>
    </>
  );
};

export default Signup;
