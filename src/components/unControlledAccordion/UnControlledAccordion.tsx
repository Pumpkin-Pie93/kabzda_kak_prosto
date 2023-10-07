import React, {useState} from "react";

type UnControlledAccordionType = {
    title: string
}

type UnControlledAccordionTitle = {
    title: string
    onClick: () => void
}
export function UnControlledAccordion (props:UnControlledAccordionType) {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <UnControlledAccordionTitle title={props.title}
                                        onClick={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


function UnControlledAccordionTitle (props: UnControlledAccordionTitle) {
    return (
      <h3 onClick={()=> {props.onClick()}}>---{props.title}---</h3>
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

// export default UnControlledAccordion;