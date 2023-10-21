import {Star, StarPropsType} from "./Star";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Star Stories',
    component: Star,
}

export const StarSelected = () => <Star selected={true} value={5} setValue={action('you try to change me')}/>
export const StarDefault = () => <Star selected={false} value={1} setValue={action('you try to change me')}/>
// export const StarChanging = () => {
//     const [star,setStar]=useState<boolean>(true)
//     return <Star selected={star} value={4} setValue={x=>x}/>
// }