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

    const StarMemo = React.memo(Star)

    return (
        <div style={UnControlledRatingStyle}>
            <StarMemo selected={value > 0} setValue={setValue} value={1}/>
            <StarMemo selected={value > 1} setValue={setValue} value={2}/>
            <StarMemo selected={value > 2} setValue={setValue} value={3}/>
            <StarMemo selected={value > 3} setValue={setValue} value={4}/>
            <StarMemo selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}