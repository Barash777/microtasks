import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {ButtonForInput} from './components/ButtonForInput';

function App() {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')


    const addMessage = (title: string) => {
        //message.push({message: title})
        //setMessage(message)
        //console.log(message)

        let copyMessage = [...message]
        copyMessage.unshift({message: title})
        setMessage(copyMessage)
        console.log(message)
    }


    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }


    const renderedMessagesJSX = message.map((el, index) => {
        return (
            <div key={index}>
                {el.message}
            </div>
        )
    })

    return (
        <div className={'App'}>
            {/*<FullInput callBack={addMessage}/>*/}

            <Input setTitle={setTitle} title={title}/>
            <ButtonForInput name={'+'} callBack={callBackButtonHandler}/>

            {renderedMessagesJSX}
        </div>
    )
}

export default App;