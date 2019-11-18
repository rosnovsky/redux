const articles = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_ACTIVATE_ARTICLE':
            let currentArticle = state.articles.filter(
                headline => headline.id === action.id
            );

            currentArticle[0].active = !currentArticle[0].active;

            const newState = { ...state, activeArticle: currentArticle[0] };

            return newState;
        case 'UPDATE_ARTICLES':
            return { articles: action.articles, activeArticle: null };
        default:
            return state;
    }
};

export default articles;
