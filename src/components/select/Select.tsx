import React, {MouseEventHandler, useState} from 'react';

type ItemsType = {
    title: string
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
        setValue(value)
    }
    // const onBlurHandler = (value: string) => {
    //     console.log('close');
    //              };

    const stylesForSelect = {
        borderBottom: '2px solid deepPink',
        width: '60px',
        height: '20px',
        padding: '2px',
        margin: '3px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    }

    const stylesForSelecor = {
        // borderBottom: '2px solid deepPink',
        width: '60px',
        height: '20px',
        padding: '2px',
        margin: '3px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e0dfdf',
        ':hover': {
            borderBottom: '2px solid deepPink',
        },
    }


    return (
        <div>
            <div  style={stylesForSelect}
                 onClick={() => setSelect(!select)}

            >{value}</div>
            {select && props.items.map((el, index) => {
                return <div key={index}
                            style={stylesForSelecor}
                            onClick={() => onClickHandler(el.title)}
                            id={'selectorId'}
                    // onBlur={()=>onBlurHandler(el.title)}
                >{el.title}</div>
            })}
        </div>

    );
};

