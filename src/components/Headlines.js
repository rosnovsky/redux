import React, { useState, useEffect } from 'react';
import store from '../store';
import '../styles/App.css';

import Headline from './Headline';

function Headlines({ articles }) {
    const [headlines, setHeadlines] = useState(articles);
    const [activeArticle, setActiveArticle] = useState();

    const updateHeadlines = () => {
        setHeadlines(store.getState().articles);
        setActiveArticle(store.getState().activeArticle);
    };

    store.subscribe(updateHeadlines);

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
            {headlines.map(article => (
                <Headline
                    key={article.id}
                    article={article}
                    active={
                        activeArticle && activeArticle.id === article.id
                            ? 'true'
                            : 'false'
                    }
                    activateArticle={activateArticle}
                />
            ))}
        </div>
    );
}

export default Headlines;
