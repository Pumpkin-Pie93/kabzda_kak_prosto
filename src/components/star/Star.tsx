import React from "react";


export type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}
export function Star(props: StarPropsType) {
    return <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>Star </b> : 'Star '}</span>
    }

