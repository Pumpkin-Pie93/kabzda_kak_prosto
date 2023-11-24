import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'
import {selectOptions} from "@testing-library/user-event/dist/select-options";

type ItemsType = {
    name: string
    value: any
}
type SelectPropsType = {
    value: string | undefined
    onChange: (value: string) => void
    items: ItemsType[]

}

export const Select = (props: SelectPropsType) => {
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


    const [value, setValue] = useState<string>('Select')
    const [select, setSelect] = useState(false)

    const onClickHandler = (value: string) => {
        console.log('click')
        setValue(value)
        setSelect(false)
    }
    const onBlurHandler = () => {
        console.log('nnn');
        setSelect(false)
    }

       return (
        <div>
            <select >
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <div className={s.select}
                 onClick={() => setSelect(!select)}
            >{value}</div>
            <div className={select ? s.itemsWrapper : s.hidden}>
                {select && props.items.map((el, index) => {

                    // const onkeyupHandler = (e: KeyboardEvent<HTMLSpanElement>) => {
                    //     if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    //         for (let i = 0; i < props.items.length; i++) {
                    //             if (props.items[i].value === value) {
                    //                 const pretendentElement = e.key === "ArrowDown"
                    //                     ? props.items[i + 1]
                    //                     : props.items[i - 1]
                    //                 if (pretendentElement) {
                    //                     props.onChange(pretendentElement.value)
                    //                     return
                    //                 }
                    //             }
                    //         }
                    //         if (!value) {
                    //             props.onChange(props.items[0].value)
                    //         }
                    //     }
                    //     if ((e.key === 'Enter' || e.key === 'Escape'))
                    //         setSelect(false)
                    // }

                    return (
                        <span
                            key={index}
                            onClick={() => onClickHandler(el.name)}
                            className={'optionId'}
                            onBlur={onBlurHandler}
                            // onKeyUp={onkeyupHandler}
                        >
                       {el.name}
                    </span>
                    )
                })}
            </div>

        </div>

    );
};

