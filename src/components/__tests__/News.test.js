import React from 'react';
import renderer from 'react-test-renderer';
import News from '../News';
import { Provider } from 'react-redux';
import store from '../../store';

describe('News', () => {
    it('News component renders without crashing', () => {
        const article = { title: 'Article', content: 'Article Content' };
        const app = renderer.create(<News article={article} />);
        let tree = app.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
