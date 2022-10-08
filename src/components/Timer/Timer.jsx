import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = React.memo(({ expiryTimestamp }) => {
  const [dateNow, setDateNow] = useState(new Date().toLocaleString());

  const {
    seconds,
    minutes,
    hours,
    days,
    start,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.log("onExpire called");
    },
    autoStart: false,
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setDateNow(new Date().toLocaleString());
    }, 1000);
    //  console.log(dateNow)
    if (dateNow === "06.10.2022, 18:10:15") {
      console.log("work");
      start();
    }
  }, [start]);

  //    console.log(dateNow)

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "30px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
})

export default Timer;

