import React, { useState } from 'react';
import Auth from '../../components/Auth/Auth';
import Login from '../../components/Login/Login';
import Carousel from '../../components/Carousel/Carousel'
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const MainPage = () => {

    return (
        <>
            <Header/>
            <Carousel/>
            <Main/>
            <Footer/>
        </>
    );
};

export default MainPage;