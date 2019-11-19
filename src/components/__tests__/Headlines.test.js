import React from 'react';
import { create, act } from 'react-test-renderer';
import Headlines from '../Headlines';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [];
const mockStore = configureStore(middleware);

describe('Headlines', () => {
    const articles = [
        { title: 'First Article', id: 1 },
        { title: 'Second Article', id: 2 },
        { title: 'Third Article', id: 3 },
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
        expect(app.toJSON().children[2].props.id).toBe(2);
    });

    it('Activating article works correctly', () => {
        const onClick = sinon.spy();
        const app = mount(
            <Provider store={store}>
                <Headlines articles={initialState} />
            </Provider>
        );
        app.find('h3')
            .first()
            .simulate('click');

        console.log(app.find('h3').first());
        expect(app).toContain('<h3>');
    });
});
