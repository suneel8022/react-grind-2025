import React, { useEffect, useState } from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        },1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    function showTimeFormat(){        
        const hrs = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hrs >= 12 ? "PM" : "AM" ;

        const milTime = hrs %12 || 12; 

        return `${padZero(milTime)}:${padZero(min)}:${padZero(sec)} ${meridiem}`;
    }

    function padZero(val){
        return (val > 9 ? val : ('0' + val)) ;
        // return (val < 9 ? '0' : '') + val ;
    }

    return(
        <>
            {/* <span>{hrs}:{min}:{sec}</span> */}
            <span>{showTimeFormat()}</span>
        </>
    );
}

export default DigitalClock;