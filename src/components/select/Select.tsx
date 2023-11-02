import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'

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

    // const stylesForSelect = {
    //     borderBottom: '2px solid deepPink',
    //     width: '60px',
    //     height: '20px',
    //     padding: '2px',
    //     margin: '3px',
    //     alignItems: 'center',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     backgroundColor: '#ffffff',
    // }
    //
    // const stylesForSelecor = {
    //     // borderBottom: '2px solid deepPink',
    //     width: '60px',
    //     height: '20px',
    //     padding: '2px',
    //     margin: '3px',
    //     alignItems: 'center',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     backgroundColor: '#e0dfdf',
    //     ':hover': {
    //         borderBottom: '2px solid deepPink',
    //     },
    // }


    return (
        <div>
            <select>
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

