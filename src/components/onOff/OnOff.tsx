import React, {useState} from 'react';

export const OnOff = () => {

    let [onOffState, setOnOffState] = useState(false)

    const wrap = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const onStyle = {
        width: '30px',
        height: '40px',
        border: '5px solid',
        borderColor:onOffState? '#85e2f16b' : 'white',
        backgroundColor: onOffState? 'rgba(168,139,139,0)' : 'white',
        boxShadow: onOffState? '1px 1px 4px 3px #85e2f16b' : 'none',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: '5px'
    }
    const offStyle = {
        width: '30px',
        height: '40px',
        border: '1px solid black',
        marginRight: '5px',
        backgroundColor: onOffState? 'white' : '#ff0000',
        color: 'black',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '15px',
        backgroundColor: onOffState? '#85e2f16b' : '#ff0000'

    }

    return (
        <div style={wrap}>
            <div style={onStyle} onClick={()=>{setOnOffState(!onOffState)}}>On</div>
            <div style={offStyle} onClick={()=>{setOnOffState(!onOffState)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

