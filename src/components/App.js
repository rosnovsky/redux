import React from 'react';
import '../styles/App.css';
import Headlines from './Headlines';
import News from './News';
import Metadata from './Metadata';

function App() {
    return (
        <div className="App">
            <h1>Linus News App</h1>
            <Headlines />
            <News />
            <Metadata />
        </div>
    );
}

export default App;
