import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer/Timer";
import { addUserLikeAuictionMember } from "../../features/productSlice";

import styles from "./cardProduct.module.css";


const CardProduct = React.memo(({ item }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [membersError, setMembersError] = useState(false)
  

  const token = useSelector(state => state.application.token)
  const userId = useSelector(state => state.application.id)


  const [dateNow, setDateNow] = useState(new Date().toLocaleString());
  const [timerStart, setTimerStart] = useState(false)
  const [dateError, setDateError] = useState(false)
  const [tokenError, setTokenError] = useState(false)

  useEffect(()=> {
    if(item.private && item.members.length >= 1) {
    setMembersError(true)
  } 
    else {
    setMembersError(false)
  }
}, [])

  const handleAuctionAccess = (id) => {

    // if(!token) {
    //   setTokenError(true)
    //   return
    // }
    // if (timerStart === false) {
    //   setDateError(true)
    //   return
    // } 
      dispatch(addUserLikeAuictionMember({id, userId}))
      navigate(`/oneAuction/${id}`)
      setDateError(false)
      setTokenError(false)
  }
  
  return (
    <div className={styles.thing_card}>
      <div className={styles.thing_card_img}>
        <img src={item.image} alt="" />
      </div>
      {item.private === true ?
        <div className={styles.thing_card_time_private}>
          <Timer item={item} dateNow={dateNow} setDateNow={setDateNow} setTimerStart={setTimerStart}/>
        </div>
        :
        <div className={styles.thing_card_time_noprivate}>
          <Timer item={item} dateNow={dateNow} setDateNow={setDateNow} setTimerStart={setTimerStart}/>
        </div>
      }

      <div className={styles.thing_card_text}>
        <div className={styles.thing_card_name}>
          <p>{item.name}</p>
        </div>
        <div className={styles.thing_card_description}>
          <p>{item.description.substr(0, 80) + "..."}</p>
        </div>

        <div className={styles.thing_card_date}>
        {item.private ? <p> Places: {item.members.length}/1</p>: null}
          <p style={{color: 'goldenrod'}}>Auction started at: {item.auctionStart.split(',')[0]} в {item.auctionStart.split(',')[1].substr(0,3)}:{item.auctionStart.split(',')[1].substr(3,5)}</p>
          <p style={{color: 'goldenrod'}}>Published 10.10.2022</p>
        </div>
      </div>

      <div className={styles.thing_card_allbuttons}>
        <div className={styles.thing_card_buttons}>
          <div className={styles.thing_card_price}>
          {item.members.includes(userId) === false && membersError === true && item.private ? <p style={{color: 'brown'}}> You can't participate in a private auction, all the seats are already occupied </p> : null}
            <p>Initial price: <b>{item.priceStart}</b> $</p>
          </div>
          <div className={styles.thing_card_btn1}>
            {item.private === true ? (
              <button disabled={membersError && item.members.includes(userId) === false} onClick={() => {handleAuctionAccess(item._id)}} className={styles.thing_card_private}>Private Auction</button>
            ) : (
              <button onClick={() => {handleAuctionAccess(item._id)}} className={styles.thing_card_noprivate}>Participate in the auction</button>
            )}
          </div>
          {!item.private === true ? <div className={styles.thing_card_price}>
            <p>Instant purchase: <b>{item.priceFinal}</b> $</p>
          </div>
            :
            null}
          {item.private === true ? <div className={styles.thing_card_rule_private}>
            <p>Функция быстрой покупки недоступна в этом режиме</p>
          </div>
            :
            <div className={styles.thing_card_btn2}>
              <button>Оформить покупку сейчас</button>
            </div>
          } 
          {dateError ? <div className={styles.errorText}>Auction started at: {item.auctionStart.split(',')[0]} в {item.auctionStart.split(',')[1].substr(0,3)}:{item.auctionStart.split(',')[1].substr(3,5)}</div> : null}
          {tokenError ? <div className={styles.errorText}>An unauthorized user cannot participate in the auction</div> : null}
        </div>
      </div>
    </div>
  );
});

export default CardProduct;
