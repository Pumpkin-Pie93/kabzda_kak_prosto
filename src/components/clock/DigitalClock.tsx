import React from 'react';

type PropsType = {
    hour: any
    minute: any
    second: any
}

export const DigitalClock: React.FC<PropsType> = (props) => {
    return (
        <div>
            <span>{props.hour}</span>
            :
            <span>{props.minute}</span>
            :
            <span>{props.second}</span>
        </div>
    )
}