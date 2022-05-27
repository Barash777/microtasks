import React, {useState} from 'react';
import './App.css';

function App() {

    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }

    const setZero = () => {
        setA(a=0);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={setZero}>0</button>
        </div>
    );
}

export default App;