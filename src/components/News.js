import React, { useState, useEffect } from 'react';
import store from '../store';
import '../styles/App.css';

// as soon as an headline is selected in the Headline component, we will take the article from the store and display it. We will have MARK_AS_READ action (removes article from the page, and removes its headline) and READ_LATER (tucks an article away in ReadLater component).

function News({ article }) {
    const [activeArticle, setActiveArticle] = useState();

    const updateArticle = () => {
        setActiveArticle(store.getState().activeArticle);
    };

    store.subscribe(updateArticle);

    return (
        <div className="App">
            <h2>News</h2>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        </div>
    );
}

export default News;
