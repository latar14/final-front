import React from 'react';
import {FaBeer} from 'react-icons/fa'
import {FaRocket} from 'react-icons/fa'
import {IoMdHome} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import {RiAuctionFill} from 'react-icons/ri'
import {FaHistory} from 'react-icons/fa'
import styled from '../UserProfile/UserProfile.module.css'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';



const UserProfile = ()  => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
    return (
        <>
        <Header/>
        <h4 className={styled.textMyAuc}>My Auctions</h4>
        <div className={styled.main}>
            <div className={styled.iconsMain}>
                <div className={styled.userBlock}>
                    <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/thumbs/1649232757_36-vsegda-pomnim-com-p-pustoe-litso-foto-43.jpg" alt="" />
                    <span>User Userov</span>
                </div>
            <div className={styled.allicons}>
                <span  onClick={handleClick}><RiAuctionFill className={styled.oneIcon}/></span>
                <span><IoMdHome className={styled.oneIcon}/></span>
                <span><FaBeer className={styled.oneIcon} onClick={handleClick} /></span>
                <span><FaRocket className={styled.oneIcon} /></span>
                <span><FaHistory className={styled.oneIcon}/></span>
            </div>
            <div className={styled.iconsText}>
                <Link className={styled.oneLink} to='/'>Home</Link>
                <Link className={styled.oneLink} to='/'>Auctions</Link>
                <Link className={styled.oneLink} to='/'>Settings</Link>
                <Link className={styled.oneLink} to='/'>History</Link>
            </div>
            </div>
            <div className={styled.mainInfoB}>
                <div>
                    <ul className={styled.infoBids}>
                        <li className={styled.lis}>№</li>
                        <li className={styled.lis}>Auction</li>
                        <li className={styled.lis}>Time</li>
                        <li className={styled.lis}>Status</li>
                    </ul>

                    <hr />
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    );
};

export default UserProfile;