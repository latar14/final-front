import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '../Header/header.module.css'

const Header: React.FC = (): any => {
    return (
        <div className={styled.head}>
            <div>
                <div className={styled.navImg}><img className={styled.img} src='https://lyonturnbull.blob.core.windows.net/site-images/LT_Logo.png' alt="" /></div>
            </div>
            <div className={styled.mainDrop}>
                <ul className={styled.dropMenu}>
                    AUCTIONS
                    <div className={styled.dropContent}>
                        <Link to={'/'}>Forthcoming Auctions</Link>
                        <Link to={'/'}>Selling at Auction</Link>
                        <Link to={'/'}>Buying at Auction</Link>
                        <Link to={'/'}>Specialist Directory</Link>
                        <Link to={'/'}>Forthcoming Auctions</Link>
                    </div>
                </ul>
                <ul className={styled.dropMenu}>
                    DEPARTMENTS
                    <div className={styled.dropContent}>
                        <Link to={'/'}>View all Departments</Link>
                        <Link to={'/'}>Specialists Directory</Link>
                        <Link to={'/'}>Private Art Collections</Link>
                        <Link to={'/'}>Corporate Art Collection</Link>
                    </div>
                </ul>
                <ul className={styled.dropMenu}>
                    SERVICES
                    <div className={styled.dropContent}>
                        <Link to={'/'}>Valuation Services</Link>
                        <Link to={'/'}>Request an Auction Estimate</Link>
                        <Link to={'/'}>Private and Corporate Art Collections</Link>
                        <Link to={'/'}>Private Sales</Link>
                        <Link to={'/'}>Events and Partnerships</Link>
                    </div>
                </ul>
                <ul className={styled.dropMenu}>
                    DISCOVER
                    <div className={styled.dropContent}>
                        <Link to={'/'}>About</Link>
                        <Link to={'/'}>Our Team</Link>
                        <Link to={'/'}>Locations</Link>
                        <Link to={'/'}>Events Calendar</Link>
                        <Link to={'/'}>Publications</Link>
                    </div>
                </ul>
                <ul className={styled.dropMenu}>
                    SIGN IN/REGISTER
                    <div className={styled.dropContent}>
                        <Link to={'/'}>Sign In</Link>
                        <Link to={'/'}>Register</Link>
                    </div>
                </ul>
                <div className={styled.container}>
                    <input type="text" placeholder='Search' />
                    <div className={styled.search}></div>
                </div>
            </div>
        </div>
    );
};

export default Header;