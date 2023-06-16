import styles from "../styles/about.module.css";
const Complain = () => {
  return (
    <div className={styles.complain}>
      <h1>send a complain</h1>
      <form className={styles.complainForm}>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <input placeholder="user name"></input>
        <br></br>
        <button className={styles.btn}>submit</button>
      </form>
    </div>
  );
};

export default Complain;
