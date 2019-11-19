import React from 'react';

function Headline({ article, activateArticle, active }) {
    return (
        <h3
            key={article.id}
            id={article.id}
            onClick={activateArticle}
            style={{ color: active === 'true' ? 'red' : 'black' }}
        >
            {article.title}
        </h3>
    );
}

export default Headline;
