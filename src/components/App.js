import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import store from '../store';
import moment from 'moment';
import uuid from 'uuid/v4';

import Headlines from './Headlines';
import News from './News';
import Metadata from './Metadata';
import ReadLater from './ReadLater';
import { dispatch } from 'rxjs/internal/observable/pairs';

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let error = {};
        const apiKey = '57ae048d4ae04603bd6bb1973b2cc445';
        const today = moment();
        const date = moment(today)
            .subtract(1, 'weeks')
            .toISOString();
        const excludedDomains =
            'sourceforge.net,github.com,askubuntu.com,stackoverflow.com,pypi.org,digitalocean.com,linuxsecurity.com,linuxgizmos.com,img.tfd.com';
        const url = `https://newsapi.org/v2/everything?q=Linux&from=${date}&language=en&sortBy=publishedAt&excludeDomains=${excludedDomains}&apiKey=${apiKey}`;

        const fetchArticles = async url => {
            const response = await fetch(url);
            const data = await response.json();
            const articles = await data.articles;
            articles.forEach(article => {
                article.id = uuid();
            });
            setArticles(articles);
            store.dispatch({
                type: 'UPDATE_ARTICLES',
                articles,
            });
        };
        fetchArticles(url);
    }, []);

    return (
        <div className="App">
            <h1>Linus News App</h1>
            <Headlines articles={articles} />
            <News />
            <Metadata />
            <ReadLater />
        </div>
    );
}

export default App;
