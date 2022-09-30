import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./emailVerify.module.css";
import axios from "axios"

const EmailVerifyPage = () => {

  const navigate = useNavigate();

  const [validUrl, setValidUrl] = useState(false);
  const [msg, setMsg] = useState({});
  const params = useParams();

  const handleNavigate = () => {
    navigate("/");
  };

  const verifyEmailUrl = async () => {
    try {
        const url = `http://localhost:3030/user/${params.id}/verify/${params.token}`
        const {data} = await axios.get(url)
        console.log(data)
        setMsg(data)
        setValidUrl(true)
    } catch (error) {
        console.log(error)
        setValidUrl(false)
    }
}

  useEffect(() => {
    verifyEmailUrl()
  },[setValidUrl])

  return (
    <div className={styles.container}>
      {validUrl ? (
        <div onClick={() => handleNavigate()}>{msg.message}</div>
      ) : (
        <h1>404 NOT FOUND</h1>
      )}
    </div>
  );
};

export default EmailVerifyPage;
