import React ,{ useEffect, useState } from "react"

const StopWatch = () => {
    const [timer, setTimer] = useState({
        hrs: 0,
        min: 0,
        sec: 0,
    });

    const [isRun, setIsRun] = useState();

    const StartOrStop = () => {
        if(!isRun){
            let ss = setInterval((formatTime), 1000);
            setIsRun(ss);
        }
        else{
            clearInterval(isRun);
            setIsRun("");
        }
    }

    const formatTime = () => {
        setTimer((e) => {
            let newTime = { ...e };
            if(newTime.sec < 59) newTime.sec += 1;
            else{
                newTime.min += 1;
                newTime.sec = 0;
            }

            if(newTime.min === 60){
                newTime.min = 0;
                newTime.hrs += 1;
            }
            return newTime;
        })
      }

      const reset = () => {
        clearInterval(isRun);
        setTimer({
            hrs:0, min:0, sec:0
        })
      }

    return(
        <div>
           <h1>STOPWATCH</h1>
            <h2>{timer.hrs < 10 ? 0: ""}{timer.hrs} : {timer.min < 10 ? 0: ""}{timer.min} : {timer.sec < 10 ? 0: ""}{timer.sec}</h2>
            <button onClick={StartOrStop}>START/STOP</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}

export default StopWatch;