import React, { useEffect } from "react";
import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/productSlice";

const Main = React.memo(() => {
    const products = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchProduct());
    }, [dispatch]);
  
  return (
     <div>
        <div className={styles.first_text}>Последние аукционы</div>
         <div className={styles.container_product} >
       {products.map((item, index) => { 
        if (index < 4){
            return (
                <div className={styles.thing_card} key={item._id}>
                <div className={styles.thing_card_img}>
                  <img  src={item.image} alt="" />
                </div>
                <div className={styles.thing_card_text}>
                  <div className={styles.thing_card_name}>
                    <p>{item.name.substr(0, 15)}</p>
                  </div>
                  <div className={styles.thing_card_description}>
                    <p>{item.description.substr(0, 20) + "..."}</p>
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
                        <button className={styles.thing_card_noprivate}>Участвовать аукционе</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
        }
             return null
          })}
        </div>


 
             <div className={styles.container}>
        <div className={styles.caption}> <h1>Аукционная покупка и продажа</h1></div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <h2>Продажа на аукционе</h2>
                <p>Познакомьтесь со специалистами и узнайте больше о своем искусстве и антиквариате</p>
                <h3><a href="/">Больше{">"}</a></h3>
            </div>
            <div className={styles.card}>
                 <h2>Покупка на аукционе</h2>
                 <p>Пошаговое руководство по покупке, от первого взгляда на ваш участок до того, как вы заберете его домой.</p>
                 <h3><a href="/">Больше{">"}</a></h3>
            </div>
            <div className={styles.card}>
                  <h2>Бесплатные живые торги</h2>
                  <p>Делайте ставки онлайн без дополнительной оплаты с Lyon & Turnbull Live.</p>
                  <h3><a href="/">Больше{">"}</a></h3>
            </div>
        </div>
      </div>
    </div>


  );
}); 

export default Main;