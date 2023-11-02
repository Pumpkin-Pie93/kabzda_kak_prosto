import {Select} from "./Select";
import React from "react";


export default {
    title: 'Select Stories',
    component: Select,
}

export const SelectStory = () => {
    return (
        <Select value={'Select'} onChange={l=>l} items={[{name: 'Polina', value: 1}, {name: 'Kiryll', value: 2},{name: 'Chili', value: 3}]}/>
    )

}