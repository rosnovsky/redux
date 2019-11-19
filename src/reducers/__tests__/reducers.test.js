import reducers from '../reducers';

const articles = [
    { title: 'Linux Article 1' },
    { title: 'Windows Article 1' },
    { title: 'Linux Article 2' },
];
const stateBefore = { articles, activeArticle: null };

describe('Reducers', () => {
    it('Returns initial state on unknown action', () => {
        const action = {
            type: 'POKE',
        };
        expect(reducers(stateBefore, action)).toEqual(stateBefore);
    });

    it('UPDATE_ARTICLES', () => {
        const filteredArticles = [
            { title: 'Linux Article 1', id: 0 },
            { title: 'Linux Article 2', id: 1 },
        ];

        const stateAfter = { articles: filteredArticles, activeArticle: null };
        const action = {
            type: 'UPDATE_ARTICLES',
            articles: articles,
        };
        expect(reducers({}, action)).toEqual(stateAfter);
    });

    it('TOGGLE_ACTIVE_ARTICLE', () => {
        const action = {
            type: 'TOGGLE_ACTIVATE_ARTICLE',
            article: { title: 'test', id: 2 },
        };
        const stateAfter = {
            articles,
            activeArticle: { title: 'test', id: 2 },
        };

        expect(reducers(stateBefore, action)).toEqual(stateAfter);
    });
});
