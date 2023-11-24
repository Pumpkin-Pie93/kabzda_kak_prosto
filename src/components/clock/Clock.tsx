import React, {useEffect, useState} from 'react';

type PropsType ={

}

function correctDate (num: number) {
  return ( num < 10) ? '0' + num : num
}

export const Clock: React.FC<PropsType> = (props) => {

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
        <span>{correctDate(date.getHours())}</span>
        :
        <span>{correctDate(date.getMinutes())}</span>
        :
        <span>{correctDate(date.getSeconds()) }</span>
    </div>

)
}