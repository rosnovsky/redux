import React from 'react';
import renderer from 'react-test-renderer';
import News from '../News';
import { Provider } from 'react-redux';
import store from '../../store';

describe('News', () => {
    it('News component renders without crashing', () => {
        const app = renderer.create(<News />);
        let tree = app.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
