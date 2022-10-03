import React, { useEffect, useState } from 'react';
import Auth from '../../components/Auth/Auth';
import Login from '../../components/Login/Login';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3030");

const MainPage = () => {
    const [mes, setMes] = useState('');
    const [activeAuth, setActiveAuth] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);

    const handle = (mes) => {
        socket.emit("send", { mes });
    }

    useEffect(() => {
        socket.on("receive", (data) => {
            console.log(data.mes)
        })
    })

    return (
        <>
            <button onClick={() => setActiveAuth(true)}>Create my account</button>
            <button onClick={() => setActiveLogin(true)}>Sign in</button>
            <Auth activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
            <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
            <input value={mes} onChange={(e) => setMes(e.target.value)} onClick={() => { handle() }} />
        </>
    );
};

export default MainPage;