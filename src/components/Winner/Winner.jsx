import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './winner.module.css'

const Winner = ({activeWinner, setActiveWinner, product}) => {
    const navigate = useNavigate()

    const handlePersonalAccount = () => {
        navigate("/")
    }
    const id = useSelector(state => state.application.id)
    return (
        <div
        className={activeWinner ? styles.nomodal : styles.modal}
      >
        <div
          className={styles.formController}
          onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.title}><p>Auction <b>"{product.name}"</b> &nbsp; has been ended</p></div>

            <div className={styles.textAndImg}>
                <p>Winner: <b>{product.bet.firstName} {product.bet.lastName}</b></p>
                <p>Winner Bet: <b>{product.priceStart}$</b></p>
                <img src='https://www.pngmart.com/files/8/Auction-PNG-Transparent-Photo.png' alt='auction'/>
            </div>
            {product.bet._id === id ? 
            <div className={styles.personalAccount} onClick={()=>handlePersonalAccount()}><h4>Pay for the order</h4></div>
            : 
            <div className={styles.personalAccount} onClick={()=>navigate('/products')}><h4>Back</h4></div>
            }
        </div>
      </div>
    );
};

export default Winner;