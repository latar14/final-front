import React from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";
import styles from "./cardProduct.module.css";

const CardProduct = ({ item, expiryTimestamp }) => {

  return (
    <div className={styles.thing_card}>
      <div className={styles.thing_card_img}>
        <img src={item.image} alt="" />
      </div>
      {item.private === true ?
        <div className={styles.thing_card_time_private}>
          <Timer expiryTimestamp={expiryTimestamp}/>
        </div>
        :
        <div className={styles.thing_card_time_noprivate}>
          <Timer expiryTimestamp={expiryTimestamp}/>
        </div>
      }

      <div className={styles.thing_card_text}>
        <div className={styles.thing_card_name}>
          <p>{item.name}</p>
        </div>
        <div className={styles.thing_card_description}>
          <p>{item.description}</p>
        </div>
        <div className={styles.thing_card_date}>
          <p>Опубликовано {`${new Date(item.timeNow).toLocaleDateString()} в ${new Date(item.timeNow).toLocaleTimeString()}`}</p>
        </div>
      </div>

      {/* <div className={styles.thing_card_price}>До оканчания аукциона осталось {item.timer} мин.</div> */}

      <div className={styles.thing_card_allbuttons}>
        <div className={styles.thing_card_buttons}>
          <div className={styles.thing_card_price}>
            <p>Начальная цена: <b>{item.priceStart}</b> $</p>
          </div>
          <div className={styles.thing_card_btn1}>
            {item.private === true ? (
              <button className={styles.thing_card_private}>Приватный аукцион</button>
            ) : (
              <Link to={`/oneAuction/${item._id}`}><button className={styles.thing_card_noprivate}>Участвовать в аукционе</button></Link>
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
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
