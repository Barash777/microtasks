import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {queryByText} from '@testing-library/react';

type FullInputPropsType = {
    callBack: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState('')
    // console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        // setTitle('')
        props.callBack(title);
        setTitle('')
        // queryByText()
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};