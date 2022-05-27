import React, {useState} from 'react';
import './App.css';
import {FilterMoney} from './components/FilterMoney';

type FilterType = 'all' | 'ruble' | 'dollar'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'dollar', value: 100, number: ' a1234567890'},
        {banknots: 'dollar', value: 50, number: ' z1234567890'},
        {banknots: 'ruble', value: 100, number: ' w1234567890'},
        {banknots: 'dollar', value: 100, number: ' e1234567890'},
        {banknots: 'dollar', value: 50, number: ' c1234567890'},
        {banknots: 'ruble', value: 100, number: ' r1234567890'},
        {banknots: 'dollar', value: 50, number: ' x1234567890'},
        {banknots: 'ruble', value: 50, number: ' v1234567890'},
    ])

    // let filter: FilterType
    let [filter, setFilter] = useState('all')

    // let currentMoney = money.filter(oneBanknote => oneBanknote);
    let currentMoney = money;

    if (filter === 'dollar') {
        currentMoney = money.filter(oneBanknote => {
            if (oneBanknote.banknots === 'dollar')
                return oneBanknote
        })
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(oneBanknote => {
            if (oneBanknote.banknots === 'ruble')
                return oneBanknote
        })
    }


    const onClickFilterHandler = (currency: FilterType) => {
        // debugger
        console.log(currency)
        setFilter(currency)
    }


    return (
        <FilterMoney callBack={onClickFilterHandler} currentMoney={currentMoney}/>
    )
}

export default App;