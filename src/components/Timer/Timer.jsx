import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = React.memo(({ dateNow, setDateNow, setTimerStart, timer }) => {

    const expiryTimestamp = new Date('Sat Oct 08 2022 22:40:28');
    console.log(expiryTimestamp.getMinutes())
    expiryTimestamp.setMinutes(expiryTimestamp.getMinutes())

    const timeRightNow = Number(dateNow.substring(12, 17).split(":").join(""), '-3')
    const auctionStart ='22:25'
    const auctionStartNum = Number(auctionStart.split(":").join(""))

    const { seconds, minutes, hours, days, start } = useTimer({
      expiryTimestamp,
      onExpire: () => {
        console.log("onExpire called");
      },
      autoStart: false,
    });
 

    useEffect(() => {

      let interval = setInterval(() => {
        setDateNow(new Date().toLocaleString());
      }, 10000); // ДЛЯ УДОБСТВА СДЕЛАЛ 1 СЕКУНДУ, ХОТЯ ДОЛЖЕН БЫТЬ 1 ЧАС, ЧТОБЫ НЕ БЫЛО РЕРЕНДЕРОВ СТРАНИЦЫ РАЗ В СЕКУНДУ!

      console.log(dateNow, '-1');
      console.log(timeRightNow); // 19:40 к примеру
      console.log(timeRightNow, auctionStartNum)

      if (dateNow.substring(0, 10) === "08.10.2022" && timeRightNow > auctionStartNum) {
        console.log("----------------------------------------------------------------")
        start();
        clearInterval(interval);
        setTimerStart(true);
        return () => clearInterval(interval);
      }
      
    }, []);

    //    console.log(dateNow)

    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "30px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    );
  }
);

export default Timer;
