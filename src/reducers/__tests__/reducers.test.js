import reducers from '../reducers';

const articles = [
    { title: 'test', id: 1 },
    { title: 'test', id: 2 },
    { title: 'test', id: 3 },
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
        const action = {
            type: 'UPDATE_ARTICLES',
            articles: articles,
        };
        expect(reducers({}, action)).toEqual(stateBefore);
    });

    it('TOGGLE_ACTIVE_ARTICLE', () => {
        const action = {
            type: 'TOGGLE_ACTIVATE_ARTICLE',
            id: 2,
        };
        const stateAfter = {
            articles,
            activeArticle: { title: 'test', id: 2 },
        };

        expect(reducers(stateBefore, action)).toEqual(stateAfter);
    });
});
