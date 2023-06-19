import { useState,useEffect } from "react";
const Toast = ({ message, bgcolor }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={show ? "toast" : "toast-disappear"}
    style={{background:bgcolor}}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
