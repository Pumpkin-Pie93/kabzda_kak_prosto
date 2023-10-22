import {action} from '@storybook/addon-actions'
import Accordion from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
};


const OnChangeCallBackHandler = action('hello')
const onClickHandler = action('Hello')

export const CollapsedAccordion = () => {
   return <Accordion title={'----CollapsedAccordion----'} collapsed={true} onChange={OnChangeCallBackHandler} onClick={onClickHandler} items={[]}/>
}

export const OpenAccordion = () => {
    return <Accordion title={'----OpenAccordion----'}
                      collapsed={false}
                      onChange={()=> {}}
                      onClick={onClickHandler}
                      items={[{title: 'Polina',value: 1},{title: 'Kiryll', value: 2}]}/>
}

export const PlayingAccordion = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion
        title={'----PlayingAccordion----'}
        collapsed={collapsed}
        onChange={()=>setCollapsed(!collapsed)}
        onClick={onClickHandler}
        items={[{title: 'Polina',value: 1},{title: 'Kiryll', value: 2}]}
    />
}