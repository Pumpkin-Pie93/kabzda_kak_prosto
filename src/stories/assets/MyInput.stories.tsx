import React, {ChangeEvent, useRef, useState} from "react";
import {color} from "../../../storybook-static/sb-manager/chunk-5AW67ZFX";


export default {
    title: 'UnControlledInput Stories',
    // component: input,
}

export const UnControlledInput = () => <input/>

export const UnControlledInputTracker = () => {

    const [value, setValue] = useState('')

    const OnchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const word = event.currentTarget.value
        setValue(word)
    }

    return (
        <div>
            <input onChange={OnchangeHandler} style={
                {
                    color: 'red',
                    border: '2px solid deepPink',
                    margin: '3px',
                    padding: '5px',
                    borderRadius: '4px'
                }
            }/>
            <div style={
                {
                    color: 'deepPink',
                    border: '2px solid green',
                    margin: '3px',
                    width: 'fit-content',
                    minWidth: '167px',
                    minHeight: '1.2rem',
                    padding: '2px',
                    borderRadius: '4px'
                }}>{value}</div>
        </div>
    )
}

export const UnControlledInputAndButton = () => {

    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <input ref={inputRef} onChange={x => x} style={
                {
                    color: 'red',
                    border: '2px solid deepPink',
                    margin: '3px',
                    padding: '5px',
                    borderRadius: '4px'
                }
            }/>

                <button onClick={onClickHandler} style={
                    {
                        color: 'deepPink',
                        border: '2px solid pink',
                        // margin: '3px',
                        width: 'fit-content',
                        minWidth: '167px',
                        minHeight: '100%',
                        padding: '2px',
                        borderRadius: '4px'
                    }}>save
                </button>----{value}----

        </div>
    )
}

export const ControlledInput = () => {
    const [value, setValue] = useState('')

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       const currentValue = e.currentTarget.value
       setValue(currentValue)
    }
    return <input value={value} onChange={onchangeHandler}/>
}

export const ControlledCheckBox = () => {
    const [value, setValue] = useState(false)

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       const currentValue = e.currentTarget.checked
       setValue(currentValue)
    }
    return <input type={"checkbox"} checked={value} onChange={onchangeHandler}/>
}

export const ControlledSelector = () => {
    const [value, setValue] = useState< string |undefined >(undefined)

    const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
       const currentValue = e.currentTarget.value
       setValue(currentValue)
    }
    return <select value={value} onChange={onchangeHandler}>
        <option>None</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>LA</option>
        <option value={'3'}>London</option>
    </select>
}