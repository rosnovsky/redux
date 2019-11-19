import React from 'react';
import ReactDOM from 'react-dom';
import { create, act } from 'react-test-renderer';
import Headlines from '../Headlines';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Headlines', () => {
    const articles = [
        { title: 'First Article', id: 'article-1' },
        { title: 'Second Article', id: 'article-2' },
        { title: 'Third Article', id: 'article-3' },
    ];
    const initialState = { articles, activeArticle: null };
    let store, wrapper;

    beforeEach(() => {
        store = mockStore();
        wrapper = shallow(
            <Provider store={store}>
                <Headlines articles={initialState} />
            </Provider>
        );
    });

    it('Headlines component renders without crashing', () => {
        const app = create(wrapper);
        let tree = app.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Headlines IDs work correctly', () => {
        const app = create(wrapper);
        expect(app.toJSON().children[2].props.id).toBe('article-2');
    });

    it('Activating article works correctly', () => {
        const onClick = sinon.spy();

        const app = mount(
            <Provider store={store}>
                <Headlines articles={initialState} activateArticle={onClick} />
            </Provider>
        );
        const headline = app.find('#article-2');
        headline.simulate('click');
        // const activeArticle = store.getState();
        console.log(headline.debug());
        expect(onClick).toBeCalled();
        // const elements = app.getElements();
        // expect(app).toContain('<h3>');
        // app.findByProps({ id: 3 }).simulate('click');
    });
});
