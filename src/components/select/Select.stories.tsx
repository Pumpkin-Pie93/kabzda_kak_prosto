import {Select} from "./Select";
import React from "react";


export default {
    title: 'Select Stories',
    component: Select,
}

export const SelectStory = () => {
    return (
        <Select value={'Select'} onChange={l=>l} items={[{title: 'Polina', value: 1}, {title: 'Kiryll', value: 2}]}/>
    )

}