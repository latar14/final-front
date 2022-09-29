import React, { useState } from "react";
import styles from "./auth.module.css";
import icon from '../../images/email-icon.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

const Auth = ({ activeAuth, setActiveAuth }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validatorError, setValidatorError] = useState(false);
  const [validatorErrorMessage, setValidatorErrorMessage] = useState("")

  const inputValidator = ( {firstName, lastName, email, password} ) => {
    if (firstName === "") {
      setValidatorError(true);
      setValidatorErrorMessage('Все поля должны быть заполнены!')
      return false;
    }
    else if (lastName === "") {
        setValidatorError(true);
        setValidatorErrorMessage('Все поля должны быть заполнены!')
        return false;
    } else if (email === "") {
        setValidatorError(true);
        setValidatorErrorMessage('Все поля должны быть заполнены!')
        return false;
    } else if (password === "") {
        setValidatorError(true);
        setValidatorErrorMessage('Все поля должны быть заполнены!')
        return false;
    } else if (password.length < 8) {
        setValidatorError(true)
        setValidatorErrorMessage('Пароль должен быть минимум из 8 символов!')
        return false;
    }
    return true;
    
  };
  const handleAuth = (e, { firstName, lastName, email, password }) => {
    e.preventDefault();
    if(inputValidator({firstName, lastName, email, password})) {
        toast.info('Мы отправили вам на почту сообщение, пожалуйста подтвердите ваш аккаунт.', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            icon: ({theme, type}) =>  <img style={{width: '26px', height: '26px', backgroundColor: "transparent"}} src={icon}/>,
            color: 'red',
          });
        console.log(firstName, lastName, email, password )
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
            <h1>Создать аккаунт</h1>
            <p> Впишите свои данные, чтобы участвовать в аукционах.</p>
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onClick={() => setValidatorError(false)}
            placeholder="Password"
          />
          {validatorError ? (validatorErrorMessage && <h6 className={styles.validatorError}>{validatorErrorMessage}</h6> ) : null}
          <button
            onClick={(e) =>
              handleAuth(e, { firstName, lastName, email, password })
            }
            className={styles.btn}
          >
            Создать мой аккаунт
          </button>

          <a href="/">У вас уже есть аккаунт?</a>
        </form>
      </div>
    </>
  );
};

export default Auth;

