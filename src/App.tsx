import React, {useState} from 'react';
import './App.css';
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/uncontroledraiting/UnControledRaiting";
import {Rating, RatingValueType} from "./components/raiting/Raiting";
import Accordion from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import {Select} from "./components/select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [select, setSelect] = useState<string | undefined>(undefined)

    let nameItems = [
        {name: 'Polina', value: 1},
        {name: 'Kiryll', value: 2},
        {name: 'Chili', value: 3}
    ]

    return (
        <div className='App'>
            <OnOff/>
            <UnControlledAccordion title='Menu'/>
            <UnControlledRating/>
            <UnControlledAccordion title='Settings'/>
            <UnControlledRating/>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>
            <Accordion title={'Message'}
                       collapsed={accordionCollapsed}
                       onChange={setAccordionCollapsed}
                       onClick={(value) => {
                       }}
                       items={[{title: 'Polina', value: 1}, {title: 'Kiryll', value: 2}]}/>
            <Select value={select}
                    onChange={setSelect}
                    items={nameItems}/>
        </div>
    );
}


export default App;

