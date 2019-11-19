import React from 'react';
import renderer, { create } from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers/reducers';

import Headlines from '../Headlines';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const articles = [
    { title: 'First Article', id: '0' },
    { title: 'Second Article', id: '1' },
    { title: 'Third Article', id: '2' },
];
const initialState = { articles, activeArticle: null };

function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    };
}

describe('Headlines', () => {
    it('Headlines component renders without crashing', () => {
        const app = create(mount(<Headlines articles={articles} />));
        let tree = app.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Headlines IDs work correctly', () => {
        const app = create(mount(<Headlines articles={articles} />));
        expect(app.toJSON().children[2].props.id).toBe('1');
    });

    it('Headlines render correctly', () => {
        const app = mount(<Headlines articles={articles} />);
        expect(app.find('h3')).toHaveLength(3);
    });
});
