import React from 'react';
import '../styles/App.css';

// as soon as an headline is selected in the Headline component, we will take the article from the store and display it. We will have MARK_AS_READ action (removes article from the page, and removes its headline) and READ_LATER (tucks an article away in ReadLater component).

function News() {
    return (
        <div className="App">
            <h2>News</h2>
        </div>
    );
}

export default News;
