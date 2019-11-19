import React from 'react';

function Headline({ article, activateArticle }) {
    return (
        <h3 key={article.id} id={article.id} onClick={activateArticle}>
            {article.title}
        </h3>
    );
}

export default Headline;
