import React, {useState} from 'react';
import './App.css';
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/uncontroledraiting/UnControledRaiting";
import {Rating, RatingValueType} from "./components/raiting/Raiting";
import Accordion from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import {Select} from "./components/select/Select";
import {AnalogClock} from "./components/clock/analogClock";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [select, setSelect] = useState<string | undefined>(undefined)

    let nameItems = [
        {name: 'Polina', value: 1},
        {name: 'Kiryll', value: 2},
        {name: 'Chili', value: 3}
    ]
    const cityItems = [
        {name: 'Minsk', population: 2000000},
        {name: 'Moskow', population: 12000000},
        {name: 'Istambul', population: 15000000},
        {name: 'Guanjou', population: 14000000},
        {name: 'Tokyo', population: 14500000},
        {name: 'New-York', population: 11000000},
        {name: 'Seoul', population: 10000000},
        {name: 'Deli', population: 9000000},
        {name: 'London', population: 8.900000},
        {name: 'Los-Angeles', population: 4000000},
        {name: 'Osaka', population: 2.600000},
        {name: 'Paris', population: 2.200000},
    ]


    const OnOffMemo = React.memo(OnOff)
    const UnControlledAccordionMemo = React.memo(UnControlledAccordion)
    const UnControlledRatingMemo = React.memo(UnControlledRating)
    const RatingMemo = React.memo(Rating)
    const AccordionMemo = React.memo(Accordion)
    const SelectMemo = React.memo(Select)

    return (
        <div className='App'>
            <OnOffMemo/>
            <UnControlledAccordionMemo title='Menu'/>
            <UnControlledRatingMemo/>
            <UnControlledAccordionMemo title='Settings'/>
            <UnControlledRatingMemo/>
            <RatingMemo
                value={ratingValue}
                onClick={setRatingValue}/>
            <AccordionMemo title={'Message'}
                       collapsed={accordionCollapsed}
                       onChange={setAccordionCollapsed}
                       onClick={(value) => {
                       }}
                       items={[{title: 'Polina', value: 1}, {title: 'Kiryll', value: 2}]}/>
            <SelectMemo value={select}
                    onChange={setSelect}
                    items={nameItems}/>
            <AnalogClock/>

        </div>
    );
}


export default App;

