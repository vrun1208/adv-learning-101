import React ,{ useEffect, useState } from "react"

const StopWatch = () => {
    const [hrs, setHrs] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setsec] = useState(0);

    useEffect(() => {
        const timeInSec = setTimeout(() =>{
            setsec(sec+1);
        }, 1000)
        const timeInMin = setTimeout(() =>{
            setMin(min+1);
            //setsec(() => 0)
        }, 60*1000)
    },[sec, min])


    return(
        <div>
            {hrs} : {min} : {sec}
        </div>
    )
}

export default StopWatch;