// styling
import styles from "./login.module.css";
// react
import { useEffect, useState, useRef } from "react";
// routing
import { NavLink, useNavigate } from "react-router-dom";
// uuid
import { v4 as uuidv4 } from "uuid";
const Signup = () => {
  //logged in user redirect
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
  const [isValiedMail, setIsValidMail] = useState(false);
  const [isValiedPassword, setIisValiedPassword] = useState(false);
  const warning = useRef();
  const passwordWarning = useRef();
  const mailWarning = useRef();
  let usersArray = [];
  if (JSON.parse(localStorage.getItem("users")) != null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
  }
  function signUp(e) {
    e.preventDefault();
    let duplicateCheck = usersArray.filter((user) => {
      return user.email == email;
    });
    if (duplicateCheck.length == 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailIsValid = emailRegex.test(email);
      if (!email || !emailIsValid) {
      mailWarning.current.style.display = "block";

      } else {
        setIsValidMail(true);
      }
      if (!password || password.length <= 5) {
        passwordWarning.current.style.display = "block";
      } else {
        setIisValiedPassword(true);
      }
      if (isValiedMail && isValiedPassword) {
        const user = {
          user_id: uuidv4(),
          email: email,
          password: password,
        };
        usersArray.push(user);
        localStorage.setItem("users", JSON.stringify(usersArray));
        localStorage.setItem("user_id", (user.user_id));
        navigate("/");
      }
    } else {
      warning.current.style.display = "block";
    }
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
          <p ref={mailWarning} className={styles.mailWarning}>
            Please enter valid mail
          </p>
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p ref={passwordWarning} className={styles.passwordWarning}>
            password must be more than 5 characters
          </p>
          <p ref={warning} className={styles.warning}>
            already used email
          </p>
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
