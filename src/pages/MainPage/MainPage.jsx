import React from 'react';
import Carousel from '../../components/Carousel/Swiper'
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