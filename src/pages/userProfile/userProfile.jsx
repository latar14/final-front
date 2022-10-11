import React, { useEffect, useState } from 'react';
import {IoMdHome} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import {RiAuctionFill} from 'react-icons/ri'
import {GoSignOut} from 'react-icons/go'
import styled from '../userProfile/profile.module.css'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import {AiTwotoneSetting} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/productSlice';
import { fetchUsers } from '../../features/userSlice';


const UserProfile = ()  => {
    const [activ, setActive] = useState(true)

   const id = useSelector((state)=> state.application.id)
    const auctions = useSelector((state) => state.product.product)
    const purchased = useSelector((state) => state.user.user)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProduct())
        dispatch(fetchUsers())
      }, [dispatch])

    const filterProd = auctions.filter((item) => {
       return item.members.includes(id)
    }) // аукцион где участвует юзер

    const filterPurch = purchased.filter((item) => item._id === id) //выигранные аукционы



    const handleAucWin = () => {
        setActive(false)
    }
    const handleAuc = () => {
        setActive(true)
    }

    const handleClick = () => {
        navigate('/')
    }
    return (
<div>
    {activ ? (
        <div><Header/>
        <h4 className={styled.textMyAuc}>My Auctions</h4>
        <div className={styled.main}>
            <div className={styled.iconsMain}>
                <div className={styled.userBlock}>
                    <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/thumbs/1649232757_36-vsegda-pomnim-com-p-pustoe-litso-foto-43.jpg" alt="" />
                    <span>User Userov</span>
                </div>
            <div className={styled.allicons}>
                <span  onClick={handleClick}><RiAuctionFill className={styled.oneIcon}/></span>
                <span><RiAuctionFill className={styled.oneIcon}/></span>
                <span><GoSignOut className={styled.oneIcon}/></span>
            </div>
            <div className={styled.iconsText}>
                <Link className={styled.oneLink} onClick={handleAuc}>My Auctions</Link>
                <Link className={styled.oneLink} onClick={handleAucWin}>My purchased product</Link>
                <Link className={styled.oneLink} to='/'>Log Out</Link>
            </div>
            </div>
            <div className={styled.mainInfoB}>
            <ul className={styled.infoBids}>
                        <li className={styled.lis}>Active auctions</li>
                        <li className={styled.lis}>Time</li>
                        <li className={styled.lis}>Price</li>
                    </ul>
                    <hr />
            {filterProd.map((item) => {
                return (
                    <div>
                    <ul className={styled.infoBids2}>
                        <li className={styled.lisImg}><img src={item.image} alt="#" /><Link to={`/oneAuction/${item._id}`}>{item.name}</Link></li>
                        <li className={styled.lisName}></li>
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
        </div></div>
    ) : (
        <div>
            <Header/>
        <h4 className={styled.textMyAuc}>My Win Auctions</h4>
        <div className={styled.main}>
            <div className={styled.iconsMain}>
                <div className={styled.userBlock}>
                    <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/thumbs/1649232757_36-vsegda-pomnim-com-p-pustoe-litso-foto-43.jpg" alt="" />
                    <span>User Userov</span>
                </div>
            <div className={styled.allicons}>
                <span  onClick={handleClick}><RiAuctionFill className={styled.oneIcon}/></span>
                <span><RiAuctionFill className={styled.oneIcon}/></span>
                <span><GoSignOut className={styled.oneIcon}/></span>
            </div>
            <div className={styled.iconsText}>
                <Link className={styled.oneLink} onClick={handleAuc}>My Auctions</Link>
                <Link className={styled.oneLink} onClick={handleAucWin}>My purchased product</Link>
                <Link className={styled.oneLink} to='/'>Log Out</Link>
            </div>
            </div>
            <div className={styled.mainInfoB}>
            <ul className={styled.infoBids}>
                        <li className={styled.lis}>Win auctions</li>
                        <li className={styled.lis}>Time</li>
                        <li className={styled.lis}>Price</li>
                    </ul>
                    <hr />
            {filterPurch[0].purchasedProduct.map((item) => {
                return (
                    <div>
                    <ul className={styled.infoBids2}>
                        <li className={styled.lisImg}><img src={item.image} alt="#" /><Link to={`/oneAuction/${item._id}`}>{item.name}</Link></li>
                        <li className={styled.lisName}></li>
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
        </div>
    )}
</div>
    );
};

export default UserProfile;