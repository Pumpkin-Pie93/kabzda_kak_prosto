import React, {useState} from "react";



export default {
    title: 'React-Memo'
}

export const MessageCounter = (props: {count: number}) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

export const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users are rendered')
    return(
        <ul>
            {props.users.map((e,i) => <li key={i}>{e}</li>)
            }
        </ul>
    )
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUser] = useState(['Polina', 'Kiryll','Chili'])

    return <div>
        <button onClick={()=> {setCounter(counter+1)}}> + </button>
        <MessageCounter count={counter}/>
        <Users users={users}/>
    </div>
}
