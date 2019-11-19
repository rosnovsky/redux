import React from 'react';
import { create } from 'react-test-renderer';
import Headlines from '../Headlines';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Headlines', () => {
    const articles = [
        { title: 'First Article', id: '1' },
        { title: 'Second Article', id: '2' },
        { title: 'Third Article', id: '3' },
    ];
    const initialState = { articles, activeArticle: null };

    it('Headlines component renders without crashing', () => {
        const app = create(mount(<Headlines articles={articles} />));
        let tree = app.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Headlines IDs work correctly', () => {
        const app = create(mount(<Headlines articles={articles} />));
        expect(app.toJSON().children[2].props.id).toBe('2');
    });

    it('Headlines render correctly', () => {
        const app = mount(<Headlines articles={articles} />);
        expect(app.find('h3')).toHaveLength(3);
    });
});
