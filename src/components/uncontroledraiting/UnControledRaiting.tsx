import React, {useState} from "react";
import {Star} from "../star/Star";

export function UnControlledRating() {




    const UnControlledRatingStyle = {
        margin: '10px',
        color: 'red',
        fontSize: '20px',
        fontFamily: 'berlin sans fb',
        letterSpacing: '3px',
    }

    let [value, setValue] = useState(0)

    return (
        <div style={UnControlledRatingStyle}>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}