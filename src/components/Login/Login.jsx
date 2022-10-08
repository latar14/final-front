import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../features/applicationSlice";
import styles from "./login.module.css";


const Login = ({ activeLogin, setActiveLogin }) => {

  
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [validatorError, setValidatorError] = useState(false);
  const [validatorErrorMessage, setValidatorErrorMessage] = useState("")

  const inputValidator = ({ email, password }) => {
    if (email === "") {
      setValidatorError(true);
      setValidatorErrorMessage("Все поля должны быть заполнены!");
      return false;
    } else if (password === "") {
      setValidatorError(true);
      setValidatorErrorMessage("Все поля должны быть заполнены!");
      return false;
    } else if (password.length < 8) {
      setValidatorError(true);
      setValidatorErrorMessage("Пароль должен быть минимум из 8 символов!");
      return false;
    }
    return true;
  };

  const handleAuth = (e, { email, password }) => {
    e.preventDefault();
    if (inputValidator({ email, password })) {
      dispatch(signInThunk({email, password}))
      setEmail("")
      setPassword("")
      setActiveLogin(false)
    }
  };

  return (
    <div
      className={activeLogin ? styles.nomodal : styles.modal}
      onClick={() => setActiveLogin(false)}
    >
      <form
        className={styles.formController}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.formText}>
          <h1>Sign in</h1>
          <p> If you have already created an account, please sign in below. </p>
        </div>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onClick={() => setValidatorError(false)}
          placeholder="Email address"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onClick={() => setValidatorError(false)}
          placeholder="Password"
        />
        {validatorError
          ? validatorErrorMessage && (
              <h6 className={styles.validatorError}>{validatorErrorMessage}</h6>
            )
          : null}
        <button
          onClick={(e) =>
            handleAuth(e, { email, password })
          }
          className={styles.btn}
        >
          Sign in
        </button>

        <a href="/">Forgot password?</a>
      </form>
    </div>
  );
};

export default Login;

