import React, { useState } from "react";
import styles from "./main.module.css";

const Main = () => {

  return (
      <div className={styles.container}>
        <div className={styles.caption}> <h1>Аукционная покупка и продажа</h1></div>
       
        <div className={styles.cards}>
            <div className={styles.card}>
                <h2>Продажа на аукционе</h2>
                <p>Познакомьтесь со специалистами и узнайте больше о своем искусстве и антиквариате</p>
                <h3><a href="#">Больше></a></h3>
            </div>
            <div className={styles.card}>
                 <h2>Покупка на аукционе</h2>
                 <p>Пошаговое руководство по покупке, от первого взгляда на ваш участок до того, как вы заберете его домой.</p>
                 <h3><a href="#">Больше></a></h3>
            </div>
            <div className={styles.card}>
                  <h2>Бесплатные живые торги</h2>
                  <p>Делайте ставки онлайн без дополнительной оплаты с Lyon & Turnbull Live.</p>
                  <h3><a href="#">Больше></a></h3>
            </div>
        </div>
      </div>
  );
}; 

export default Main;