import React, { useState } from 'react';
import Auth from '../../components/Auth/Auth';
import Login from '../../components/Login/Login';
import Carousel from '../../components/Carousel/Carousel'
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const MainPage = () => {
    const [activeAuth, setActiveAuth] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);

    return (
        <>
            <button onClick={() => setActiveAuth(true)}>Create my account</button>
            <button onClick={() => setActiveLogin(true)}>Sign in</button>
            <Auth activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
            <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
            <Header />
            <Carousel />
            <Main />
            <Footer />
        </>
    );
};

export default MainPage;