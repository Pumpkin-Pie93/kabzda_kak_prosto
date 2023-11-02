import {Rating, RatingValueType} from "./Raiting";
import React, {ChangeEvent, useState} from "react";


export default {
    title: 'Rating Stories',
    component: Rating,
}

 export const RatingZero = () => <Rating value={0} onClick={() => {}}/>
 export const Rating1 = () => <Rating value={1} onClick={() => {}}/>
 export const Rating2 = () => <Rating value={2} onClick={() => {}}/>
 export const Rating3 = () => <Rating value={3} onClick={() => {}}/>
 export const Rating4 = () => <Rating value={4} onClick={() => {}}/>
 export const Rating5 = () => <Rating value={5} onClick={() => {}}/>
 export const RatingChanging = () =>{
     const [rating, setRating] = useState<RatingValueType>(3)

    return <Rating value={rating} onClick={setRating}/>
 }

