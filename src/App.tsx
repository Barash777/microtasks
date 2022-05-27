import React from 'react';
import './App.css';
import Header from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <div className="App">
            <Header title={'Header from APP'}/>
            <Body titleForBody={'TITLE for BODY'}/>
            <Footer text={'Footer from APP'}/>
        </div>
    );
}

export default App;
