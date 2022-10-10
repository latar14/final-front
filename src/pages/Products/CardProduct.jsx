import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer/Timer";

import styles from "./cardProduct.module.css";


const CardProduct = React.memo(({ item}) => {

  const navigate = useNavigate()

  const [dateNow, setDateNow] = useState(new Date().toLocaleString());
  const [timerStart, setTimerStart] = useState(false)
  const [dateError, setDateError] = useState(false)


  const handleAuctionAccess = (id) => {
    // dateNow !== "08.10.2022" && dateNow.substring(12, 17).split(':').join("") < auctionStart.split(":").join("")
    if (timerStart === false) {
      setDateError(true)
      return
    }
      navigate(`/oneAuction/${id}`)
      setDateError(false)
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
          <p>Начало аукциона: {item.auctionStart.split(',')[0]} в {item.auctionStart.split(',')[1].substr(0,3)}:{item.auctionStart.split(',')[1].substr(3,5)}</p>
          <p>Опубликовано 10.10.2022</p>
        </div>
      </div>

      <div className={styles.thing_card_allbuttons}>
        <div className={styles.thing_card_buttons}>
          <div className={styles.thing_card_price}>
            <p>Начальная цена: <b>{item.priceStart}</b> $</p>
          </div>
          <div className={styles.thing_card_btn1}>
            {item.private === true ? (
              <button className={styles.thing_card_private}>Приватный аукцион</button>
            ) : (
              <button onClick={() => {handleAuctionAccess(item._id)}} className={styles.thing_card_noprivate}>Участвовать в аукционе</button>
            )}
          </div>
          {!item.private === true ? <div className={styles.thing_card_price}>
            <p>Цена без торга: <b>{item.priceFinal}</b> $</p>
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
          {dateError ? <div>Аукцион начнется {item.auctionStart.split(',')[0]} в {item.auctionStart.split(',')[1].substr(0,3)}:{item.auctionStart.split(',')[1].substr(3,5)}</div> : null}
        </div>
      </div>
    </div>
  );
});

export default CardProduct;
