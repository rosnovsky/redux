const reducers = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_ACTIVATE_ARTICLE':
            const newState = { ...state, activeArticle: action.article };
            return newState;
        case 'UPDATE_ARTICLES':
            let id = 0;
            const filteredArticles = action.articles.filter(article =>
                article.title.includes('Linux')
            );
            filteredArticles.forEach(article => {
                article.id = id;
                id += 1;
            });
            return {
                articles: filteredArticles,
                activeArticle: null,
            };
        default:
            return state;
    }
};

export default reducers;
