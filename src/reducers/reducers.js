const reducers = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_ACTIVATE_ARTICLE':
            const newState = { ...state, activeArticle: action.article };
            return newState;
        case 'UPDATE_ARTICLES':
            return { articles: action.articles, activeArticle: null };
        default:
            return state;
    }
};

export default reducers;
