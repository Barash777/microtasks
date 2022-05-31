import React from 'react';

type ButtonForInputPropsType = {
    name: string
    callBack: () => void
}

export const ButtonForInput = (props: ButtonForInputPropsType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
}