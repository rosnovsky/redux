import React, { useState, useEffect } from 'react';
import store from '../store';
import '../styles/App.css';

function Headlines({ articles }) {
    const [headlines, setHeadlines] = useState([]);
    // as soon as we get news articles in redux store, we will dispatch an action SELECT_HEADLINES, which will return an array of selected headlines (say, with word Linux in them; this is completely unnecessary and normally we'd do this on the API level, but hey, it's a workout, so let's fo more then we have to.

    // Whenever a user clicks on a headline, we will dispatch an action ACTIVATE_ARTICLE, and this action will put current article and all its metadata into the state object for other components to consume.

    useEffect(() => {
        setHeadlines(store.getState());
        console.log(headlines);
    }, []);

    const activateArticle = event => {
        store.dispatch({
            type: 'TOGGLE_ACTIVATE_ARTICLE',
            id: event.target.id,
        });
    };

    return (
        <div className="App">
            <h2>Headlines</h2>
            {articles.map(article => (
                <h3 key={article.id} id={article.id} onClick={activateArticle}>
                    {article.title}
                    {`${article.active ? ' ! ' : ''}`}
                </h3>
            ))}
        </div>
    );
}

export default Headlines;
