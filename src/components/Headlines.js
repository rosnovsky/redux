import React, { useState, useEffect } from 'react';
import store from '../store';
import '../styles/App.css';

import Headline from './Headline';

function Headlines({ articles }) {
    const [headlines, setHeadlines] = useState(articles);

    const updateHeadlines = () => {
        setHeadlines(store.getState());
    };

    const unsubscribe = store.subscribe(updateHeadlines);
    unsubscribe();

    const activateArticle = event => {
        store.dispatch(
            {
                type: 'TOGGLE_ACTIVATE_ARTICLE',
                article: headlines[event.target.id],
            },
            headlines
        );
    };

    return (
        <div className="App">
            <h2>Headlines</h2>
            {articles.map(article => (
                <Headline
                    key={article.id}
                    article={article}
                    activateArticle={activateArticle}
                />
            ))}
        </div>
    );
}

export default Headlines;
