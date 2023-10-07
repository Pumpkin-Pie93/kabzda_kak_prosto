import React, {useState} from 'react';
import './App.css';
import {UnControlledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/uncontroledraiting/UnControledRaiting";
import {Rating, RatingValueType} from "./components/raiting/Raiting";
import Accordion from "./components/accordion/Accordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)

  return (
    <div className='App'>

        <UnControlledAccordion title='Menu' />
        <UnControlledRating/>
        <UnControlledAccordion title='Settings' />
        <UnControlledRating/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <Accordion title={'Message'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
    </div>
  );
}


export default App;

