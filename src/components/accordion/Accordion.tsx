import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (value: boolean) => void
}
function Accordion (props: AccordionPropsType) {
    if ( props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            </div>)
    }
  }
type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}
function AccordionTitle (props: AccordionTitlePropsType) {
    return (
      <h3 onClick={()=> props.onClick(!props.collapsed)}>{props.title}</h3>
    )
}

function AccordionBody () {
    return (
       <ul>
           <li>1</li>
           <li>2</li>
           <li>3</li>
       </ul>
    )
}

export default Accordion;