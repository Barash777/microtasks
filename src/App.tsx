import React, {MouseEvent, MouseEventHandler, useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {log} from 'util';

function App() {

    /*
    const mySubscriber1 = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("My name is Anna!")
    }

    const mySubscriber2 = () => {
        console.log("My name is Tom!")
    }
    */

    // const onClickHandler = (name: string) => {
    //     console.log(name);
    // }

    /*const foo1 = () => {
        console.log('just foo1')
    }

    const foo2 = (value: number) => {
        console.log('foo2, value = ', value)
    }*/

    const ButtonFunction1 = (subscriber: string, age: number = 25) => {
        console.log(subscriber, age)
    }

    const ButtonFunction2 = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonFunction3 = () => {
        console.log('I\'m stupid button')
    }


    type moneyType = {
        banknots: string
        value: number
        number: string
    }

    const money: Array<moneyType> = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]

    const getMoney = (currency: string) => {
        money.map(obj => {
            if (currency === obj.banknots)
                console.log(obj)
            else if (currency !== "Dollars" && currency !== 'RUBLS')
                console.log(obj)
        })
    }


    return (
        <div className="App">

            <Button name={'Channel-1'} callBack={() => ButtonFunction1('Vasya', 21)}/>
            <Button name={'Channel-2'} callBack={() => ButtonFunction2('Ivan')}/>
            <Button name={'Channel-3'} callBack={ButtonFunction3}/>

            <hr />

            <Button name={'All money'} callBack={() => getMoney("All money")} />
            <Button name={'Dollars'} callBack={() => getMoney("Dollars")} />
            <Button name={'RUBLS'} callBack={() => getMoney("RUBLS")} />

            {/*<button onClick={() => onClickHandler('Tom')}>Channel-1</button>
            <button onClick={() => onClickHandler('Anna')}>Channel-2</button>*/}

            {/*<button onClick={foo1}>1</button>
            <button onClick={() => foo2(23)}>2</button>*/}
        </div>
    );
}

export default App;