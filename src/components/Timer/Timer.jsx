import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTimer } from "react-timer-hook";
import { addProductForWinnerUser } from "../../features/productSlice";

const Timer = React.memo(({ dateNow, setDateNow, setTimerStart, item, setActiveWinner }) => {


    const dispatch = useDispatch()
    const expiryTimestamp = new Date(item.auctionEnd); // конец аукциона
    expiryTimestamp.setMinutes(expiryTimestamp.getMinutes())

    const timeRightNow = Number(dateNow.substring(12, 17).split(":").join("")) // реальное время
    const auctionStart = item.auctionStart.split(',')[1] // начало аукциона

    // console.log(timeRightNow, 'реальное время')
    // console.log(auctionStart, 'начало аукциона')


    const { seconds, minutes, hours, days, start, isRunning } = useTimer({
      expiryTimestamp,
      onExpire: () => {
        if(setActiveWinner) {
          dispatch(addProductForWinnerUser({id: item.bet._id, productId: item._id}))
          setActiveWinner(true)
        }
      },
      autoStart: false,
    });
 

    useEffect(() => {

      let interval = setInterval(() => {
        setDateNow(new Date().toLocaleString());
      }, 10000); // ДЛЯ УДОБСТВА СДЕЛАЛ 1 СЕКУНДУ, ХОТЯ ДОЛЖЕН БЫТЬ 1 ЧАС, ЧТОБЫ НЕ БЫЛО РЕРЕНДЕРОВ СТРАНИЦЫ РАЗ В СЕКУНДУ!

      if (dateNow.substring(0, 10) === item.auctionStart.split(',')[0] && timeRightNow > Number(item.auctionStart.split(',')[1])) {
        start();
        clearInterval(interval);
        setTimerStart(true);
        return () => clearInterval(interval);
      }
      
    }, []);


    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "30px" }}>
          {isRunning ?  <div><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></div> : <span>0:0:0:0</span>}
        </div>
      </div>
    );
  }
);

export default Timer;
