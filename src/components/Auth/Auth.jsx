import React, { useState } from "react";
import styles from "./auth.module.css";
import icon from "../../images/email-icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Auth = ({ activeAuth, setActiveAuth }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const [validatorError, setValidatorError] = useState(false);
  const [validatorErrorMessage, setValidatorErrorMessage] = useState("");

  const inputValidator = ({ firstName, lastName, email, password }) => {
    if (firstName === "") {
      setValidatorError(true);
      setValidatorErrorMessage("Все поля должны быть заполнены!");
      return false;
    } else if (lastName === "") {
      setValidatorError(true);
      setValidatorErrorMessage("Все поля должны быть заполнены!");
      return false;
    } else if (email === "") {
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
  const handleAuth = async (e, { firstName, lastName, email, password }) => {
    e.preventDefault();
    if (inputValidator({ firstName, lastName, email, password })) {
      toast.info(
        "Мы отправили вам на почту сообщение, пожалуйста подтвердите ваш аккаунт.",
        {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          icon: ({ theme, type }) => (
            <img
              style={{
                width: "26px",
                height: "26px",
                backgroundColor: "transparent",
              }}
              src={icon}
              alt='mail'
            />
          ),
          color: "red",
        }
      );

      try {
        const url = "http://localhost:3030/user/auth";
        const { data: res } = await axios.post(url, {
          firstName,
          lastName,
          email,
          password,
        });
        setMsg(res.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }
  };

  return (
    <>
      <ToastContainer limit={1} />
      <div
        className={activeAuth ? styles.nomodal : styles.modal}
        onClick={() => setActiveAuth(false)}
      >
        <form
          className={styles.formController}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.formText}>
            <h1>Create my account</h1>
            <p> Enter your details to get started. </p>
          </div>

          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            onClick={() => setValidatorError(false)}
            placeholder="First name"
          />

          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            onClick={() => setValidatorError(false)}
            placeholder="Last name"
          />

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
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onClick={() => setValidatorError(false)}
            placeholder="Password"
          />
          {validatorError
            ? validatorErrorMessage && (
                <h6 className={styles.validatorError}>
                  {validatorErrorMessage}
                </h6>
              )
            : null}
          {error && <div className={styles.error_msg}>{error}</div>}
          {msg && <div className={styles.success_msg}>{msg}</div>}
          <button
            onClick={(e) =>
              handleAuth(e, { firstName, lastName, email, password })
            }
            className={styles.btn}
          >
            Submit
          </button>

          <a href="/">You already have an account?</a>
        </form>
      </div>
    </>
  );
};

export default Auth;
