import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./analogClock";

type PropsType ={
}

function correctDate (num: number) {
  return ( num < 10) ? '0' + num : num
}

export const Clock: React.FC<PropsType> = () => {
    const [mode,setMode] = useState(false)
    const [date, setDate] = useState(new Date())

    useEffect(()=> {
        const setId = setInterval(()=>{setDate(new Date())},1000)
        return ()=> {
            clearInterval(setId)
        }
    }
    ,[])

return (
    <div>
        <button onClick={()=>setMode(!mode)}>SetClockMode</button>
        {mode
            ? <DigitalClock
                hour={correctDate(date.getHours())}
                minute={correctDate(date.getMinutes())}
                second={correctDate(date.getSeconds())}
            />
            : <AnalogClock
                hour={correctDate(date.getHours())}
                minute={correctDate(date.getMinutes())}
                second={correctDate(date.getSeconds())}
            />}
        {/*<span>{correctDate(date.getHours())}</span>*/}
        {/*:*/}
        {/*<span>{correctDate(date.getMinutes())}</span>*/}
        {/*:*/}
        {/*<span>{correctDate(date.getSeconds()) }</span>*/}
    </div>

)
}

