import React from "react";

type ItemsType = {
    title: string
    value: any
}
type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemsType[]
    onClick: (value: any)=> void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitleMemo title={props.title} onClick={props.onChange} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBodyMemo onClick={props.onClick} items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onClick(!props.collapsed)}>{props.title}</h3>
    )
}

const AccordionTitleMemo = React.memo(AccordionTitle)

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, index) => {
                return <li key={index} onClick={() => {
                    props.onClick(el.value)
                }}>{el.title}</li>
            })}
        </ul>
    )
}
const AccordionBodyMemo = React.memo(AccordionBody)


export default Accordion;