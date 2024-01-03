import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    },[counter]);

    console.log('Simple example')
    return <>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={()=>setCounter(0)}>reset</button>
    </>
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SetTimeOutExample')

    // useEffect(() => {
    //     setTimeout(()=> {
    //         console.log('setTimeOut')
    //         document.title = counter.toString()
    //     },3000)
    // },[counter]);

    // useEffect(() => {
    //     setInterval(()=> {
    //         console.log('tick' + counter)
    //         setCounter(  counter +1)
    //     },1000)
    // },[counter]);

    return <>
        <h1>counter:_{counter}_</h1>
        <h1>fake:_{fake}_</h1>
        <button onClick={()=>setCounter(counter + 1)}>Counter +1</button>
        <button onClick={()=>setFake(fake + 1)}>Fake + 1</button>
    </>
}

export const ClockExample = () => {

    function correctDate (num: number) {
        return ( num < 10) ? '0' + num : num
    }
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intId =  setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=> {
       clearInterval(intId)        }

    }, []);

    return <div style={{display:'flex'}}>
        <h1 style={{color:'orange'}}>{correctDate(date.getHours())}:</h1>
        <h1 style={{color:'gray'}}>{correctDate(date.getMinutes())}:</h1>
        <h1 style={{color:'lightgrey'}}>{correctDate(date.getSeconds())}</h1>
 </div>
}


