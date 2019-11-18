import React from 'react';
import '../styles/App.css';
import Headlines from './Headlines';
import News from './News';
import Metadata from './Metadata';
import ReadLater from './ReadLater';

function App() {
    //on load, we will dispatch a GET_NEWS action, which will fetch news from the source or return an error.
    return (
        <div className="App">
            <h1>Linus News App</h1>
            <Headlines />
            <News />
            <Metadata />
            <ReadLater />
        </div>
    );
}

export default App;
