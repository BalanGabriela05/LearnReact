import React, {useState,useEffect} from 'react';

function DigitalClock(){


    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);//when we mount => create an interval taht updates once every second
        return () =>{
            clearInterval(intervalId);//when we unmount => clear
        }

    }/*function */,[] /*[dependencies]*/);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12 ; //to convert || 12 (altefl afisa 0)
      
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`;

    
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;


    }


    return(<div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>

        </div>

    </div>);
}
export default DigitalClock;