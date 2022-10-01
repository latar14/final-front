import React, { useState } from 'react';
import Auth from '../../components/Auth/Auth';
import Login from '../../components/Login/Login';

const MainPage = () => {

    const [activeAuth, setActiveAuth] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);

    return (
        <>
        <button onClick={() => setActiveAuth(true)}>Create my account</button>
        <button onClick={()=> setActiveLogin(true)}>Sign in</button>
        <Auth activeAuth={activeAuth} setActiveAuth={setActiveAuth}/>
        <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin}/>
        </>
    );
};

export default MainPage;