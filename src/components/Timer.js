import { useEffect } from "react";

function Timer() {
  useEffect(function () {
    setInterval(function () {
      console.log("tick");
    }, 1000);
  }, []);
  return <div className="timer">05:55</div>;
}

export default Timer;
