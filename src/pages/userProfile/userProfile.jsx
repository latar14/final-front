import React, { useEffect } from 'react';
import {IoMdHome} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import {RiAuctionFill} from 'react-icons/ri'
import {FaHistory} from 'react-icons/fa'
import styled from '../userProfile/profile.module.css'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import {AiTwotoneSetting} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/productSlice';


const UserProfile = ()  => {

    const dispatch = useDispatch()
    const auctions = useSelector((state) => state.product.product)
  
    useEffect(() => {
      dispatch(fetchProduct())
    }, [dispatch])

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
                <span><AiTwotoneSetting className={styled.oneIcon} onClick={handleClick} /></span>
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
            <ul className={styled.infoBids}>
                        <li className={styled.lis}>Product</li>
                        <li className={styled.lis}>Auctions</li>
                        <li className={styled.lis}>Time</li>
                        <li className={styled.lis}>Price</li>
                    </ul>
                    <hr />
            {auctions.map((item) => {
                return (
                    <div>
                    <ul className={styled.infoBids2}>
                        <li className={styled.lisImg}><img src={item.image} alt="#" /></li>
                        <li className={styled.lisName}>{item.name}</li>
                        <li className={styled.lis2}></li>
                        <li className={styled.lis2}>{item.priceFinal}$</li>
                    </ul>
                    <hr />
                </div>
                )
            } )}
                
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    );
};

export default UserProfile;