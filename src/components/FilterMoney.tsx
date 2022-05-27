import React from 'react';

type FilterType = 'all' | 'ruble' | 'dollar'

type CurrencyType = {
    banknots: string,
    value: number,
    number: string
}

type FilterMoneyPropsType = {
    currentMoney: Array<CurrencyType>
    callBack: (filter: FilterType) => void
}

export const FilterMoney = (props: FilterMoneyPropsType) => {

    const onClickHandler = (filter: FilterType) => {
        // debugger
        props.callBack(filter);
    }

    return (
        <>
            <ul>
                {props.currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots}   </span>
                            <span>{m.value}   </span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickHandler('all')}>all</button>
                <button onClick={() => onClickHandler('ruble')}>ruble</button>
                <button onClick={() => onClickHandler('dollar')}>dollar</button>
            </div>
        </>
    );
}