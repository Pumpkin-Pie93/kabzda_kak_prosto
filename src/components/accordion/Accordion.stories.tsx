import {action} from '@storybook/addon-actions'


import Accordion from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
};


const OnChangeCallBackHandler = action('hello')

export const CollapsedAccordion = () => {
   return <Accordion title={'----CollapsedAccordion----'} collapsed={true} onClick={OnChangeCallBackHandler}/>
}

export const OpenAccordion = () => {
    return <Accordion title={'----OpenAccordion----'} collapsed={false} onClick={()=> {}}/>
}

export const PlayingAccordion = () => {
    let [collapset, setCollapset] = useState(false)
    return <Accordion title={'----PlayingAccordion----'} collapsed={collapset} onClick={()=>setCollapset(!collapset)}/>
}